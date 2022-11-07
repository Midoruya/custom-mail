import {Body, Controller, Delete, Get, Param, Post, UsePipes, ValidationPipe} from '@nestjs/common';
import {MailService} from "./mail.service";
import {Mail} from "./mail.entity";
import {DeleteResult} from "typeorm";
import {MailDto} from "./mail.dto";

@Controller('mail')
export class MailController {

    constructor(
        private MailService: MailService
    ) {
    }

    @Get('/')
    async getAll(): Promise<Array<Mail>> {
        return await this.MailService.getAll();
    }

    @Get('/:id')
    async getOneByIndex(
        @Param('id') id: number
    ): Promise<Mail> {
        return await this.MailService.getByIndex(id);
    }

    @UsePipes(new ValidationPipe())
    @Post('/create')
    async createMessage(
        @Body() mail: MailDto
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


