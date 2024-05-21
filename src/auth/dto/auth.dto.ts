import { IsAlpha, IsEmail, IsNotEmpty, IsNumber, IsString } from "class-validator";

export class AuthDto {
    @IsString()
    @IsEmail()
    email: string;

    @IsString()
    password: string;
}