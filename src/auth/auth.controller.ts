import { Controller, Get, Req, Res, UseGuards } from '@nestjs/common';
import { AuthGuard } from '@nestjs/passport';
import { AuthService } from './auth.service';

@Controller('auth')
export class AuthController {
    constructor(private authService: AuthService) { }

    @Get('tiktok')
    @UseGuards(AuthGuard('tiktok'))
    async tiktokLogin() { }

    @Get('tiktok/callback')
    @UseGuards(AuthGuard('tiktok'))
    async tiktokCallback(@Req() req, @Res() res) {
        const jwt = await this.authService.login(req.user);
        res.redirect(`http://localhost:5173/auth/callback?token=${jwt}`);
    }

    @Get('profile')
    @UseGuards(AuthGuard('jwt'))
    getProfile(@Req() req) {
        return req.user;
    }
}
