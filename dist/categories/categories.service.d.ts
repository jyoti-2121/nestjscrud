import { CreateCatDto } from './create-cat.dto';
export declare class CategoriesService {
    insertApi(id: Number): {
        res: "string" | "number" | "bigint" | "boolean" | "symbol" | "undefined" | "object" | "function";
    };
    create(createCatDto: CreateCatDto): string;
}
