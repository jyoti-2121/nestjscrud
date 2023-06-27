/* eslint-disable prettier/prettier */
import {IsString,IsNotEmpty,MaxLength,MinLength,IsBoolean,IsEmail} from 'class-validator';
export class CreateStudentDto {
    @IsString()
    @IsNotEmpty()
    first_name : string;
    @IsString()
    @IsNotEmpty()
    last_name : string;
    @MaxLength(10)
    @MinLength(10)
    phone : string;
    @IsBoolean()
    is_deleted : boolean;
    @IsEmail()
    @IsNotEmpty()
    email : string;
    @IsString()
    @IsNotEmpty()
    password : string;
}
