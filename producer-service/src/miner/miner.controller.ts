import { Controller } from '@nestjs/common';
import { MinerService } from './miner.service';
import { MessagePattern } from '@nestjs/microservices';

@Controller('miner')
export class MinerController {
  constructor(private readonly minerService: MinerService) {}

  @MessagePattern({ cmd: 'get_miner' })
  handleFetchMiner(data) {
    const { id } = data
    return this.minerService.findOrCreateMiner(id)
  }

  @MessagePattern({ cmd: 'get_miner_stats' })
  handleFetchMinerStats() {
    return this.minerService.getStats()
  }
}
