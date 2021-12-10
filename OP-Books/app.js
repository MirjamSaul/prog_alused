// app objects
const ui = new UI()
const ls = new LS()

// user input form
const form = document.querySelector('#book-form')
form.addEventListener('submit', addBook)

// page reload
document.addEventListener('DOMContentLoaded', getBooks)

// books table click event
bookList = document.querySelector('#book-list')
bookList.addEventListener('click', delBook)

//book filter keyboard event
const filter = document.querySelector("#filter")
filter.addEventListener('keyup', filterBook)

function filterBook(event){
    let filter = event.target.value.toLowerCase()
    ui.filterData(filter)
}



function delBook(event){
    if(event.target.textContent === 'X'){
        const book = ui.getBook(event.target)
        if(ui.delBook(event.target) === true){
            ls.delBook(book)
        }
    }
}


function getBooks(){
    // get data from LS
    const books = ls.getData('books')
    // for each book in books
    books.forEach(function (booksFromLS){
        ui.addBook(booksFromLS)
    })
}

// addBook function
function addBook(event) {
    // get form data from form input
    const title = ui.title.value
    const author = ui.author.value
    const isbn = ui.isbn.value
    // create book object with user data
    const book = new Book(title, author, isbn)
    console.log(book)
    // add book data to ui and show it
    ui.addBook(book)
    // save book data to ls
    ls.addBook(book)
    // clear form input value
    ui.title.value = ''
    ui.author.value = ''
    ui.isbn.value = ''
    event.preventDefault()
}