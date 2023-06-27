import { AuthService } from './auth.service';
import { CreateStudentDto } from './dto/create-student.dto';
import { loginStudentDto } from './dto/login-student.dto';
export declare class AuthController {
    private authService;
    constructor(authService: AuthService);
    signup(signDto: CreateStudentDto): Promise<{
        token: string;
    }>;
    login(logInto: loginStudentDto): Promise<{
        token: string;
    }>;
}
