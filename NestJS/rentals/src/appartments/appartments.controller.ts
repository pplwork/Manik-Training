import { Controller, Get, Post,Request, Body, Patch, Param, Delete, UseGuards, Query, SetMetadata } from '@nestjs/common';
import { JwtAuthGuard } from 'src/auth/jwt-auth.guard';
import { RolesGuard } from 'src/users/role.guard';
import { AppartmentsService } from './appartments.service';
import { CreateAppartmentDto } from './dto/create-appartment.dto';
import { UpdateAppartmentDto } from './dto/update-appartment.dto';
import { ApiTags , ApiBearerAuth ,ApiQuery ,ApiCreatedResponse,ApiBadRequestResponse ,ApiUnauthorizedResponse,ApiInternalServerErrorResponse} from '@nestjs/swagger';
import { Appartment } from './entities/appartment.entity';
@ApiTags('Apartments')
@ApiBearerAuth()
@UseGuards(JwtAuthGuard)
@Controller('appartments')
export class AppartmentsController {
  constructor(private readonly appartmentsService: AppartmentsService) {}
  @SetMetadata('role',['admin','realtor'])
  @UseGuards(RolesGuard)
  @Post()
  @ApiCreatedResponse({type: Appartment})
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
        error: {type:'string'}
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
  create(@Body() createAppartmentDto: CreateAppartmentDto, @Request() req) {
    return this.appartmentsService.create(createAppartmentDto , req.user);
  }

  @Get()
  @ApiQuery({name: 'sizeMin',required: false,type: 'number' , description:''})
  @ApiQuery({name: 'sizeMax',required: false,type: 'number' , description:''})
  @ApiQuery({name: 'PriceMin',required: false,type: 'number' , description:''})
  @ApiQuery({name: 'PriceMax',required: false,type: 'number' , description:''})
  @ApiQuery({name: 'RoomsMin',required: false,type: 'number' , description:''})
  @ApiQuery({name: 'RoomsMax',required: false,type: 'number' , description:''})
  findAll(@Query('sizeMin') sizeMin: number ,@Query('sizeMax') sizeMax: number,@Query('PriceMin') PriceMin: number ,@Query('PriceMax') PriceMax: number,@Query('RoomsMin') RoomsMin: number ,@Query('RoomsMax') RoomsMax: number,@Request() req) {
    return this.appartmentsService.findAll(sizeMin,sizeMax ,PriceMin , PriceMax,RoomsMin,RoomsMax,req);
  }

  // @Get(':id')
  // findOne(@Param('id') id: string ) {
  //   return this.appartmentsService.findOne(+id);
  // }
  @SetMetadata('role',['admin','realtor'])
  @UseGuards(RolesGuard)
  @Patch(':id')
  update(@Param('id') id: string, @Body() updateAppartmentDto: UpdateAppartmentDto) {
    return this.appartmentsService.update(+id, updateAppartmentDto);
  }
  @SetMetadata('role',['admin','realtor'])
  @UseGuards(RolesGuard)
  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.appartmentsService.remove(+id);
  }
}
