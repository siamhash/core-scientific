import { DataSource } from 'typeorm'
import { Miner } from './miner/entities/miner.entity'

require('dotenv').config()
const DEFAULTS = {
  synchronize: true,
  logging: true
}
const dataSource = new DataSource({
  ...DEFAULTS,
  type: 'postgres',
  host: process.env.DATABASE_HOST,
  port: parseInt(process.env.DATABASE_PORT, 10),
  username: process.env.DATABASE_USER,
  password: process.env.DATABASE_PASSWORD,
  database: process.env.DATABASE,
  entities: [Miner]
})

dataSource.initialize().catch(err => {
  console.error('Error during Data Source initialization', err)
})

export default dataSource
