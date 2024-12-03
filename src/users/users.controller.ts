import { Body, Controller, Delete, Get, Param, Patch, Post, Query, ParseIntPipe, ValidationPipe } from '@nestjs/common';
import {  UsersService } from './users.service';
import { UserRolesTypes } from './dto/create-user.dto';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';


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
    findOne(@Param('id', ParseIntPipe) id: number){
      return this.userServices.findOne(id);
    }

    @Post()
    create(@Body(ValidationPipe) createUserDto: CreateUserDto) {
        return this.userServices.create(createUserDto)
    }

    @Patch(':id')
    update(@Param('id', ParseIntPipe) id: number, @Body(ValidationPipe) updateUserDto: UpdateUserDto){
        return this.userServices.update(id, updateUserDto);
    }

    @Delete(':id')
    deleteOne(@Param('id', ParseIntPipe) id: number){
        return this.userServices.deleteOne(id)
    }

}
