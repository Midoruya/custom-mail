import { Test, TestingModule } from '@nestjs/testing';
import { INestApplication } from '@nestjs/common';
import * as request from 'supertest';
import { AppModule } from '../src/app.module';
import {MailCreationAttributes} from "../src/mail/mail.entity";


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
                expect(res.body.sender).toEqual(testData.sender);
                expect(res.body.receiver).toEqual(testData.receiver);
                expect(res.body.title).toEqual(testData.title);
                expect(res.body.message).toEqual(testData.message);
                testingMailIndex = res.body.id;
            });
    });
    it('/mail/:id (GET)', () => {
        return request(app.getHttpServer())
            .get(`/mail/${testingMailIndex}`)
            .expect(200)
            .expect(res => {
                expect(res.body.id).toEqual(testingMailIndex);
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