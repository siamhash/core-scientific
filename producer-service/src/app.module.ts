import { Module } from '@nestjs/common';
import { MinerModule } from './miner/miner.module';

@Module({
  imports: [MinerModule],
  controllers: [],
  providers: [],
})
export class AppModule {}
