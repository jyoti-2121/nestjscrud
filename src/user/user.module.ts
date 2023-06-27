/* eslint-disable prettier/prettier */
import { Module } from '@nestjs/common';
import { UserService } from './user.service';
import { UserController } from './user.controller';
import { MongooseModule } from '@nestjs/mongoose';
import { userSchema, user } from './schema/user';
import { AuthModule } from 'src/auth/auth.module';
@Module({
  imports:[ 
    AuthModule,
    MongooseModule.forFeature( [ { name : user.name , schema : userSchema } ] ) ],
  controllers: [UserController],
  providers: [UserService]
})
export class UserModule {
}
