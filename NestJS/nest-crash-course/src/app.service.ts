import { Injectable } from '@nestjs/common';
import { Param } from '@nestjs/common';
let arr:number[] = [1,2,3];

@Injectable()
export class AppService {
  getHello(): string {
    return 'Hello World!';
  }
}
