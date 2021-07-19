import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreateCatDto } from './dto/create-cat.dto';
import { UpdateCatDto } from './dto/update-cat.dto';
import { Cat } from './entities/cat.entity';

@Injectable()
export class CatsService {
  constructor(
    @InjectRepository(Cat) private catRepo : Repository<Cat>
  ){}
  create(createCatDto: CreateCatDto):Promise<Cat>{
    const newCat = this.catRepo.create({
      name: createCatDto.name,
      age: createCatDto.age,
      breed: createCatDto.breed
    })
    return this.catRepo.save(newCat);
  }

  findAll() :Promise<Cat[]>{
    return this.catRepo.find();
  }

  async findOne(id: number):Promise<any> {
      const cat =await this.catRepo.findOne(id);
      if(!cat){
        throw new HttpException({
          status: HttpStatus.NOT_FOUND,
          error: 'Cat not found any cat with the given id',
        },HttpStatus.NOT_FOUND);
      }
      return cat;
  }
  async update(id: number, updateCatDto: UpdateCatDto) {
    const cat = await this.catRepo.findOne(id);
    if(!cat){
      throw new HttpException({
          status: HttpStatus.NOT_FOUND,
          error: 'Cat not found any cat with the given id',
        },HttpStatus.NOT_FOUND);
    }
    cat.name = updateCatDto.name;
    cat.age=updateCatDto.age;
    cat.breed = updateCatDto.breed;
    return this.catRepo.save(cat);
  }

  async remove(id: number) {
    const cat= await this.catRepo.findOne(id);
    if(!cat){
      throw new HttpException({
          status: HttpStatus.NOT_FOUND,
          error: 'Cat not found any cat with the given id',
      },HttpStatus.NOT_FOUND);
    }
    return this.catRepo.remove(cat);
  }
}
