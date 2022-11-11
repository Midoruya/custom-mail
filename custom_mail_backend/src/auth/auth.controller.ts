import {Body, Controller, Post, UsePipes, ValidationPipe} from '@nestjs/common';
import {AuthService} from "./auth.service";
import {UserDto} from "../user/user.dto";
import {ApiTags} from "@nestjs/swagger";

@ApiTags('auth')
@Controller('auth')
export class AuthController {

    constructor(
        private authService: AuthService
    ) { }

    @Post('login')
    @UsePipes(new ValidationPipe())
    async login(@Body() user: UserDto) {
        return this.authService.login(user);
    }

    @Post('register')
    @UsePipes(new ValidationPipe())
    register(@Body() user: UserDto) {
        return this.authService.register(user)
    }

}


