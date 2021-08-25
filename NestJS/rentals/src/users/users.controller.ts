import { Controller, Get, Post, Body, Patch, Param, Delete, UseGuards, SetMetadata } from '@nestjs/common';
import { UsersService } from './users.service';
import { UpdateUserDto } from './dto/update-user.dto';
import { JwtAuthGuard } from 'src/auth/jwt-auth.guard';
import { RolesGuard } from './role.guard';
import { ApiTags ,ApiBearerAuth } from '@nestjs/swagger';
@ApiTags('Users')
@ApiBearerAuth()
@UseGuards(JwtAuthGuard)
@Controller('users')
export class UsersController {
  constructor(private readonly usersService: UsersService) {}
  @SetMetadata('role',['admin'])
  @UseGuards(RolesGuard)
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
  changeRole(@Body() body){
    return this.usersService.changeRole(body);
  }
  @SetMetadata('role',['admin'])
  @UseGuards(RolesGuard)
  @Patch(':id')
  update(@Param('id') id: string, @Body() updateUserDto: UpdateUserDto) {
    return this.usersService.update(+id, updateUserDto);
  }
  @SetMetadata('role',['admin'])
  @UseGuards(RolesGuard)
  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.usersService.remove(+id);
  }
}
