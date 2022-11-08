import {IsEmail, IsNotEmpty, MinLength} from "./util/dto.util";
import {UserDto} from "../src/user/user.dto";

describe("UserDto", () => {
    const userDto: UserDto = new UserDto();
    beforeAll(() => {
        userDto.mail = "";
        userDto.password = "";
    });
    describe("validate mail is not empty", () => IsNotEmpty(UserDto, userDto, "mail"));
    describe("validate mail is not empty", () => IsEmail(UserDto, userDto, "mail"));
    describe("validate password is not empty", () => IsNotEmpty(UserDto, userDto, "password"));
    describe("validate password min length", () => MinLength(UserDto, userDto, "password", 5));
});