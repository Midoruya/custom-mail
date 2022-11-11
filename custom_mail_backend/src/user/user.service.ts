import {User} from "./user.entity";
import {InjectRepository} from "@nestjs/typeorm";
import {Injectable} from "@nestjs/common";
import {Repository} from "typeorm";
import {UserDto} from "./user.dto";

@Injectable()
export class UserService {

    constructor(
        @InjectRepository(User) private userRepository: Repository<User>
    ) { }

    async getUserByEmail(email: string) {
        return await this.userRepository.findOne({where: {mail: email}});
    }

    async createUser(user: UserDto) {
        return await this.userRepository.save(user);
    }

}
