import { Injectable ,HttpException,HttpStatus} from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { User } from './entities/user.entity';

@Injectable()
export class UsersService {
  constructor(
    @InjectRepository(User) private userRepo: Repository<User>
  ){}
  findAll() {
    return this.userRepo.find();
  }

  async findOne(id: number):Promise<User| undefined> {
    const user = await this.userRepo.findOne(id);
    if(!user){
      throw new HttpException({
          status: HttpStatus.NOT_FOUND,
          error: 'User not found with the given id',
        },HttpStatus.NOT_FOUND);
    }
    return user;
  }

  async update(id: number, updateUserDto: UpdateUserDto) {
    const user =await this.userRepo.findOne(id);
    if(!user){
      throw new HttpException({
          status: HttpStatus.NOT_FOUND,
          error: 'User not found with the given id',
        },HttpStatus.NOT_FOUND);
    }
    user.name = updateUserDto.name;
    user.password = updateUserDto.password;
    user.email = updateUserDto.email;
    return this.userRepo.save(user);
  }
  async changeRole(body){
    const user =await this.userRepo.findOne({email: body.email});
    if(!user){
      throw new HttpException({
          status: HttpStatus.NOT_FOUND,
          error: 'User not found with the given id',
        },HttpStatus.NOT_FOUND);
    }
    if(body.role){
      user.role = body.role;
    }
    return this.userRepo.save(user);
  }
  async remove(id: number) {
    const user =await this.userRepo.findOne(id);
    if(!user){
      throw new HttpException({
          status: HttpStatus.NOT_FOUND,
          error: 'User not found with the given id',
        },HttpStatus.NOT_FOUND);
    }
    return this.userRepo.remove(user);
  }
}
