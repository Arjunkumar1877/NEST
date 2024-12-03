import { Injectable } from '@nestjs/common';
import { CreateUserDto, UserRolesTypes } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { NotFoundException } from '@nestjs/common';
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
          const userRoles = this.users.filter((data)=> data.role === role);

          if(userRoles.length === 0){
           throw new NotFoundException('User Role Not Found.');
          }

          return userRoles;
        }

        return this.users;
    }

    findOne(id: number){
        const user = this.users.find((user)=> user.id === id);
        if(!user) throw new NotFoundException('User Notfound')

        return user;
    }


    create(createUserDto: CreateUserDto){
      const usersByHighestId = [...this.users].sort((a,b) => b.id - a.id);
    //    console.log(usersByHighestId)
      const newUser = {
        id: usersByHighestId[0].id + 1,
        ...createUserDto
      }
      this.users.push(newUser);

      return this.users;
    }

    update(id: number, updateUserDto: UpdateUserDto){
        this.users = this.users.map((user)=> {
            if(user.id === id){
                return {...user, ...updateUserDto}
            }
        })
    }

    deleteOne(id: number){
        const updatedusers = this.users.filter((user)=> user.id !== id);

        return updatedusers;
    }
}
