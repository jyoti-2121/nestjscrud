/* eslint-disable prettier/prettier */
import { Prop, Schema, SchemaFactory } from "@nestjs/mongoose";
import { Document } from "mongoose";
export type studentDocument = student & Document;

@Schema({collection: 'student',timestamps: true})
export class student{
    @Prop({type : String})
    first_name : string;
    @Prop({type : String})
    last_name : string;
    @Prop({type : String})
    phone : string;
    @Prop({type : Boolean})
    is_deleted : boolean;
    @Prop({type : String, unique : [true,"Email already exist!"]})
    email : string;
    @Prop({type : String})
    password : string;
}
export const studentSchema = SchemaFactory.createForClass(student)