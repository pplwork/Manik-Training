import { Controller, Get, Post,Request, Body, Patch, Param, Delete, UseGuards, Query } from '@nestjs/common';
import { JwtAuthGuard } from 'src/auth/jwt-auth.guard';
import { AppartmentsService } from './appartments.service';
import { CreateAppartmentDto } from './dto/create-appartment.dto';
import { UpdateAppartmentDto } from './dto/update-appartment.dto';

@Controller('appartments')
export class AppartmentsController {
  constructor(private readonly appartmentsService: AppartmentsService) {}
  @UseGuards(JwtAuthGuard)
  @Post()
  create(@Body() createAppartmentDto: CreateAppartmentDto, @Request() req) {
    return this.appartmentsService.create(createAppartmentDto , req.user);
  }

  @Get()
  findAll(@Query('sizeMin') sizeMin: number ,@Query('sizeMax') sizeMax: number,@Query('PriceMin') PriceMin: number ,@Query('PriceMax') PriceMax: number,@Query('RoomsMin') RoomsMin: number ,@Query('RoomsMax') RoomsMax: number) {
    return this.appartmentsService.findAll(sizeMin,sizeMax ,PriceMin , PriceMax,RoomsMin,RoomsMax);
  }

  @Get(':id')
  findOne(@Param('id') id: string ) {
    return this.appartmentsService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateAppartmentDto: UpdateAppartmentDto) {
    return this.appartmentsService.update(+id, updateAppartmentDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.appartmentsService.remove(+id);
  }
}
