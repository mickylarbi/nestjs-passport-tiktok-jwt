import { PassportStrategy } from '@nestjs/passport';
import { Strategy } from 'passport-tiktok-oauth2';
import { Injectable } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';

@Injectable()
export class TiktokStrategy extends PassportStrategy(Strategy, 'tiktok') {
    constructor(private readonly configService: ConfigService) {
        super({
            clientID: configService.get<string>('TIKTOK_CLIENT_ID')!,
            clientKey: configService.get<string>('TIKTOK_CLIENT_ID')!,
            clientSecret: configService.get<string>('TIKTOK_CLIENT_SECRET')!,
            callbackURL: configService.get<string>('TIKTOK_CALLBACK_URL')!,
            scope: ['user.info.basic'],
        });
    }

    async validate(accessToken: string, refreshToken: string, profile: any): Promise<any> {
        const { _json, displayName, } = profile
        return { email: _json.email, displayName }
    }
}
