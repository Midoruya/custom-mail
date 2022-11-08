import { Test, TestingModule } from '@nestjs/testing';
import { INestApplication } from '@nestjs/common';
import * as request from 'supertest';
import { AppModule } from '../src/app.module';
import { UserDto } from '../src/user/user.dto';
import {User} from "../src/user/user.entity";

interface response {
    message: string;
    data: UserDto;
}

describe('MailController (e2e)', () => {
    let app: INestApplication;
    beforeAll(async () => {
        const moduleFixture: TestingModule = await Test.createTestingModule({
            imports: [AppModule],
        }).compile();
        app = moduleFixture.createNestApplication();
        await app.init();
    });

    it('register (POST)', () => {
        let testData = {
            mail: "test@mail.ru",
            password: "123456",
        } as UserDto;
        return request(app.getHttpServer()).post('/auth/register')
            .send(testData)
            .expect(res => {
                const resBody = res.body as response;
                const userData = resBody.data as User;
                expect(resBody.message).toBe("register");
                expect(userData.mail).toEqual(testData.mail);
                expect(userData.password).toEqual(testData.password);
            });
    });
    it('login (POST)', () => {
        let testData = {
            mail: "test@mail.ru",
            password: "123456",
        } as UserDto;
        return request(app.getHttpServer()).post('/auth/login')
            .send(testData)
            .expect(res => {
                const resBody = res.body as response;
                const userData = resBody.data as User;
                expect(resBody.message).toBe("login");
                expect(userData.mail).toEqual(testData.mail);
                expect(userData.password).toEqual(testData.password);
            });
    });
});