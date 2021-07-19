import { Injectable } from '@nestjs/common';

export type User ={
    id:number;
    name: string;
    username: string;
    password: string;
}

@Injectable()
export class UsersService {
    private readonly users: User[]=[
        {
            id:1,
            name: 'Manik',
            username:'manik',
            password: 'a'
        },
        {
            id:2,
            name: 'kartik',
            username:'kartik',
            password: 'a'
        }
    ];

    async findOne(username: string):Promise<User | undefined>{
        return this.users.find(user=>user.username == username);
    }

}
