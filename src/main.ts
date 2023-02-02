import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { SwaggerModule, DocumentBuilder } from '@nestjs/swagger';
import env from './config';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  console.log(env.port);
  const config = new DocumentBuilder()
    .setTitle('Cabideiro API')
    .setDescription('The cabideiro API description')
    .setVersion('1.0')
    .build();
  const document = SwaggerModule.createDocument(app, config);
  SwaggerModule.setup('api', app, document);

  await app.listen(env.port);
}
bootstrap();
