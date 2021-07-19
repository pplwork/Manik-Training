import { Controller, Get, Param, Post ,Body, Query, NotFoundException, ParseIntPipe} from '@nestjs/common';
import { ApiCreatedResponse, ApiQuery, ApiTags } from '@nestjs/swagger';
import { createUserDto } from './dto/create-user.dto';
import { User } from './entities/user.entity';
import { UsersService } from './users.service';
@ApiTags('Users')
@Controller('users')
export class UsersController {
    constructor(private userservice : UsersService){}

    @ApiQuery({name:'name' , required: false})
    @Get()
    getUsers(@Query('name') name?:string):User[]{
        return this.userservice.findAll(name);
    }
    @Get(':id')
    getUserById(@Param('id', ParseIntPipe) id: number):User{
        const user = this.userservice.findById(id);
        if(!user){
            throw new NotFoundException();
        }
        return user;
    }
    @ApiCreatedResponse({type:User})
    @Post()
    createUser(@Body() body: createUserDto):User{
        return this.userservice.createUser(body);
    }
}
