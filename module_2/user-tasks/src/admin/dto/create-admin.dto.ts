import { ApiProperty } from "@nestjs/swagger"
import { IsEmail, IsString, IsStrongPassword } from "class-validator"

export class CreateAdminDto {
    @IsString()
    @ApiProperty({ example: "Firstname", description: "Admin ismi" })
    first_name: string

    @IsString()
    @ApiProperty({ example: "Lastname", description: "Admin familiyasi" })
    last_name: string

    @IsEmail()
    @ApiProperty({ example: "email@mail.com", description: "Admin e-maili" })
    email: string

    @IsString()
    @IsStrongPassword()
    @ApiProperty({ example: "P@ssw0rd", description: "O'ylab topiladigan parol" })
    password: string

    @IsString()
    @ApiProperty({ example: "P@ssw0rd", description: "Parolni tasdiqlash" })
    confirm_password: string
}