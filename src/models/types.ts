import { Book } from "./book";
import { Borrower } from "./borrower";

export type SearchResults = Book | Borrower;

export type BorrowerBook = Book & {
    borrowerId: number;
};