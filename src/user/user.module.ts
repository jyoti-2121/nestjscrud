/* eslint-disable prettier/prettier */
import { Module } from '@nestjs/common';
import { UserService } from './user.service';
import { UserController } from './user.controller';
import { MongooseModule } from '@nestjs/mongoose';
import { userSchema, user } from './schema/user';
@Module({
  imports:[ MongooseModule.forFeature( [ { name : user.name , schema : userSchema } ] ) ],
  controllers: [UserController],
  providers: [UserService]
})
export class UserModule {
}
