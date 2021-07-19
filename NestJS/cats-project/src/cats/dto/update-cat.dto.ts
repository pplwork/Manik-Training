import { PartialType } from '@nestjs/mapped-types';
import { ApiProperty } from '@nestjs/swagger';
import { IsAlphanumeric, IsNumber } from 'class-validator';
import { CreateCatDto } from './create-cat.dto';

export class UpdateCatDto extends PartialType(CreateCatDto) {
    @IsAlphanumeric()
    @ApiProperty({required:false})
    name?: string;
    @IsNumber()
    @ApiProperty({required:false})
    age?: number;
    @IsAlphanumeric()
    @ApiProperty({required:false})
    breed?: string;
}
