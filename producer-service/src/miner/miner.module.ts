import { Module } from '@nestjs/common';
import { MinerService } from './miner.service';
import { MinerController } from './miner.controller';
import { MinerRepository } from './miner.repository';

@Module({
  controllers: [MinerController],
  providers: [MinerService, MinerRepository]
})
export class MinerModule {}
