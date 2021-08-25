import { Controller, Get, Post , Request , SetMetadata, UseGuards , Body } from '@nestjs/common';
import { AuthGuard } from '@nestjs/passport';
import { AppService } from './app.service';
import { AuthService } from './auth/auth.service';
import { CreateUserDto } from './users/dto/create-user.dto';
import { LocalAuthGuard } from './auth/local-auth.guard';
import { ApiTags,ApiBody } from '@nestjs/swagger';
import { LoginDto } from './auth/dto/login.dto';
@ApiTags('Authentication')
@Controller()
export class AppController {
  constructor(private readonly appService: AppService,
    private authService : AuthService
    ) {}

  @UseGuards(LocalAuthGuard)
  @Post('auth/login')
  async login(@Request() req,@Body() body:LoginDto){
    return this.authService.login(req.user);
  }
  @Post('auth/signup')
  async signup(@Body() createUserDto: CreateUserDto){
    return this.authService.signup(createUserDto);
  }
  
  // @SetMetadata('role',['admin'])
  // @UseGuards(RolesGuard)
  // @UseGuards(JwtAuthGuard)
  // @Get('profile')
  // getProfile(@Request() req){
  //   return req.user;
  // }
}
