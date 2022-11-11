import {HttpException, HttpStatus, Injectable, UnauthorizedException} from "@nestjs/common";
import {UserService} from "../user/user.service";
import {UserDto} from "../user/user.dto";
import * as bcrypt from 'bcrypt';
import {User} from "../user/user.entity";
import {JwtService} from "@nestjs/jwt";

@Injectable()
export class AuthService {

    constructor(
        private userService: UserService,
        private jwtService: JwtService
    ) { }

    async login(user: UserDto) {
        const foundUser = await this.userService.getUserByEmail(user.mail);
        if (!foundUser)
            throw new HttpException('User not found', HttpStatus.BAD_REQUEST);

        if (!await bcrypt.compare(user.password, foundUser.password))
            throw new UnauthorizedException('Invalid credentials');

        const token = await this.generateToken(foundUser);
        console.log(token);
        return {
            mail: foundUser.mail,
            token: token
        };
    }

    async generateToken(user: User) {
        const payload = {mail: user.mail, id: user.id};
        const token = this.jwtService.sign(payload);
        console.log(token);
        return token
    }


    async register(user: UserDto) {
        const foundUser = await this.userService.getUserByEmail(user.mail);

        if (foundUser)
            throw new HttpException('User already exists', HttpStatus.BAD_REQUEST);

        const hashedPassword = await bcrypt.hash(user.password, 10);
        const createdUser = await this.userService.createUser({ ...user, password: hashedPassword });
        const token = await this.generateToken(createdUser);
        console.log(token);
        return {
            mail: createdUser.mail,
            token: token
        };
    }

}
