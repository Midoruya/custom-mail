import {IsEmail, IsNotEmpty, IsString, MinLength} from "class-validator";
import {ApiModelProperty} from "@nestjs/swagger/dist/decorators/api-model-property.decorator";

export class UserDto {
    @ApiModelProperty()
    @IsString()
    @IsNotEmpty()
    @IsEmail()
    mail: string;

    @ApiModelProperty()
    @IsString()
    @IsNotEmpty()
    @MinLength(5)
    password: string;
}