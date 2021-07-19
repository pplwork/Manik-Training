import { ApiProperty } from "@nestjs/swagger";
import { IsAlphanumeric } from "class-validator";

export class createUserDto {
    @ApiProperty()
    @IsAlphanumeric()
    name: string;
    // @ApiProperty({required: false})
    // age? : number
}