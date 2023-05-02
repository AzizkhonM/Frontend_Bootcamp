import { BadRequestException, ForbiddenException, Injectable, UnauthorizedException } from '@nestjs/common';
import { CreateAdminDto } from './dto/create-admin.dto';
import { UpdateAdminDto } from './dto/update-admin.dto';
import { InjectModel } from '@nestjs/mongoose';
import { Admin, AdminDocument } from './schemas/admin.schema';
import { Model } from 'mongoose';
import * as bcrypt from "bcrypt"
import { JwtService } from '@nestjs/jwt';
import { LoginAdminDto } from './dto/login-admin.dto';
import { Response } from 'express';


@Injectable()
export class AdminService {

  constructor(@InjectModel(Admin.name) private adminModel: Model<AdminDocument>,
  private readonly jwtService: JwtService) {}

  async create(createAdminDto: CreateAdminDto) {
    const { first_name, last_name, email, password, confirm_password } = createAdminDto
    if(password != confirm_password){
      throw new BadRequestException("Parollar o'zaro mos emas!")
    }
    let admin = this.adminModel.findOne({email: email}).exec()

    console.log(await admin);
    
  
    if(admin){
      throw new BadRequestException("Email foydalanishda")
    }
    const hashed_password = await bcrypt.hash(password, 7)
    let createdAdmin = new this.adminModel({ first_name, last_name, email, hashed_password }).save();
    
    return {
      message: "Admin qo'shildi",
      createdAdmin: {
        first_name: (await createdAdmin).first_name,
        last_name: (await createdAdmin).last_name
      }
    };
  }

  async login(loginAdminDto: LoginAdminDto, res: Response) {
    const { email, password } = loginAdminDto
    const admin = await this.adminModel.findOne({ email }).exec()

    if (!admin) {
      throw new UnauthorizedException("Foydalanuvchi ro'yxatdan o'tmagan")
    }
    const IsMatchPass = await bcrypt.compare(password, admin.hashed_password)
    if (!IsMatchPass) {
      throw new UnauthorizedException("Parol noto'g'ri")
    }
    console.log(admin);
    
    const tokens = await this.getTokens(admin)

    const hashed_token = await bcrypt.hash(tokens.refresh_token, 7)

    const updatedAdmin = await this.adminModel.findOneAndUpdate(
      { email },
      { hashed_token: hashed_token },
      { new: true }
    )


    res.cookie("refresh_token", tokens.refresh_token, {
      maxAge: 15 * 24 * 60 * 60 * 1000,
      httpOnly: true
    })

    return {
      message: "Admin tizimga muvaffaqiyatli kirdi",
      user: updatedAdmin,
      tokens
    }
  }

  async logout(refreshToken: string, res: Response) {
    const userData = await this.jwtService.verify(refreshToken, {
      secret: process.env.PRIVATE_KEY
    })
    console.log(userData)
    if (!userData) {
      throw new ForbiddenException("Foydalanuvchi topilmadi")
    }
    const updatedUser = await this.adminModel.findOneAndUpdate(
      { id: userData._id },
      { hashed_token: null },
      { new: true }
    )

    res.clearCookie("refresh_token")

    return {
      message: "Foydalanuvchi tizimdan muvaffaqiyatli chiqarildi"
    }

  }

  findAll(): Promise<Admin[]> {
    return this.adminModel.find().exec();
  }

  findOne(id: string): Promise<Admin> {
    return this.adminModel.findById(id).exec();
  }

  update(id: string, updateAdminDto: UpdateAdminDto) {
    return this.adminModel.findByIdAndUpdate(id, updateAdminDto, { new: true }).exec();
  }

  remove(id: string) {
    return this.adminModel.findByIdAndDelete(id).exec();
  }

  async getTokens(admin: any){
    const jwtPayload = {
      id: admin.id
    }

    const [ accessToken, refreshToken ] = await Promise.all([
      this.jwtService.signAsync(jwtPayload, {
        secret: process.env.PRIVATE_KEY,
        expiresIn: process.env.ACCESS_TOKEN_TIME
      }),
      this.jwtService.signAsync(jwtPayload, {
        secret: process.env.PRIVATE_KEY,
        expiresIn: process.env.REFRESH_TOKEN_TIME
      })
    ])

    return {
      access_token: accessToken,
      refresh_token: refreshToken
    }
  }
}
