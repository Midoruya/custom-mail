import { Module } from '@nestjs/common';
import { TypeOrmModule } from "@nestjs/typeorm";
import { MailModule } from './mail/mail.module';

@Module({
  imports: [
      TypeOrmModule.forRoot({
          type: "sqlite",
          database: "mailDatabase",
          entities: [ __dirname + "/**/*.entity{.ts,.js}"  ],
          synchronize: true,
      }),
      MailModule,
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
