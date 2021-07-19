import { ApiProperty } from "@nestjs/swagger";
import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class Cat {
    @PrimaryGeneratedColumn()
    @ApiProperty()
    id: number;
    @Column()
    @ApiProperty()
    name: string;
    @Column()
    @ApiProperty()
    age: number;
    @Column()
    @ApiProperty()
    breed: string;
}
