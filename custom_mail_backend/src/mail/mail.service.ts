import { Injectable } from '@nestjs/common';
import { InjectRepository } from "@nestjs/typeorm";
import { Repository, DeleteResult } from "typeorm"
import {Mail} from "./mail.entity";
import {MailDto} from "./mail.dto";

@Injectable()
export class MailService {

    constructor(
        @InjectRepository(Mail) private MailRepo: Repository<Mail>
    ) {
    }

    async getAll(): Promise<Array<Mail>> {
        // SELECT * FROM mail
        return await this.MailRepo.find();
    }

    async getByIndex(index: number): Promise<Mail> {
        // SELECT * FROM mail where id = { id }
        return await this.MailRepo.findOne({
            where : {
                id: index
            }
        });
    }

    async createMail(content: MailDto): Promise<Mail> {
        // INSERT INTO mail (sender, receiver, title, message) VALUES (content.sender, content.receiver, content.title, content.message)
        return await this.MailRepo.save(content);
    }

    async deleteMail(id: number): Promise<DeleteResult> {
        // DELETE FROM mail WHERE id = { id }
        return await this.MailRepo.delete(id);
    }
}
