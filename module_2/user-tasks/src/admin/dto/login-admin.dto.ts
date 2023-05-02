import { ApiProperty } from "@nestjs/swagger"
import { IsEmail, IsString, IsStrongPassword } from "class-validator"

export class LoginAdminDto {
    @IsEmail()
    @ApiProperty({ example: "email@mail.com", description: "E-mail" })
    email: string

    @IsString()
    @ApiProperty({ example: "P@ssw0rd", description: "Parol" })
    password: string
}