/* eslint-disable prettier/prettier */
import { Module } from '@nestjs/common';
import { AuthController } from './auth.controller';
import { AuthService } from './auth.service';
import { MongooseModule } from '@nestjs/mongoose';
import { request,requestSchema } from './schemas/request';
import { PassportModule } from '@nestjs/passport';
import { JwtModule } from '@nestjs/jwt';

@Module({
  imports:[ 
    PassportModule.register({defaultStrategy:'jwt'}),
    JwtModule.register({secret: process.env.JWT_SECRET, signOptions: {expiresIn: process.env.JWT_EXPIRES}}),
    MongooseModule.forFeature( [ { name : request.name , schema : requestSchema } ] )
  ],
  controllers: [AuthController],
  providers: [AuthService]
})
export class AuthModule {}
