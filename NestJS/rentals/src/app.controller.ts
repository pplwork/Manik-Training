import { Controller, Get, Post , Request , SetMetadata, UseGuards , Body } from '@nestjs/common';
import { AuthGuard } from '@nestjs/passport';
import { AppService } from './app.service';
import { AuthService } from './auth/auth.service';
import { CreateUserDto } from './users/dto/create-user.dto';
import { LocalAuthGuard } from './auth/local-auth.guard';
import { LoginDto } from './auth/dto/login.dto';
import { ApiTags ,ApiCreatedResponse,ApiBadRequestResponse ,ApiUnauthorizedResponse, ApiOkResponse,ApiConflictResponse} from '@nestjs/swagger';
import { User } from './users/entities/user.entity';
@ApiTags('Authentication')
@Controller()
export class AppController {
  constructor(private readonly appService: AppService,
    private authService : AuthService
    ) {}

  @UseGuards(LocalAuthGuard)
  @ApiCreatedResponse({schema:{
    type:'object',
    properties:{
      access_token:{type:'string'}
    }
  }})
  @ApiBadRequestResponse({
    schema:{
      type: 'object',
      properties:{
        status:{type:'string',default:400},
        message:{type: 'string'},
        error: {type:'string'}
      }
    }
  })
  @ApiUnauthorizedResponse({
    schema:{
      type: 'object',
      properties:{
        status:{type:'string',default:401},
        message:{type: 'string'},
      }
    }
  })
  @Post('auth/login')
  async login(@Request() req,@Body() body:LoginDto){
    return this.authService.login(req.user);
  }
  @ApiCreatedResponse({type: User})
  @ApiBadRequestResponse({
    schema:{
      type: 'object',
      properties:{
        status:{type:'string',default:400},
        message:{type: 'string'},
        error: {type:'string'}
      }
    }
  })
  @ApiConflictResponse({
    schema:{
      type: 'object',
      properties:{
        status:{type:'string',default:409},
        message:{type: 'string'},
      }
    }
  })
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
