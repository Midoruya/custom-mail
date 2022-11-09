import {IsEmail, IsNotEmpty, IsString} from "class-validator";
import {ApiModelProperty} from "@nestjs/swagger/dist/decorators/api-model-property.decorator";

export class MailDto {
    @ApiModelProperty()
    @IsString()
    @IsNotEmpty()
    @IsEmail()
    sender: string;

    @ApiModelProperty()
    @IsString()
    @IsNotEmpty()
    @IsEmail()
    receiver: string;

    @ApiModelProperty()
    @IsString()
    @IsNotEmpty()
    title: string;

    @ApiModelProperty()
    @IsString()
    @IsNotEmpty()
    message: string;
}
