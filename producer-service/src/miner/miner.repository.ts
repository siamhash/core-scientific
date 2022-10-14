import dataSource from 'src/data-source'
import { Repository } from 'typeorm'
import { CreateMinerDto } from './dto/create-miner.dto'
import { Miner } from './entities/miner.entity'

export class MinerRepository extends Repository<Miner> {
  async createMiner (minerDto: CreateMinerDto): Promise<Miner> {
    return await dataSource.getRepository(Miner).save(minerDto)
  }

  async findMiner (condition: object) {
    return await dataSource.getRepository(Miner).find(condition)
  }

  async findOneMiner (condition: object) {
    return await dataSource.getRepository(Miner).findOne(condition)
  }

  async updateMiner (condition: object, minerDto: CreateMinerDto) {
    return await dataSource.getRepository(Miner).update(condition, minerDto)
  }
}
