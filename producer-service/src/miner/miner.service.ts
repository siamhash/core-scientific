import { Injectable } from '@nestjs/common'
import { fanConstraints } from './constraints/fans.constraint'
import { CreateMinerDto } from './dto/create-miner.dto'
import { MinerRepository } from './miner.repository'

@Injectable()
export class MinerService {
  constructor (
    private readonly minerRepo: MinerRepository,
  ) {}

  async isExisting (id: string) {
    const miner = await this.minerRepo.findOneMiner({
      where: {
        id: id,
      },
    })
    return miner ? true : false
  }

  getMiner (id: string) {
    return this.minerRepo.findOneMiner({
      where: {
        id: id,
      },
    })
  }

  async findOrCreateMiner (id: string) {
    let miner
    const minerExist = await this.isExisting(id)
    const minerBody: CreateMinerDto = await this.generateMinerBody(id)
    if (!minerExist) {
      await this.minerRepo.createMiner(minerBody)
    } else {
      await this.minerRepo.updateMiner({
        id: id
      }, minerBody)
    }
    miner = await this.getMiner(id)
    return miner
  }

  async getStats() {
    let miners
    miners = await this.minerRepo.findMiner({})
    miners.forEach(async miner => {
      const updateBody: CreateMinerDto = await this.generateMinerBody(miner.id)
      delete updateBody.rack
      delete updateBody.shelf
      await this.minerRepo.updateMiner({
        id: miner.id
      }, updateBody)
    })
    return this.minerRepo.findMiner({})
  }

  async generateMinerBody (id: string) {
    const fans = []

    const hashrate: number = this.generateRandomValue(200000)

    for (let i = 0; i < fanConstraints.fansCount; i++) {
      const speed: number = this.generateRandomValue(6000)
      const temperatureIn: number = this.generateRandomValue(
        fanConstraints.upperTemperature,
      )
      const temperatureOut: number = this.generateRandomValue(
        fanConstraints.upperTemperature,
      )

      const fan = {
        speed: speed,
        temperatureIn: temperatureIn,
        temperatureOut: temperatureOut,
      }
      fans.push(fan)
    }
    return {
      id: id,
      fans: fans,
      hashrate: hashrate,
      name: 'Random Name',
      health: 'up',
      shelf: 1,
      rack: Math.floor(Math.random() * 24)
    }
  }

  generateRandomValue (max) {
    return Math.floor(Math.random() * max)
  }
}
