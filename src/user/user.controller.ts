/* eslint-disable prettier/prettier */
import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { UserService } from './user.service';
import { CreateUserDto, testvalidation } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';

@Controller('user')
export class UserController {
  constructor(private readonly userService: UserService) {}

  @Post("/insert")
  create(@Body() createUserDto: CreateUserDto) {
    return this.userService.create(createUserDto);
  }

  @Get("/pipevalidation")
  testglobal(@Body() testvalidation: testvalidation) {
    return this.userService.pipeVal(testvalidation);
  }

  @Get('/get')
  findAll() {
    console.log(process.env.MONGO_URI)
    return this.userService.findAll();
  }

  @Get('/getbyid/:id')
  findOne(@Param('id') id: string) {
    return this.userService.findOne(id);
  }

  @Patch('/upgrade/:id')
  update(@Param('id') id: string, @Body() updateUserDto: UpdateUserDto) {
    return this.userService.update(id, updateUserDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.userService.remove(id);
  }
}
