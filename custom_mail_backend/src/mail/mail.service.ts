import { Injectable } from '@nestjs/common';
import { InjectRepository } from "@nestjs/typeorm";
import { Repository, DeleteResult } from "typeorm"
import { Mail } from "./mail.entity";

@Injectable()
export class MailService {

    constructor(
        @InjectRepository(Mail) private MailRepo: Repository<Mail>
    ) {
    }

    async getAll(): Promise<Array<Mail>> {
        return await this.MailRepo.find();
    }

    async getByIndex(index: number): Promise<Mail> {
        return await this.MailRepo.findOneById(index);
    }

    async createMail(content: Mail): Promise<Mail> {
        return await this.MailRepo.save(content);
    }

    async deleteMail(id: number): Promise<DeleteResult> {
        return await this.MailRepo.delete(id);
    }
}
