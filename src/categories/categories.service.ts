/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable @typescript-eslint/ban-types */
/* eslint-disable prefer-const */
/* eslint-disable prettier/prettier */
import { Injectable } from '@nestjs/common';
import { CreateCatDto } from './create-cat.dto';
@Injectable()
export class CategoriesService {
    insertApi(id:Number){  
        let res = typeof(id)      
        return { res } 
    }
    create(createCatDto: CreateCatDto){
        console.log(">>>>")
        return "done"
    }
}
