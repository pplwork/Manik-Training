import { User } from "src/users/entities/user.entity";
import { Column,Entity ,ManyToOne,PrimaryGeneratedColumn } from "typeorm";
import { ApiProperty } from "@nestjs/swagger";
@Entity()
export class Appartment {
    @PrimaryGeneratedColumn()
    id:number;

    @Column()
    @ApiProperty({example: 'Aravali Hills'})
    name: string;

    @Column()
    @ApiProperty({example:'https://res.cloudinary.com/xxxxxxxx/image/upload/xxxxxxxx.jpg'})
    photoLink: string;

    @ApiProperty({example: 'Constructed in 2019 and much more'})
    @Column()
    description: string;

    @ApiProperty({example:'1200'})
    @Column()
    floorSize: number;

    @ApiProperty({example: '2000000'})
    @Column()
    price:number;

    @ApiProperty({example: '4'})
    @Column()
    Rooms: number;

    @ApiProperty({example:'180,50'})
    @Column()
    geoCord: string;

    @ApiProperty({example:'24-08-2021'})
    @Column()
    date: string;

    @ApiProperty({example: 'true|false'})
    @Column()
    isRentable: boolean;

    @ApiProperty({type:()=>User})
    @ManyToOne(()=>User,user=>user.appartments,{onDelete: 'CASCADE'})
    realtor: User;

}
