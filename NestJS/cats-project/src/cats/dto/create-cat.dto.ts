import { ApiProperty } from "@nestjs/swagger";
import { IsAlphanumeric, IsNumber } from "class-validator";

export class CreateCatDto {
    @IsAlphanumeric()
    @ApiProperty()
    name:string;
    @IsNumber()
    @ApiProperty()
    age: number;
    @IsAlphanumeric()
    @ApiProperty()
    breed: string;
}
