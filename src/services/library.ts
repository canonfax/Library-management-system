import { Book } from "../models/book";
import { Borrower } from "../models/borrower";
import { LoanManager } from "./loanManager";
import { Log } from "../utils/decorators";

export class Library {
    private books = new Map<number, Book>();
    private borrowers = new Map<number, Borrower>();

    private loanManager = new LoanManager<Book>();

    addBook(book: Book): void {
        this.books.set(book.id, book);
    }

    removeBook(id: number): void {
        this.books.delete(id);
    }

    @Log
    listBooks(): Book[] {
        return Array.from(this.books.values());
    }

    addBorrower(b: Borrower): void {
        this.borrowers.set(b.id, b);
    }

    borrowBook(bookId: number, borrowerId: number): void {
        const book = this.books.get(bookId);

        if (!book || !book.isAvailable) {
            throw new Error("Könyv nem elérhető!");
        }

        book.isAvailable = false;
        this.loanManager.borrow(book, borrowerId);
    }

    returnBook(bookId: number): void {
        const book = this.books.get(bookId);
        if (!book) return;

        book.isAvailable = true;
        this.loanManager.returnItem(bookId);
    }

    async getBooksAsync(): Promise<Book[]> {
        return new Promise(resolve => {
            setTimeout(() => {
                resolve(this.listBooks());
            }, 1000);
        });
    }
}