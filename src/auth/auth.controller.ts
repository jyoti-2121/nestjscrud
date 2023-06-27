/* eslint-disable prettier/prettier */
import { Body, Controller, Post } from '@nestjs/common';
import { AuthService } from './auth.service';
import { CreateStudentDto } from './dto/create-student.dto';
import { loginStudentDto } from './dto/login-student.dto';

@Controller('auth')
export class AuthController {
    constructor ( private authService : AuthService ){}

    @Post('/signup')
    signup(@Body() signDto: CreateStudentDto): Promise<{token: string}>{
        return this.authService.signup(signDto)
    }

    @Post('/login')
    login(@Body() logInto: loginStudentDto): Promise<{token: string}>{
        return this.authService.login(logInto)
    }

}
