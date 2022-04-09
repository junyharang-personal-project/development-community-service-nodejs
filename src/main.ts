import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import * as config from 'config';
import {Logger} from "@nestjs/common";
import {swaggerConfig} from "./util/swagger.config";

async function bootstrap() {

  const logger = new Logger();

  const app = await NestFactory.create(AppModule);

  const serverConfig = config.get('server');

  const port = serverConfig.port;

  swaggerConfig(app);

  await app.listen(port);

  logger.log(`Node.js 기반 Nese.js의 Back-End Server가 ${port}번으로 실행 되었습니다!`);



  // console.log(`Node.js 기반 Nese.js의 Back-End Server가 ${port}번으로 실행 되었습니다!`);
} // bootstrap() 끝
bootstrap();
