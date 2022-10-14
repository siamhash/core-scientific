import { NestFactory } from '@nestjs/core';
import { Transport } from '@nestjs/microservices';
import { AppModule } from './app.module';
import { MinerLogService } from './miner-log/miner-log.service';

import "reflect-metadata"

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  const minerLogService = app.get<MinerLogService>(MinerLogService)

  minerLogService.pollProducer()

  app.connectMicroservice({
    transport: Transport.TCP,
    options: {
      port: 3002
    }
  })
  await app.startAllMicroservices()
  await app.listen(3002);
}
bootstrap();
