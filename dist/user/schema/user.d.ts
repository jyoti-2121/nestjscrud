/// <reference types="mongoose/types/aggregate" />
/// <reference types="mongoose/types/callback" />
/// <reference types="mongoose/types/collection" />
/// <reference types="mongoose/types/connection" />
/// <reference types="mongoose/types/cursor" />
/// <reference types="mongoose/types/document" />
/// <reference types="mongoose/types/error" />
/// <reference types="mongoose/types/expressions" />
/// <reference types="mongoose/types/helpers" />
/// <reference types="mongoose/types/middlewares" />
/// <reference types="mongoose/types/indexes" />
/// <reference types="mongoose/types/models" />
/// <reference types="mongoose/types/mongooseoptions" />
/// <reference types="mongoose/types/pipelinestage" />
/// <reference types="mongoose/types/populate" />
/// <reference types="mongoose/types/query" />
/// <reference types="mongoose/types/schemaoptions" />
/// <reference types="mongoose/types/schematypes" />
/// <reference types="mongoose/types/session" />
/// <reference types="mongoose/types/types" />
/// <reference types="mongoose/types/utility" />
/// <reference types="mongoose/types/validation" />
/// <reference types="mongoose/types/virtuals" />
/// <reference types="mongoose/types/inferschematype" />
import { Document } from "mongoose";
export type userDocument = user & Document;
export declare class user {
    first_name: string;
    last_name: string;
    phone_country_full_name: string;
    phone: string;
    image: string;
    is_user: boolean;
    is_donor: boolean;
    is_volunteer: boolean;
    location: object;
    is_restaurant: boolean;
    restaurant_name: string;
    restaurant_location: string;
    is_veg: boolean;
    my_request: string[];
    my_causes: object;
    time_zone: string;
    default_country: string;
    is_deleted: boolean;
    blocked: boolean;
    display_name: string;
    email: string;
    phone_code: object;
    phone_country_short_name: object;
    country_data: object;
}
export declare const userSchema: import("mongoose").Schema<user, import("mongoose").Model<user, any, any, any, Document<unknown, any, user> & Omit<user & {
    _id: import("mongoose").Types.ObjectId;
}, never>, any>, {}, {}, {}, {}, import("mongoose").DefaultSchemaOptions, user, Document<unknown, {}, import("mongoose").FlatRecord<user>> & Omit<import("mongoose").FlatRecord<user> & {
    _id: import("mongoose").Types.ObjectId;
}, never>>;
