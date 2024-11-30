import { Body, Controller, Delete, Get, Param, Patch, Post, Query } from '@nestjs/common';
import { UserRolesTypes, UsersService } from './users.service';

@Controller('users')
export class UsersController {
    /*
    GET /users
    GET /users/:id
    POST /users
    PATCH /users/:id
    DELETE /users/:id
    */
   constructor(private readonly userServices: UsersService){}

    @Get() 
    findAll(@Query('role') role ?: 'BACKEND' | 'FRONTEND' | 'BACKEND' ){
        return this.userServices.findAll(role);
    }

    @Get(':id')
    findOne(@Param('id') id: string){
      return this.userServices.findOne(+id);
    }

    @Post()
    create(@Body() users: {name: string, email: string, role: UserRolesTypes}) {
        return this.userServices.create(users)
    }

    @Patch(':id')
    update(@Param('id') id: string, @Body() userUpdate: {name?: string, email?:  string, role?: UserRolesTypes}){
        return this.userServices.update(+id, userUpdate);
    }

    @Delete(':id')
    deleteOne(@Param('id') id: string){
        return this.userServices.deleteOne(+id)
    }

}
