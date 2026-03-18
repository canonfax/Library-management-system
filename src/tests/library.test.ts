import { Library } from "../services/library";

declare function test(name: string, fn: () => void): void;
declare function expect(value: any): any;

const lib = new Library();

test("add book", () => {
    lib.addBook({
        id: 1,
        title: "Test",
        author: "Teszt Elek",
        category: { name: "Test" },
        isAvailable: true
    });

    expect(lib.listBooks().length).toBe(1);
});