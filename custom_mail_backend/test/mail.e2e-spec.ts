import { Test, TestingModule } from '@nestjs/testing';
import { INestApplication } from '@nestjs/common';
import * as request from 'supertest';
import { AppModule } from '../src/app.module';
import {Mail, MailCreationAttributes} from "../src/mail/mail.entity";


describe('MailController (e2e)', () => {
    let app: INestApplication;
    let testingMailIndex: number;
    beforeAll(async () => {
        const moduleFixture: TestingModule = await Test.createTestingModule({
            imports: [AppModule],
        }).compile();
        app = moduleFixture.createNestApplication();
        await app.init();
    });

    it('/mail (GET)', () => {
        return request(app.getHttpServer())
            .get('/mail')
            .expect(200)
    });
    it('/mail (POST)', () => {
        let testData = {
            sender: "unitTest.mail.ru",
            receiver: "unitTestReceiver.mail.ru",
            title: "unitTestTitle",
            message: "unitTestMessage",
        } as MailCreationAttributes;
        return request(app.getHttpServer()).post('/mail/create')
            .send(testData)
            .expect(201)
            .expect(res => {
                const resBody = res.body as Mail;
                expect(resBody.sender).toEqual(testData.sender);
                expect(resBody.receiver).toEqual(testData.receiver);
                expect(resBody.title).toEqual(testData.title);
                expect(resBody.message).toEqual(testData.message);
                testingMailIndex = resBody.id;
            });
    });
    it('/mail/:id (GET)', () => {
        return request(app.getHttpServer())
            .get(`/mail/${testingMailIndex}`)
            .expect(200)
            .expect(res => {
                let resBody = res.body as Mail;
                expect(resBody.id).toEqual(testingMailIndex);
            });
    });
    it('/mail (DELETE)', () => {
        return request(app.getHttpServer()).delete('/mail/remove/' + testingMailIndex)
            .expect(200)
            .expect({
                "raw": [],
                "affected": 1
            })
    });
});