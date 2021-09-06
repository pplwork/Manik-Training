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
  @Matches(/^[a-z\d\-_\s]+$/i, {
    message: 'Name must contain only Alphabet and Numbers',
  })
  @MaxLength(25)
  name: string;
  @ApiProperty({
    example: 'Constructed in 2020 and much more',
    description: 'About the apartment',
  })
  @IsNotEmpty()
  @Matches(/^[a-z\d\-_\s]+$/i, {
    message: 'Name must contain only Alphabet and Numbers',
  })
  @MaxLength(250)
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
    example: '150.36.92',
    description: 'Coordinates of Apartment',
  })
  @IsNotEmpty()
  @IsLatLong()
  geoCord: string;
}
