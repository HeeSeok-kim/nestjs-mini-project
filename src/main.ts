import { NestFactory } from '@nestjs/core';
import { AppModule } from 'src/app.module';
import { GlobalExceptionFilter } from 'src/common/filter/global.exception.filter';
import { ValidationPipe } from '@nestjs/common';
import helmet from 'helmet';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.use(helmet());
  app.useGlobalPipes(new ValidationPipe());
  app.useGlobalFilters(new GlobalExceptionFilter());
  app.setGlobalPrefix('api');

  const PORT = process.env.PORT;
  app.enableCors();
  await app.listen(PORT);
}
bootstrap();
