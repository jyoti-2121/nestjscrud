/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable prettier/prettier */
import { Controller, Post, Param, ParseIntPipe, UsePipes, Body } from '@nestjs/common';
import { CategoriesService } from './categories.service';
import { CreateCatDto } from './create-cat.dto';

@Controller('categories')
export class CategoriesController {
    constructor(private cateService: CategoriesService){}

    @Post('/insert/:pageNo')
    insert(@Param('pageNo',ParseIntPipe) pageNo:number){
        return this.cateService.insertApi(pageNo);
    }
    @Post('/test')
    async create(@Body() createCatDto: CreateCatDto) {
    return this.cateService.create(createCatDto);
    }
}
