import dataSource from 'src/data-source'
import { Repository } from 'typeorm'
import { CreateMinerLogDto } from './dto/create-miner-log.dto'
import { MinerLog } from './entities/miner-log.entity'

export class MinerLogRepository extends Repository<MinerLog> {
  async createMinerLog (minerLogDto: CreateMinerLogDto): Promise<MinerLog> {
    return await dataSource.getRepository(MinerLog).save(minerLogDto)
  }
}
