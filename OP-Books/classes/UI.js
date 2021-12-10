

class UI {
    constructor() {
        this.title = document.querySelector('#title')
        this.author = document.querySelector('#author')
        this.isbn = document.querySelector('#isbn')
        this.bookList = document.querySelector('#book-list')
    }
    addBook(book){
        const tr = document.createElement('tr')
        tr.setAttribute('class', 'book-row')
        tr.innerHTML = `<td>${book.title}</td>
                <td>${book.author}</td>
                <td>${book.isbn}</td>
                <td><a href="#">X</a></td>`
        this.bookList.appendChild(tr)
    }

    getBook(click){
        let isbn = click.parentElement.previousElementSibling.textContent
        let author = click.parentElement.previousElementSibling.previousElementSibling.textContent
        let title = click.parentElement.previousElementSibling.previousElementSibling.previousElementSibling.textContent
        const book = new Book(title, author, isbn)
        return book
    }

    delBook(click){
        if(confirm('Do you realy want to delete this book?')) {
            click.parentElement.parentElement.remove()
            return true
        } else {
            return false
        }
    }

    filterData(filter){
        let bookListData = document.querySelectorAll('.book-row')
        bookListData.forEach(function (trContent){
            if(trContent.textContent.toLowerCase().indexOf(filter) !== -1){
                trContent.style.display = '';
            } else {
                trContent.style.display = 'none'
            }
        })
    }
}

//klasside lugemise järjekord oluline