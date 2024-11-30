import { Injectable } from '@nestjs/common';

export type UserRolesTypes = 'FULLSTACK' | 'BACKEND' | 'FRONTEND'
@Injectable()
export class UsersService {
    private users = [
        {
            "id": 1,
            "name": "Arjun",
            "email": "arjun@gmail.com",
            "role": "FULLSTACK"
        },
        {
            "id": 2,
            "name": "George",
            "email": "george@gmail.com",
            "role": "BACKEND"
        },
        {
            "id": 3,
            "name": "Shirso",
            "email": "shirso@gmail.com",
            "role": "FULLSTACK"
        },
        {
            "id": 4,
            "name": "Chetan",
            "email": "chetan@gmail.com",
            "role": "FRONTEND"
        }

    ]

    findAll(role?: UserRolesTypes){
        if(role){
          return this.users.filter((data)=> data.role === role);
        }

        return this.users;
    }

    findOne(id: number){
        const users = this.users.find((user)=> user.id === id);

        return users;
    }


    create(user: {name: string,  email: string, role: UserRolesTypes}){
      const usersByHighestId = [...this.users].sort((a,b) => b.id - a.id);
    //    console.log(usersByHighestId)
      const newUser = {
        id: usersByHighestId[0].id + 1,
        ...user
      }
      this.users.push(newUser);

      return this.users;
    }

    update(id: number, updatedUser: {name?: string, email?: string,  role?: UserRolesTypes}){
        this.users = this.users.map((user)=> {
            if(user.id === id){
                return {...user, ...updatedUser}
            }
        })
    }

    deleteOne(id: number){
        const updatedusers = this.users.filter((user)=> user.id !== id);

        return updatedusers;
    }
}
