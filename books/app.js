
const form = document.querySelector('form');

const titleInput = document.querySelector('#pealkiri');
const authorInput = document.querySelector('#autor');
const isbnInput = document.querySelector('#isbn')

const bookRow = document.querySelector('tbody');
bookRow.addEventListener('click', removeRow);


form.addEventListener('submit', addBooks);
document.addEventListener('DOMContentLoaded', getBooksFromLS);

function addBooks(event) {

    //pealkiri
    const pealkiri = titleInput.value;
    const tdPealkiri = document.createElement('td');

    const titleText = document.createTextNode(pealkiri);
    tdPealkiri.appendChild(titleText);

    //autor
    const autor = authorInput.value;
    const tdAutor = document.createElement('td');

    const authorText = document.createTextNode(autor);
    tdAutor.appendChild(authorText);

    //isbn
    const isbn = isbnInput.value;
    const tdIsbn = document.createElement('td');

    const isbnText = document.createTextNode(isbn);
    tdIsbn.appendChild(isbnText);

    //create row
    const tr = document.createElement('tr')
    tr.appendChild(tdPealkiri);
    tr.appendChild(tdAutor);
    tr.appendChild(tdIsbn);


    //add X link for removing
    const linkX = document.createElement('a');
    linkX.setAttribute('href', '#');
    linkX.appendChild(document.createTextNode('X'));
    tr.appendChild(linkX);

    //find table body, add row
    const tBody = document.querySelector('tbody');
    tBody.appendChild(tr);

    //save book
    let books = [pealkiri, autor, isbn];

    saveBooksToLS(books);


    titleInput.value = '';
    authorInput.value = '';
    isbnInput.value = '';

    event.preventDefault();
}

//save books to LS
function saveBooksToLS(books) {
    let booksArray;

    if(localStorage.getItem('booksArray') === null) {
        booksArray = [];
    } else {
        booksArray = JSON.parse(localStorage.getItem('booksArray'));
    }

    booksArray.push(books);
    localStorage.setItem('booksArray', JSON.stringify(booksArray));
    //console.log(booksArray);
}

//remove row using X link
function removeRow(e) {
    if(e.target.textContent == 'X') {
        if(confirm('Do you want to remove this item?')){

            //del from LS, tunnis
            //let books = e.target.parentElement.firstChild.textContent;

            e.target.parentElement.remove();
            let delISBN = e.target.parentElement.children[2].textContent;

            deleteBookFromLS(delISBN);
        }
    }
}

//delete from  Local storage

function deleteBookFromLS(delISBN) {
    let booksArray;

    if(localStorage.getItem('booksArray') === null) {
        booksArray = [];
    } else {
        booksArray = JSON.parse(localStorage.getItem('booksArray'));
    }

    booksArray.forEach(function(books, index) {
        if(books[2] === delISBN) {

            booksArray.splice(index, 1);
        }
    })
    localStorage.setItem('booksArray', JSON.stringify(booksArray));
}






