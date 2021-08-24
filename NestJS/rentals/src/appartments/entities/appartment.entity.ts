import { User } from "src/users/entities/user.entity";
import { Column,Entity ,ManyToOne,PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class Appartment {
    @PrimaryGeneratedColumn()
    id:number;
    @Column()
    name: string;
    @Column()
    description: string;
    @Column()
    floorSize: number;
    @Column()
    price:number;
    @Column()
    Rooms: number;
    @Column()
    geoCord: string;
    @Column()
    date: string;
    @Column()
    isRentable: boolean;
    @ManyToOne(()=>User,user=>user.appartments,{onDelete: 'CASCADE'})
    realtor: User;

}
