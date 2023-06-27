import { requestDocument } from './schemas/request';
import { Model } from 'mongoose';
export declare class AuthService {
    private requestModel;
    constructor(requestModel: Model<requestDocument>);
}
