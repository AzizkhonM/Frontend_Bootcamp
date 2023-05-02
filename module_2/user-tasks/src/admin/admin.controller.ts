import { Controller, Get, Post, Body, Patch, Param, Delete, Res } from '@nestjs/common';
import { AdminService } from './admin.service';
import { CreateAdminDto } from './dto/create-admin.dto';
import { UpdateAdminDto } from './dto/update-admin.dto';
import { ApiOperation, ApiTags } from '@nestjs/swagger';
import { LoginAdminDto } from './dto/login-admin.dto';
import { Response } from 'express';
import { CookieGetter } from '../decorators/cookieGetter.decorator';

@ApiTags("Adminlar ustida amallar")
@Controller('admin')
export class AdminController {
  constructor(private readonly adminService: AdminService) {}

  @ApiOperation({ summary: "Ro'yxatdan o'tish" })
  @Post("register")
  create(@Body() createAdminDto: CreateAdminDto) {
    return this.adminService.create(createAdminDto);
  }

  @ApiOperation({ summary: "Kirish" })
  @Post("login")
  login(@Body() loginAdminDto: LoginAdminDto, @Res({ passthrough: true }) res: Response ){
    return this.adminService.login(loginAdminDto, res)
  }

  @ApiOperation({ summary: "Chiqish" })
  @Get("logout")
  logout(@CookieGetter("refresh_token") refreshToken: string, @Res({ passthrough: true }) res: Response){
    return this.adminService.logout(refreshToken, res)
  }

  @ApiOperation({ summary: "Barcha adminlarni ko'rish" })
  @Get("all")
  findAll() {
    return this.adminService.findAll();
  }

  @ApiOperation({ summary: "Adminni ID bo'yicha ko'rish" })
  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.adminService.findOne(id);
  }

  @ApiOperation({ summary: "Admin ma'lumotlarini o'zgartirish" })
  @Patch(':id')
  update(@Param('id') id: string, @Body() updateAdminDto: UpdateAdminDto) {
    return this.adminService.update(id, updateAdminDto);
  }

  @ApiOperation({ summary: "Adminni o'chirib tashlash" })
  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.adminService.remove(id);
  }
}
