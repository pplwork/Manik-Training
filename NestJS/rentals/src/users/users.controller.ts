import { Controller, Get, Post, Body, Patch, Param, Delete, UseGuards, SetMetadata } from '@nestjs/common';
import { UsersService } from './users.service';
import { UpdateUserDto } from './dto/update-user.dto';
import { JwtAuthGuard } from 'src/auth/jwt-auth.guard';
import { RolesGuard } from './role.guard';
import { ApiTags , ApiBearerAuth ,ApiBadRequestResponse ,ApiUnauthorizedResponse,ApiInternalServerErrorResponse,ApiForbiddenResponse, ApiOkResponse , ApiNotFoundResponse} from '@nestjs/swagger';
import { User } from './entities/user.entity';
import { ChangeRoleDto } from './dto/change-role.dto';
@ApiTags('Users')
@ApiBearerAuth()
@UseGuards(JwtAuthGuard)
@Controller('users')
export class UsersController {
  constructor(private readonly usersService: UsersService) {}
  @SetMetadata('role',['admin'])
  @UseGuards(RolesGuard)
  @ApiOkResponse({type:User , isArray: true})
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
  @ApiForbiddenResponse({
    schema:{
      type: 'object',
      properties:{
        status:{type:'string',default:403},
        message:{type: 'string'},
      }
    }
  })
  @ApiInternalServerErrorResponse({
    schema:{
      type: 'object',
      properties:{
        status:{type:'string',default:500},
        message:{type: 'string'},
        error: {type:'string'}
      }
    }
  })
  @Get()
  findAll() {
    return this.usersService.findAll();
  }
  // @SetMetadata('role',['admin'])
  // @UseGuards(RolesGuard)
  // @Get(':id')
  // findOne(@Param('id') id: string) {
  //   return this.usersService.findOne(+id);
  // }
  @SetMetadata('role',['admin'])
  @UseGuards(RolesGuard)
  @Patch('/changeRole')
  @ApiOkResponse({type:User})
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
  @ApiForbiddenResponse({
    schema:{
      type: 'object',
      properties:{
        status:{type:'string',default:403},
        message:{type: 'string'},
      }
    }
  })
  @ApiNotFoundResponse({
    schema:{
      type: 'object',
      properties:{
        status:{type:'string',default:404},
        message:{type: 'string'},
      }
    }
  })
  @ApiInternalServerErrorResponse({
    schema:{
      type: 'object',
      properties:{
        status:{type:'string',default:500},
        message:{type: 'string'},
        error: {type:'string'}
      }
    }
  })
  changeRole(@Body() body:ChangeRoleDto){
    return this.usersService.changeRole(body);
  }
  @SetMetadata('role',['admin'])
  @UseGuards(RolesGuard)
  @Patch(':id')
  @ApiOkResponse({type:User})
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
  @ApiForbiddenResponse({
    schema:{
      type: 'object',
      properties:{
        status:{type:'string',default:403},
        message:{type: 'string'},
      }
    }
  })
  @ApiNotFoundResponse({
    schema:{
      type: 'object',
      properties:{
        status:{type:'string',default:404},
        message:{type: 'string'},
      }
    }
  })
  @ApiInternalServerErrorResponse({
    schema:{
      type: 'object',
      properties:{
        status:{type:'string',default:500},
        message:{type: 'string'},
        error: {type:'string'}
      }
    }
  })
  update(@Param('id') id: string, @Body() updateUserDto: UpdateUserDto) {
    return this.usersService.update(+id, updateUserDto);
  }
  @SetMetadata('role',['admin'])
  @UseGuards(RolesGuard)
  @Delete(':id')
  @ApiOkResponse({type:User})
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
  @ApiForbiddenResponse({
    schema:{
      type: 'object',
      properties:{
        status:{type:'string',default:403},
        message:{type: 'string'},
      }
    }
  })
  @ApiNotFoundResponse({
    schema:{
      type: 'object',
      properties:{
        status:{type:'string',default:404},
        message:{type: 'string'},
      }
    }
  })
  @ApiInternalServerErrorResponse({
    schema:{
      type: 'object',
      properties:{
        status:{type:'string',default:500},
        message:{type: 'string'},
        error: {type:'string'}
      }
    }
  })
  remove(@Param('id') id: string) {
    return this.usersService.remove(+id);
  }

}
