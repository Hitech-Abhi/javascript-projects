console.log('Welcome to Project-2');
showLibrary()

//constructor
function Book(name, author, type){
    this.name = name;
    this.author = author;
    this.type = type;
}

//display constructor
function Display() {
   
}

// //add method to display prototype
// Display.prototype.add = function (book) {
//     console.log('Adding to UI');
//     let tableBody = document.getElementById('tableBody');
//     let uiString = `<tr>
//     <td>${book.name}</td>
//     <td>${book.author}</td>
//     <td>${book.type}</td>
//     </tr>`
//     tableBody.innerHTML += uiString;
// };

//method to add to local storage
Display.prototype.localStorage = function (book) {
    console.log('Adding to local storage')
    
    let libraryData = localStorage.getItem('libraryData')
    if (libraryData == null) {
        bookObj = [];
    }
    else{
        bookObj = JSON.parse(libraryData);
    }
    
    // let myBook ={
    //     name: book.name,
    //     author: book.author,
    //     type: book.type
    // }
    // bookObj.push(myBook);
    bookObj.push(book);
    localStorage.setItem('libraryData', JSON.stringify(bookObj));
    console.log(bookObj);
}

//add method to show from local storage
function showLibrary() {
    // console.log('Adding to UI from local storage');
    let libraryData = localStorage.getItem('libraryData')
    if (libraryData == null) {
        bookObj = [];
    }
    else{
        bookObj = JSON.parse(libraryData);
    }

    let html = "";
    bookObj.forEach(function (book,index) {
        html += `<tr>
                    <td>${book.name}</td>
                    <td>${book.author}</td>
                    <td>${book.type}</td>
                    <td><button id="${index}" onclick="deleteBook(this.id)" class="btn btn-primary">Delete Book</button></td>
                </tr>`
    });
    let tableBody = document.getElementById('tableBody');
    if (bookObj.length != 0) {
        tableBody.innerHTML = html;
    }
    else {
        tableBody.innerHTML = `Nothing to show! Use "Add Book" section above to add books.`;
    }
    
};

//Function to delete a book
function deleteBook(index) {
    let libraryData = localStorage.getItem('libraryData')
    if (libraryData == null) {
        bookObj = [];
    }
    else{
        bookObj = JSON.parse(libraryData);
    }
    bookObj.splice(index, 1);
    localStorage.setItem('libraryData',JSON.stringify(bookObj));
    
    showLibrary();
} 

//implement the clear function
Display.prototype.clear = function () {
    let libraryForm = document.getElementById('libraryForm');
    libraryForm.reset();
};

//implement the validate function
Display.prototype.validate = function (book) {
    if (book.name.length <2 || book.author.length <2){
        return false;
    }
    else{
        return true;
    }
};

Display.prototype.showMessage = function (type, displayMessage) {
    let message = document.getElementById('message');
    let boldText;
    if (type == 'success') {
        boldText = 'Success';
    }
    else{
        boldText = 'Error!';
    }
    message.innerHTML = `
                        <div class = "alert alert-${type} alert-dismissible fade show" role="alert">
                        <strong>${boldText}:</strong> ${displayMessage}
                        <button type="button" class="close" data-dismiss="alert" aria-label="Close">
                        <span aria-hidden="true">×</span>
                        </button>
                        </div>`;
    setTimeout(function() {
        message.innerHTML = ''
    }, 5000);
};

//add submit event listener to library form
let libraryForm = document.getElementById('libraryForm');
libraryForm.addEventListener('submit', libraryFormSubmit);

function libraryFormSubmit(e) {
    e.preventDefault();
    console.log('You have submitted the libraryForm')
   
    let name = document.getElementById('bookName').value;
    let author = document.getElementById('author').value;
    let type;
    
    let fiction = document.getElementById('fiction');
    let programming = document.getElementById('programming');
    let cooking = document.getElementById('cooking');

    if (fiction.checked) {
        type = fiction.value;
    }
    else if(programming.checked){
        type = programming.value;
    }
    else if(cooking.checked){
        type = cooking.value;
    }

    let book = new Book(name, author, type);
    // console.log(book);
    
    let display = new Display()
    if (display.validate(book)){
        display.localStorage(book);
        showLibrary()
        display.clear();
        display.showMessage('success', 'Your book has been successfully added.')
    }
    else{
        //show error to the user
        display.showMessage('danger', 'Sorry you cannot add this book.');
    }
}
