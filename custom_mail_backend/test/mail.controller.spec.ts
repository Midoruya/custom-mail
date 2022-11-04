import { Test, TestingModule } from '@nestjs/testing';
import { MailController } from 'src/mail/mail.controller';
import {MailService} from "../src/mail/mail.service";


describe("MailController", () => {
    let mailController;

    beforeEach(async () => {
        const app: TestingModule = await Test.createTestingModule({
        controllers: [MailController],
        providers: [MailService],
        }).compile();

        mailController = app.get<MailController>(MailController);
    });
    describe("work with database", () => {
        it("should return all mails", () => {
            expect(mailController.getAll()).toBeDefined();
        });
    });
});