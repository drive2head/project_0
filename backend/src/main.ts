import { NestFactory } from '@nestjs/core';

import Config from '../config/default-config';

import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  await app.listen(Config.PORT);
}
void bootstrap();
