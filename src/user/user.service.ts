/* eslint-disable prefer-const */
/* eslint-disable prettier/prettier */
import { Injectable } from '@nestjs/common';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { user, userDocument } from './schema/user';
import { Model } from 'mongoose';
import { InjectModel } from '@nestjs/mongoose';

@Injectable()
export class UserService {
  constructor(@InjectModel(user.name) private userModel : Model<userDocument>){
  }
  async create(createUserDto: CreateUserDto): Promise<user> {
    const model = new this.userModel(createUserDto);
    return await model.save();
  }
  async findAll() {
    return await this.userModel.find();
  }
  async findOne(id: string) {
    return await this.userModel.findById(id);
  }
  async update(id: string, updateUserDto: UpdateUserDto) {
    return await this.userModel.updateOne({_id:id},{$set:updateUserDto})
  }
  async remove(id: string) {
    return await this.userModel.deleteOne({_id:id})
  }
}
