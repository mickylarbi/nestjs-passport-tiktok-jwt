import { Injectable } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { JwtService } from '@nestjs/jwt';
import { UserService } from 'src/user/user.service';

@Injectable()
export class AuthService {
  constructor(
    private readonly userService: UserService,
    private readonly jwtService: JwtService,
    private readonly configService: ConfigService
  ) { }

  async login(user) {
    const payload = { email: user.email, sub: user._id }

    const access_token = this.jwtService.sign(payload, {
      secret: this.configService.get<string>('ACCESS_TOKEN_SECRET'),
      expiresIn: '1h'
    })

    const refresh_token = this.jwtService.sign(payload, {
      secret: this.configService.get<string>('REFRESH_TOKEN_SECRET'),
      expiresIn: '7d'
    })

    await this.userService.updateRefreshToken(user._id, refresh_token)

    return {
      ...user,
      __v: undefined, refreshToken: undefined,
      access_token, refresh_token
    }
  }
}
