import { Module } from '@nestjs/common';
import { MinerLogModule } from './miner-log/miner-log.module';

@Module({
  imports: [MinerLogModule],
  controllers: [],
  providers: [],
})
export class AppModule {}
