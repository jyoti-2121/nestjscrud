/* eslint-disable prettier/prettier */
import { Prop, Schema, SchemaFactory } from "@nestjs/mongoose";
import { Document } from "mongoose";

export type userDocument = user & Document;

@Schema({collection: 'user'})
export class user{
    @Prop({type : String})
    first_name : string;
    @Prop({type : String})
    last_name : string;
    @Prop({type : String})
    phone_country_full_name : string;
    @Prop({type : String})
    phone : string;
    @Prop({type : String})
    image : string;
    @Prop({type : Boolean})
    is_user : boolean;
    @Prop({type : Boolean})
    is_donor : boolean;
    @Prop({type : Boolean})
    is_volunteer : boolean;
    @Prop({type : Object})
    location : object;
    @Prop({type : Boolean})
    is_restaurant : boolean;
    @Prop({type : String})
    restaurant_name : string;
    @Prop({type : String})
    restaurant_location : string;
    @Prop({type : Boolean})
    is_veg : boolean;
    @Prop({type: [String]})
    my_request : string[];
    @Prop({type : Object})
    my_causes : object;
    @Prop({type : String})
    time_zone : string;
    @Prop({type : String})
    default_country : string;
    @Prop({type : Boolean})
    is_deleted : boolean;
    @Prop({type : Boolean})
    blocked : boolean;
    @Prop({type : String})
    display_name : string;
    @Prop({type : String})
    email : string;
    @Prop({type: Object})
    phone_code : object;
    @Prop({type: Object})
    phone_country_short_name : object;
    @Prop({type : Object})
    country_data : object;
}
export const userSchema = SchemaFactory.createForClass(user)