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
export type requestDocument = request & Document;
export declare class request {
    location: object;
    comment_enabled: boolean;
    country_data: object;
    avg_donation: number;
    total_donors: number;
    total_donation: number;
    status: string;
    form_settings: string;
    form_data: object;
    user_id: string;
    active_type: string;
    category_slug: string;
    reference_id: string;
    approve_time: string;
}
export declare const requestSchema: import("mongoose").Schema<request, import("mongoose").Model<request, any, any, any, Document<unknown, any, request> & Omit<request & {
    _id: import("mongoose").Types.ObjectId;
}, never>, any>, {}, {}, {}, {}, import("mongoose").DefaultSchemaOptions, request, Document<unknown, {}, import("mongoose").FlatRecord<request>> & Omit<import("mongoose").FlatRecord<request> & {
    _id: import("mongoose").Types.ObjectId;
}, never>>;
