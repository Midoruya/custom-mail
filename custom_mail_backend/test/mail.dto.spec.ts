import {MailDto} from "../src/mail/mail.dto";
import {IsEmail, IsNotEmpty} from "./util/dto.util";

describe("MailDto", () => {
    const mailDto: MailDto = new MailDto();
    const unitTestForSenderAndReceiver = (type: string) => {
        IsNotEmpty(MailDto, mailDto, type);
        IsEmail(MailDto, mailDto, type);
    };
    beforeAll(() => {
        mailDto.sender = "";
        mailDto.receiver = "";
        mailDto.title = "";
        mailDto.message = "";
    });
    describe("validate sender", () => unitTestForSenderAndReceiver("sender"));
    describe("validate receiver", () => unitTestForSenderAndReceiver("receiver"));
    describe("validate title", () => IsNotEmpty(MailDto, mailDto,"title"));
    describe("validate message", () => IsNotEmpty(MailDto, mailDto,"message"));
});