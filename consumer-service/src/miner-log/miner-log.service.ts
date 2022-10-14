import { Inject, Injectable } from '@nestjs/common';
import { ClientProxy } from '@nestjs/microservices';
import { CreateMinerLogDto } from './dto/create-miner-log.dto';
import { MinerDto } from './dto/miner.dto';
import { MinerLogRepository } from './miner-log.repository';

@Injectable()
export class MinerLogService {
  constructor (
    private readonly minerLogRepo: MinerLogRepository,
    @Inject('PRODUCER') private readonly producerClient: ClientProxy,
  ) {}

  getMinerInfo() {
    return this.producerClient.send({
        cmd: 'get_miner_stats'
      }, {})
  }

  public async pollProducer() {
    
    this.getMinerInfo().subscribe(res => {
        console.log(`Telemetry Stats - Created At ${new Date().getTime()}`, res)
        this.createMinerLog(res)
    })

        //Poll every 5 seconds or whatever
    setTimeout(() => this.pollProducer(), 5000);
  }

  createMinerLog(miners: MinerDto[]) {
    miners.forEach(async miner => {
      let minerLogBody: CreateMinerLogDto
      minerLogBody = await this.generateMinerLogBody(miner)
      this.minerLogRepo.createMinerLog(minerLogBody)
    })
  }

  generateMinerLogBody(miner: MinerDto) {
    return {
      fans: miner.fans,
      hashrate: miner.hashrate,
      name: miner.name,
      health: miner.health,
      shelf: miner.shelf,
      rack: miner.rack,
      mineId: miner.id
    }
  }
}
