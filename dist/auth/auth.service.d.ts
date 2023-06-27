import { CreateStudentDto } from './dto/create-student.dto';
import { studentDocument } from './schemas/student';
import { Model } from 'mongoose';
import { JwtService } from '@nestjs/jwt';
import { loginStudentDto } from './dto/login-student.dto';
export declare class AuthService {
    private studentModel;
    private jwtService;
    constructor(studentModel: Model<studentDocument>, jwtService: JwtService);
    signup(signupDto: CreateStudentDto): Promise<{
        token: string;
    }>;
    login(loginDto: loginStudentDto): Promise<{
        token: string;
    }>;
}
