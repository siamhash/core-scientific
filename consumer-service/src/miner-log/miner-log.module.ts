import { Module } from '@nestjs/common'
import { MinerLogService } from './miner-log.service'
import { MinerLogRepository } from './miner-log.repository'
import { ClientsModule, Transport } from '@nestjs/microservices'

@Module({
  imports: [
    ClientsModule.register([
      {
        name: 'PRODUCER',
        transport: Transport.TCP,
        options: {
          port: 3001,
        },
      },
    ]),
  ],
  controllers: [],
  providers: [MinerLogService, MinerLogRepository],
})
export class MinerLogModule {}
