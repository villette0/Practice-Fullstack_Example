const booksList = document.getElementById('ulbooklist');

fetch('/books')
.then((response) => {
    return response.json();
})
.then((data) => {
    console.log(data);
    data.forEach(book => {
        const listBook = document.createElement('li');
        listBook.textContent = book.book_name;
        booksList.append(listBook);
    })
})

// Look at it on localhost:3001