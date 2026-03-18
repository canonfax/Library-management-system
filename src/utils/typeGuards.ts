import { Category, Fiction } from "../models/category";

export function isFiction(category: any): category is Fiction {
    return category instanceof Fiction;
}