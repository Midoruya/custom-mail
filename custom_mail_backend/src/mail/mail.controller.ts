import {Body, Controller, Delete, Get, Param, Post} from '@nestjs/common';
import {MailService} from "./mail.service";
import {Mail} from "./mail.entity";
import {DeleteResult} from "typeorm";

@Controller('mail')
export class MailController {

    constructor(
        private MailService: MailService
    ) {
    }

    @Get('/')
    async getAll(): Promise<Array<Mail>> {
        // SELECT * FROM mail
        return await this.MailService.getAll();
    }

    @Get('/:id')
    async getOneByIndex(
        @Param('id') id: number
    ): Promise<Mail> {
        // SELECT * FROM mail where id = { id }
        return await this.MailService.getByIndex(id);
    }

    @Post('/create')
    async createMessage(
        @Body() mail: Mail
    ): Promise<Mail> {
        return await this.MailService.createMail(mail);
    }

    @Delete('/remove/:id')
    async removeMessage(
        @Param('id') id: number
    ): Promise<DeleteResult> {
        return await this.MailService.deleteMail(id);
    }
}


