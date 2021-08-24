import { PartialType } from '@nestjs/mapped-types';
import { CreateAppartmentDto } from './create-appartment.dto';

export class UpdateAppartmentDto extends PartialType(CreateAppartmentDto) {
    name?: string;
    description?: string;
    floorSize?: number;
    price?:number;
    Rooms?: number;
    geoCord?: string;
}
