import {forwardRef, Module} from '@nestjs/common';
import { MailService } from './mail.service';
import { MailController } from './mail.controller';
import {TypeOrmModule} from "@nestjs/typeorm";
import {Mail} from "./mail.entity";
import {AuthModule} from "../auth/auth.module";

@Module({
  imports: [
      TypeOrmModule.forFeature([
          Mail
      ]),
      forwardRef(() => AuthModule)
  ],
  providers: [MailService],
  controllers: [MailController]
})
export class MailModule {}
