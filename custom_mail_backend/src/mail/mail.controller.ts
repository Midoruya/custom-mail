import {Body, Controller, Delete, Param, Post, UseGuards, UsePipes, ValidationPipe} from '@nestjs/common';
import {MailService} from "./mail.service";
import {Mail} from "./mail.entity";
import {DeleteResult} from "typeorm";
import {MailDto} from "./mail.dto";
import {ApiBearerAuth, ApiTags} from "@nestjs/swagger";
import {AuthGuard} from "../auth/auth.guard";
import {UserInfoDto} from "../user/user.dto";

@ApiTags('mail')
@ApiBearerAuth('JWT')
@UseGuards(AuthGuard)
@Controller('mail')
export class MailController {

    constructor(
        private MailService: MailService
    ) {
    }

    @UsePipes(new ValidationPipe())
    @Post('/get/inbox')
    async getInbox(
        @Body() mail: UserInfoDto
    ): Promise<Array<Mail>> {
        return await this.MailService.getInbox(mail.email);
    }

    @UsePipes(new ValidationPipe())
    @Post('/get/sent')
    async getSent(
        @Body() mail: UserInfoDto
    ): Promise<Array<Mail>> {
        return await this.MailService.getSent(mail.email);
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


