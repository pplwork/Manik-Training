import { Controller, Get, Post , Request , SetMetadata, UseGuards , Body } from '@nestjs/common';
import { AuthGuard } from '@nestjs/passport';
import { AppService } from './app.service';
import { AuthService } from './auth/auth.service';
import { CreateUserDto } from './auth/dto/create-user.dto';
import { JwtAuthGuard } from './auth/jwt-auth.guard';
import { LocalAuthGuard } from './auth/local-auth.guard';
import { RolesGuard } from './users/role.guard';


@Controller()
export class AppController {
  constructor(private readonly appService: AppService,
    private authService : AuthService
    ) {}

  @UseGuards(LocalAuthGuard)
  @Post('auth/login')
  async login(@Request() req){
    return this.authService.login(req.user);
  }
  @Post('auth/signup')
  async signup(@Body() createUserDto: CreateUserDto){
    return this.authService.signup(createUserDto);
  }
  
  @SetMetadata('role',['admin'])
  @UseGuards(RolesGuard)
  @UseGuards(JwtAuthGuard)
  @Get('profile')
  getProfile(@Request() req){
    return req.user;
  }
}
