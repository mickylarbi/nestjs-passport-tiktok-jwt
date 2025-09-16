import { Injectable } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';

@Injectable()
export class AuthService {
  constructor(private jwtService: JwtService) { }

  async login(user: any) {
    const payload = { sub: user.id, username: user.username };
    const access_token = this.jwtService.sign(payload, {
      // secret: this.configService.get<string>('ACCESS_TOKEN_SECRET'),
      expiresIn: '1h'
    })
    return access_token;
  }

  async validateUser(payload: any) {
    return { userId: payload.sub, username: payload.username };
  }
}
