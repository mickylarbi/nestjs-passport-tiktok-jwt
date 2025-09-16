import { Controller, Get, Req, Res, UseGuards } from '@nestjs/common';
import { AuthGuard } from '@nestjs/passport';
import { AuthService } from './auth.service';
import { UserService } from 'src/user/user.service';
import { ConfigService } from '@nestjs/config';

@Controller('auth')
export class AuthController {
    constructor(
        private readonly authService: AuthService,
        private readonly userService: UserService,
        private readonly configService: ConfigService
    ) { }

    @Get('tiktok')
    @UseGuards(AuthGuard('tiktok'))
    async tiktokLogin() { } // redirects to tiktok

    @Get('tiktok/callback')
    @UseGuards(AuthGuard('tiktok'))
    async tiktokCallback(@Req() req, @Res() res) {
        let user: any = await this.userService.findByOpenId(req.user.openId)
        while (!user) {
            user = await this.userService.create(req.user.openId, req.user.displayName)
        }

        const { access_token } = await this.authService.login(user)
        res.redirect(`${this.configService.get<string>('FRONTEND_REDIRECT_URL')}?token=${access_token}`);
    }

    @Get('profile')
    @UseGuards(AuthGuard('jwt'))
    async getProfile(@Req() req) {
        const user = await this.userService.findByOpenId(req.user.openId);
        return { ...user, __v: undefined, refreshToken: undefined }
    }
}
