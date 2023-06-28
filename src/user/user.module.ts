/* eslint-disable prettier/prettier */
import { Module } from '@nestjs/common';
import { UserService } from './user.service';
import { UserController } from './user.controller';
import { MongooseModule } from '@nestjs/mongoose';
import { userSchema, user } from './schema/user';
import { APP_PIPE } from '@nestjs/core';
import { ValidationPipe } from '../user/user-validation.pipe';
@Module({
  imports:[ MongooseModule.forFeature( [ { name : user.name , schema : userSchema } ] ) ],
  controllers: [UserController],
  providers: [
    UserService,
    {
      provide: APP_PIPE,
      useClass: ValidationPipe, //validation pipe for perticular user module only
    },]
})
export class UserModule {
}
