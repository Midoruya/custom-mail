import {Injectable} from "@nestjs/common";
import {UserService} from "../user/user.service";
import {UserDto} from "../user/user.dto";

@Injectable()
export class AuthService {

    constructor(
        private userService: UserService
    ) { }

    async login(user: UserDto) {

    }

    async register(user: UserDto) {

    }

}
