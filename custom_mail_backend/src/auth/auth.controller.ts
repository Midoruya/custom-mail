import {Body, Controller, Post} from '@nestjs/common';
import {AuthService} from "./auth.service";
import {UserDto} from "../user/user.dto";
import {ApiTags} from "@nestjs/swagger";

@ApiTags('auth')
@Controller('auth')
export class AuthController {

    constructor(
        private AuthService: AuthService
    ) { }

    @Post('login')
    async login(@Body() user: UserDto) {
        return {
            message: "login",
            data: user
        };
    }

    @Post('register')
    async register(@Body() user: UserDto) {
        return {
            message: "register",
            data: user
        };
    }

}


