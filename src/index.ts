import { Library } from "./services/library";
import { Fiction } from "./models/category";

const library = new Library();

const book1 = {
    id: 1,
    title: "1984",
    author: "George Orwell",
    category: new Fiction("Fiction", "Dystopian"),
    isAvailable: true
};

library.addBook(book1);

library.addBorrower({ id: 1, name: "Dani" });

library.borrowBook(1, 1);

library.getBooksAsync().then(books => {
    console.log("Async könyvek:", books);
});