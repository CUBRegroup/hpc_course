import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { Logger } from '@nestjs/common';
import * as config from 'config';

async function bootstrap() {
  const logger = new Logger('bootstrap');

  const serverConfig = config.get('server');

  const app = await NestFactory.create(AppModule, { cors: true });
  // console.log('Node env ', process.env.NODE_ENV, 'Cors enabled');
  app.enableCors();
  // if (process.env.NODE_ENV === 'development') {
  //   app.enableCors({ origin: serverConfig.origin });
  //   logger.log(`Accepting requests from origin "${serverConfig.origin}"`);
  // }

  const port = 4000;
  await app.listen(port);

  logger.log(`Application listening on port ${port}`);
}
bootstrap();
