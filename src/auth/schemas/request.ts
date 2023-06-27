/* eslint-disable prettier/prettier */
import { Prop, Schema, SchemaFactory } from "@nestjs/mongoose";
import { Document } from "mongoose";
export type requestDocument = request & Document;

@Schema({collection: 'request',timestamps: true})
export class request{
    @Prop({type: Object})
    location: object;
    @Prop({type: Boolean})
    comment_enabled: boolean;
    @Prop({type: Object})
    country_data: object;
    @Prop({type: Number})
    avg_donation: number;
    @Prop({type: Number})
    total_donors: number;
    @Prop({type: Number})
    total_donation: number;
    @Prop({type: String})
    status:string;
    @Prop({type: String})
    form_settings: string;
    @Prop({type: Object})
    form_data:object;
    @Prop({type: String})
    user_id: string;
    @Prop({type: String})
    active_type:string;
    @Prop({type: String})
    category_slug:string;
    @Prop({type: String})
    reference_id:string;
    @Prop({type: String})
    approve_time: string;
}
export const requestSchema = SchemaFactory.createForClass(request)
