class UI {
    //ainult meetod, constr pole vaja
    addBook(book) {
        const tr = document.createElement('tr');
        const trContent = //kasuta `${}` syntaksit
            `
        <td>${book.title}</td>
        <td>${book.author}</td>
        <td>${book.isbn}</td>
        <td><a href="#">X</a></td>`

        tr.innerHTML = trContent;
        const bookList = document.querySelector("#bookList"); //????
    }
}

//klasside lugemise järjekord oluline