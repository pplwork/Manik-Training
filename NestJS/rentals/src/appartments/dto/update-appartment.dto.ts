import { CreateAppartmentDto } from './create-appartment.dto';
import { ApiProperty, PartialType, ApiPropertyOptional } from '@nestjs/swagger';
import {
  IsAlphanumeric,
  IsBoolean,
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
export class UpdateAppartmentDto extends PartialType(CreateAppartmentDto) {
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
    example: 'Constructed in 2019 and much more',
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
    example: 'House no. 82 , Aravali Apartments, Dwarka sec-14 , New Delhi',
    description: 'Address of Apartment',
  })
  @IsNotEmpty()
  @Matches(/[\da-zA-Z\s\.(),-]+/)
  Address: string;
  @ApiProperty({ example: 'true', description: 'Available for rent or not' })
  @ApiPropertyOptional()
  @IsBoolean()
  isRentable?: boolean;
}
