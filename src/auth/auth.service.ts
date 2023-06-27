/* eslint-disable prefer-const */
/* eslint-disable prettier/prettier */
import { Injectable, UnauthorizedException } from '@nestjs/common';
import { CreateStudentDto } from './dto/create-student.dto';
import { student, studentDocument } from './schemas/student';
import { Model } from 'mongoose';
import { InjectModel } from '@nestjs/mongoose';
import * as bcrypt from "bcryptjs";
import { JwtService } from '@nestjs/jwt';
import { loginStudentDto } from './dto/login-student.dto';
@Injectable()
export class AuthService {
    constructor(@InjectModel(student.name) 
    private studentModel : Model<studentDocument>,
    private jwtService : JwtService){
    }
    async signup(signupDto:CreateStudentDto): Promise<{token: string}>{
        const {first_name,last_name,phone,is_deleted,email,password} = signupDto;
    
        const hashedPassword = await bcrypt.hash(password, 10);
    
        const student = await this.studentModel.create({
          name: first_name+' '+last_name,
          phone,
          email,
          is_deleted,
          password: hashedPassword,
        });
        const token = this.jwtService.sign({id : student._id.toString()});    
        return { token };
    }

    async login(loginDto: loginStudentDto): Promise<{ token: string }> {
        const { email, password } = loginDto;
    
        const student = await this.studentModel.findOne({ email: email });
    
        if (!student) {
          throw new UnauthorizedException('Invalid email or password');
        }
    
        const isPasswordMatched = await bcrypt.compare(password, student.password);
    
        if (!isPasswordMatched) {
          throw new UnauthorizedException('Invalid email or password');
        }
    
        const token = this.jwtService.sign({ id: student._id });
    
        return { token };
    }

}
