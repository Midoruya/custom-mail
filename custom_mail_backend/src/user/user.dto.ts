import {IsEmail, IsNotEmpty, IsString, MinLength} from "class-validator";

export class UserDto {
    @IsString()
    @IsNotEmpty()
    @IsEmail()
    mail: string;

    @IsString()
    @IsNotEmpty()
    @MinLength(5)
    password: string;
}