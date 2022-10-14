import { Inject, Injectable } from '@nestjs/common';
import { ClientProxy } from '@nestjs/microservices';

@Injectable()
export class AppService {
  constructor(
    @Inject('PRODUCER') private readonly producerClient: ClientProxy
  ) {}

  getMiner(id: string) {
    return this.producerClient.send({
      cmd: 'get_miner'
    }, {
      id: id
    })
  }
}
