import {
  Entity,
  Column,
  PrimaryColumn,
  CreateDateColumn,
  UpdateDateColumn,
} from 'typeorm'

@Entity('miner')
export class Miner {
  @PrimaryColumn()
  id: string

  @Column({
    length: 32
  })
  name: string

  @Column({
    nullable: true,
  })
  shelf: number

  @Column({
    nullable: true,
  })
  rack: number

  @Column({
    nullable: true,
    length: 16
  })
  health: string

  @Column({ type: 'json', default: [], nullable: true })
  fans: JSON[]

  @Column()
  hashrate: number

  @CreateDateColumn()
  createdAt: Date

  @UpdateDateColumn()
  updatedAt: Date
}
