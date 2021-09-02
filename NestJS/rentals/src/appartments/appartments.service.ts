import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { User } from 'src/users/entities/user.entity';
import { Repository } from 'typeorm';
import { CreateAppartmentDto } from './dto/create-appartment.dto';
import { UpdateAppartmentDto } from './dto/update-appartment.dto';
import { Appartment } from './entities/appartment.entity';

@Injectable()
export class AppartmentsService {
  constructor(
    @InjectRepository(Appartment) private appRepo: Repository<Appartment>,
    @InjectRepository(User) private userRepo: Repository<User>
  ){}
  async create(createAppartmentDto: CreateAppartmentDto , user: User): Promise<Appartment> {
    let today = new Date();
    let date =today.getDate()+'-'+(today.getMonth()+1)+'-'+ today.getFullYear();
    const newApp = this.appRepo.create(createAppartmentDto);
    newApp.realtor = user;
    newApp.isRentable = true;
    newApp.date = date;
    return this.appRepo.save(newApp);
  }
  exception(){
    throw new HttpException({
          status: HttpStatus.NOT_FOUND,
          error: 'Apartment not found with the given id',
        },HttpStatus.NOT_FOUND);
  }
  async findAll(sizeMin:Number,sizeMax:number ,PriceMin:number, PriceMax:number,RoomsMin:number,RoomsMax:number,req) {
    let apps =await this.appRepo.find({relations:['realtor']});
    if(sizeMin&&sizeMax){
      apps=apps.filter((ele)=>{
        if(ele.floorSize>=sizeMin&&ele.floorSize<=sizeMax){
          return true;
        }
        return false;
      })
      apps.sort((app1, app2)=>{if(app1.floorSize<=app2.floorSize){return -1;} else return 1;})
    }
    if(RoomsMin&&RoomsMax){
      apps=apps.filter((ele)=>{
        if(ele.Rooms>=RoomsMin&&ele.Rooms<=RoomsMax){
          return true;
        }
        return false;
      })
      apps.sort((app1, app2)=>{if(app1.Rooms<=app2.Rooms){return -1;} else return 1;})
    }
    if(PriceMin&&PriceMax){
      apps=apps.filter((ele)=>{
        if(ele.price>=PriceMin&&ele.price<=PriceMax){
          return true;
        }
        return false;
      })
      apps.sort((app1, app2)=>{if(app1.price<=app2.price){return -1;} else return 1;})
    }
    if(req.user.role==='user'){
      console.log('aaya kya');
      apps=apps.filter((app)=>{if(app.isRentable==true) return true; else return false;})
    }
    return apps;
  }

  async findOne(id: number) {
    const app = await this.appRepo.findOne(id,{relations: ['realtor']});
    delete app.realtor.password;
    return app;
  }

  async update(id: number, updateAppartmentDto: UpdateAppartmentDto) {
    const app = await this.appRepo.findOne(id);
    if(app){
      app.name= updateAppartmentDto.name;
      app.description= updateAppartmentDto.description;
      app.floorSize= updateAppartmentDto.floorSize;
      app.Rooms= updateAppartmentDto.Rooms;
      app.geoCord= updateAppartmentDto.geoCord;
      app.price= updateAppartmentDto.price;
      app.isRentable = updateAppartmentDto.isRentable;
      app.photoLink = updateAppartmentDto.photoLink;
      await this.appRepo.save(app);
      return this.appRepo.findOne(id,{relations: ['realtor']});
    }
    else{
      this.exception();
    }
    
  }

  async remove(id: number) {
    const app = await this.appRepo.findOne(id);
    if(app){
      return this.appRepo.remove(app);
    }
    else{
      this.exception();
    }
  }
}
