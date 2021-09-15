import { ApiProperty } from '@nestjs/swagger';
import {
  IsAlphanumeric,
  IsEmail,
  IsLatLong,
  isNotEmpty,
  IsNotEmpty,
  IsNumber,
  IsPositive,
  Matches,
  MaxLength,
  MinLength,
} from 'class-validator';

export class CreateAppartmentDto {
  @ApiProperty({
    example: 'Aravali Apartments',
    description: 'Enter the name of your Apartment',
  })
  @IsNotEmpty()
  @Matches(/^[\da-zA-Z\s-]+$/, {
    message: 'Name must contain only Alphabet and Numbers',
  })
  @MaxLength(25)
  name: string;
  @ApiProperty({
    example: 'Constructed in 2020 and much more',
    description: 'About the apartment',
  })
  @IsNotEmpty()
  @MaxLength(1000)
  description: string;
  @ApiProperty({
    example: 'https://res.cloudinary.com/xxxxxxxx/image/upload/xxxxxxxx.jpg',
  })
  @Matches(
    /https:\/\/res\.cloudinary\.com\/.+\/image\/upload\/.+\/.+\.(jpg|png|jpeg|jfif)/,
  )
  @IsNotEmpty()
  photoLink: string;
  @ApiProperty({ example: '1250', description: 'Carpet Area of Apartment' })
  @IsNumber()
  @IsNotEmpty()
  @IsPositive()
  floorSize: number;

  @ApiProperty({ example: '2500000', description: 'Price in Rupees' })
  @IsNumber()
  @IsNotEmpty()
  @IsPositive()
  price: number;

  @ApiProperty({
    example: '4',
    description: 'Number of Rooms in the Apartment',
  })
  @IsNumber()
  @IsNotEmpty()
  @IsPositive()
  Rooms: number;

  @ApiProperty({
    example: 'House no. 82 , Aravali Apartments, Dwarka sec-14 , New Delhi',
    description: 'Address of Apartment',
  })
  @IsNotEmpty()
  @Matches(/[\da-zA-Z\s\.(),-]+/)
  Address: string;
}
