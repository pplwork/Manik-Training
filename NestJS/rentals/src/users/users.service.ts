import { Injectable, HttpException, HttpStatus } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { isEmail } from 'class-validator';
import { Repository } from 'typeorm';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { User } from './entities/user.entity';

@Injectable()
export class UsersService {
  constructor(@InjectRepository(User) private userRepo: Repository<User>) {}
  findAll() {
    return this.userRepo.find();
  }

  async findOne(email: string): Promise<User | undefined> {
    const user = await this.userRepo.findOne({ email: email });
    if (!user) {
      this.exception();
    }
    return user;
  }

  async update(id: number, updateUserDto: UpdateUserDto) {
    const user = await this.userRepo.findOne(id);
    if (!user) {
      this.exception();
    }
    let check = await this.userRepo.findOne({
      email: updateUserDto.email.toLowerCase().trim(),
    });
    const enumRole = ['user', 'realtor', 'admin'];
    if (!enumRole.includes(updateUserDto.role)) {
      throw new HttpException(
        {
          status: HttpStatus.NOT_FOUND,
          error: 'Please specify a valid role',
        },
        HttpStatus.NOT_FOUND,
      );
    }
    console.log(check.email, user.email);
    if (!check || check.email == user.email) {
      user.name = updateUserDto.name.trim();
      user.password = updateUserDto.password;
      user.email = updateUserDto.email.toLowerCase().trim();
      user.role = updateUserDto.role;
      return this.userRepo.save(user);
    } else {
      throw new HttpException(
        {
          status: HttpStatus.CONFLICT,
          error: 'Email already taken',
        },
        HttpStatus.CONFLICT,
      );
    }
  }
  async changeRole(body) {
    const user = await this.userRepo.findOne({ email: body.email });
    const enumRole = ['user', 'realtor', 'admin'];
    if (!enumRole.includes(body.role)) {
      throw new HttpException(
        {
          status: HttpStatus.NOT_FOUND,
          error: 'Please specify a valid role',
        },
        HttpStatus.NOT_FOUND,
      );
    }
    if (!user) {
      this.exception();
    }
    if (body.role) {
      user.role = body.role;
    }
    return this.userRepo.save(user);
  }
  async remove(id: number) {
    const user = await this.userRepo.findOne(id);
    if (!user) {
      this.exception();
    }
    return this.userRepo.remove(user);
  }
  exception() {
    throw new HttpException(
      {
        status: HttpStatus.NOT_FOUND,
        error: 'User not found with the given id',
      },
      HttpStatus.NOT_FOUND,
    );
  }
}
