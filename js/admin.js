const tableBody =
document.getElementById("tableBody");

const adminModal =
document.getElementById("adminModal");

const openAddModal =
document.getElementById("openAddModal");

const cancelBtn =
document.getElementById("cancelBtn");

const bookForm =
document.getElementById("bookForm");

/* inputs */

const bookId =
document.getElementById("bookId");

const titleInput =
document.getElementById("title");

const authorInput =
document.getElementById("author");

const genreInput =
document.getElementById("genre");

const descriptionInput =
document.getElementById("description");

const coverInput =
document.getElementById("cover");

/* ================= FETCH ================= */

async function fetchBooks(){

    try{

        const response =
        await fetch(
            "http://localhost:3000/livres"
        );

        const books =
        await response.json();

        displayBooks(books);

    }

    catch(error){

        console.log(error);

    }

}

