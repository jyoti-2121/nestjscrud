/* eslint-disable prettier/prettier */
import { Module } from '@nestjs/common';
// import { ConfigModule, ConfigService } from '@nestjs/config';
import { MongooseModule } from '@nestjs/mongoose';
import { UserModule } from './user/user.module';
import * as dotenv from 'dotenv';
dotenv.config();
@Module({
  imports: [
    MongooseModule.forRoot(process.env.MONGO_URI),
    MongooseModule.forRoot(process.env.MONGO_URI_1),
    UserModule
  ],
  controllers: [],
  providers: [],
})
export class AppModule {
 
}
