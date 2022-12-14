import { NestFactory } from '@nestjs/core';
import {DocumentBuilder, SwaggerModule} from '@nestjs/swagger';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule, {
    cors: true
  });

  if (process.env.isDev) {
    const config = new DocumentBuilder()
        .setTitle('custom mail backend')
        .setDescription('The custom mail API description')
        .setVersion('1.0')
        .addBearerAuth({
              type: 'http',
              scheme: 'bearer',
              bearerFormat: 'JWT',
              in: 'header',
            }, 'JWT')
        .build();
    const document = SwaggerModule.createDocument(app, config);
    SwaggerModule.setup('/', app, document);
  }
  await app.listen(3000);
}

bootstrap();
