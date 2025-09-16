import { Module } from '@nestjs/common';
import { PassportModule } from '@nestjs/passport';
import { JwtModule } from '@nestjs/jwt';
import { AuthService } from './auth.service';
import { AuthController } from './auth.controller';
import { TiktokStrategy } from './tiktok.strategy';
import { JwtStrategy } from './jwt.strategy';
import { JwtConfigModule } from 'src/jwt/jwt-config.module';
import { JwtConfigService } from 'src/jwt/jwt-config.service';
import { UserModule } from 'src/user/user.module';

@Module({
    imports: [
        PassportModule,
        JwtModule.registerAsync({
            imports: [JwtConfigModule],
            useExisting: JwtConfigService,
        }),
        UserModule
    ],
    controllers: [AuthController],
    providers: [AuthService, TiktokStrategy, JwtStrategy],
})
export class AuthModule { }
