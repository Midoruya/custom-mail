import {Injectable, NotFoundException} from '@nestjs/common';
import {InjectRepository} from "@nestjs/typeorm";
import {DeleteResult, Repository} from "typeorm"
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

    async getInbox(email: string): Promise<Array<Mail>> {
        // SELECT * FROM mail WHERE receiver = { email }
        return await this.MailRepo.find({where: {receiver: email}});
    }

    async getSent(email: string): Promise<Array<Mail>> {
        // SELECT * FROM mail WHERE sender = { email }
        return await this.MailRepo.find({where: {sender: email}});
    }

    async getByIndex(index: number): Promise<Mail> {
        // SELECT * FROM mail where id = { id }
        const getMail = await this.MailRepo.findOne({where: {id: index}});
        if (getMail == null) throw new NotFoundException("Mail not found");
        return getMail;
    }

    async createMail(content: MailDto): Promise<Mail> {
        // INSERT INTO mail (sender, receiver, title, message) VALUES (content.sender, content.receiver, content.title, content.message)
        return await this.MailRepo.save(content);
    }

    async deleteMail(id: number): Promise<DeleteResult> {
        // DELETE FROM mail WHERE id = { id }
        const deleteMail = await this.MailRepo.delete(id);
        if (deleteMail.affected == 0) throw new NotFoundException("Mail not found");
        return deleteMail;
    }
}
