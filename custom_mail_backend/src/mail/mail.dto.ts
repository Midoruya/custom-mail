import {IsEmail, IsNotEmpty, IsString} from "class-validator";

export class MailDto {
    @IsString()
    @IsNotEmpty()
    @IsEmail()
    sender: string;

    @IsString()
    @IsNotEmpty()
    @IsEmail()
    receiver: string;

    @IsString()
    @IsNotEmpty()
    title: string;

    @IsString()
    @IsNotEmpty()
    message: string;
}
