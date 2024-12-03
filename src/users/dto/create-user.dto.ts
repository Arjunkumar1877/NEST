import { IsEmail, IsEnum, IsNotEmpty, IsString } from "class-validator";

export type UserRolesTypes = 'FULLSTACK' | 'BACKEND' | 'FRONTEND'

export class CreateUserDto{
    @IsString()
    @IsNotEmpty()
    name: string;

    @IsEmail()
    email: string;

    @IsEnum(["FRONTEND", "BACKEND", "FULLSTACK"], {
        message: 'Valid role required'
    })
    role: UserRolesTypes;
}