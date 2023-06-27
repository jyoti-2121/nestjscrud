/* eslint-disable prettier/prettier */
import {IsString,IsNotEmpty,IsEmail} from 'class-validator';
export class loginStudentDto {
    @IsEmail()
    @IsNotEmpty()
    email : string;
    @IsString()
    @IsNotEmpty()
    password : string;
}
