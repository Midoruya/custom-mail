import { Module } from '@nestjs/common';
import { TypeOrmModule } from "@nestjs/typeorm";
import { MailModule } from './mail/mail.module';
import {UserModule} from "./user/user.module";

@Module({
  imports: [
      TypeOrmModule.forRoot({
          type: "sqlite",
          database: "mailDatabase",
          entities: [ __dirname + "/**/*.entity{.ts,.js}"  ],
          synchronize: true,
      }),
      MailModule,
      UserModule,
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
