class LS{
    getData(key){
        let data
        if(localStorage.getItem(key) === null){
            data = []
        } else {
            data = JSON.parse(localStorage.getItem(key))
        }
        return data
    }

    setData(key, data){
        localStorage.setItem(key, JSON.stringify(data))
    }

    addBook(book){
        const books = this.getData('books')
        books.push(book)
        this.setData('books', books)
    }


    delBook(book){
        let books = this.getData('books')
        books.forEach(function(bookFromLS, bookIndex){
            if(bookFromLS.title === book.title && bookFromLS.author === book.author && bookFromLS.isbn === book.isbn){
                books.splice(bookIndex, 1)
            }
        })
        this.setData('books', books)
    }
}