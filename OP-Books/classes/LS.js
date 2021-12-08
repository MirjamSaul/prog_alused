class LS {
    getData(key){  //localStoragekey
        let data;

        if(localStorage.getItem('key') === null) {
            data = [];
        } else {
            data = JSON.parse(localStorage.getItem('key'));
        }

        return data;
    }
    setData(key, data) {
        localStorage.setItem(key, JSON.stringify(data))
    }


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