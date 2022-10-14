import { Injectable } from '@nestjs/common'

require('dotenv').config()

@Injectable()
export class AuthService {
  validateApiKey (apiKey: string) {
    return apiKey === process.env.GATEWAY_API_KEY
  }
}
