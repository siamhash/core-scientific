import { MiddlewareConsumer, Module } from '@nestjs/common'
import { ClientsModule, Transport } from '@nestjs/microservices'
import { AppController } from './app.controller'
import { AppService } from './app.service'
import { AuthModule } from './auth/auth.module'
import { AuthMiddleware } from './middleware/auth.middleware'

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
      {
        name: 'CONSUMER',
        transport: Transport.TCP,
        options: {
          port: 3002,
        },
      },
    ]),
    AuthModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {
  configure (consumer: MiddlewareConsumer) {
    consumer.apply(AuthMiddleware).forRoutes('')
  }
}
