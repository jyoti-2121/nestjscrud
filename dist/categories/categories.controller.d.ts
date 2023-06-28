import { CategoriesService } from './categories.service';
import { CreateCatDto } from './create-cat.dto';
export declare class CategoriesController {
    private cateService;
    constructor(cateService: CategoriesService);
    insert(pageNo: number): {
        res: "string" | "number" | "bigint" | "boolean" | "symbol" | "undefined" | "object" | "function";
    };
    create(createCatDto: CreateCatDto): Promise<string>;
}
