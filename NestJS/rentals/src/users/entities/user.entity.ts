import { Appartment } from "src/appartments/entities/appartment.entity";
import { Column, Entity , OneToMany, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class User {
    @PrimaryGeneratedColumn()
    id: number;
    @Column()
    name: string;
    @Column()
    email: string;
    @Column()
    password: string;
    @Column()
    role: string;
    @OneToMany(()=>Appartment,appartment=>appartment.realtor)
    appartments: Appartment[]
}
