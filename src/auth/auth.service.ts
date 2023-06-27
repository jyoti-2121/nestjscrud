/* eslint-disable prettier/prettier */
import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { request,requestDocument } from './schemas/request';
import { Model } from 'mongoose';

@Injectable()
export class AuthService {
    constructor(@InjectModel(request.name) private requestModel : Model<requestDocument>){
    }
}
