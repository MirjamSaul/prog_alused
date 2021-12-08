class LS {
    addBook(book) {

        let booksArray;
        if(localStorage.getItem('booksArray') === null) {
            booksArray = [];
        } else {
            booksArray = JSON.parse(localStorage.getItem('booksArray'));
        }

        booksArray.push(books);
        localStorage.setItem('booksArray', JSON.stringify(booksArray));
    }
}