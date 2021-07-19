import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { User } from './user.entity';

@Injectable()
export class AppService {
  constructor(@InjectRepository(User) private UserRepository : Repository<User>){}

  getAll():Promise<User[]>{
    return this.UserRepository.find({
      relations:['pets']
    });
  }
  async getOneById(id: number):Promise<User>{
    try{
      const user =await this.UserRepository.findOneOrFail(id);
      return user;
    }catch(err){
      throw err;
    }
  }

  createUser(name:string):Promise<User>{

    const newUser =this.UserRepository.create({name});

    return this.UserRepository.save(newUser);
  }
  async UpdateUser(id:number , name: string):Promise<User>{
    const user = await this.getOneById(id);
    user.name = name;
    return this.UserRepository.save(user);
  }
  async deleteUser(id:number):Promise<User>{
    const user = await this.getOneById(id);
    return this.UserRepository.remove(user);
  }

  getHello(): string {
    return 'Hello World!';
  }
}
