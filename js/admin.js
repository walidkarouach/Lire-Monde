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

/* ================= DISPLAY ================= */

function displayBooks(books){

    tableBody.innerHTML = "";

    books.forEach(book => {

        const tr =
        document.createElement("tr");

        tr.innerHTML = `

            <td>
                <img src="${book.couverture}">
            </td>

            <td>${book.titre}</td>

            <td>${book.auteur}</td>

            <td>${book.genre}</td>

            <td>

                <div class="action-btns">

                    <button class="delete-table-btn">

                        X

                    </button>

                    <button class="edit-btn">

                        <i class="fa-solid fa-pen"></i>

                    </button>

                </div>

            </td>

        `;

        /* delete */

        const deleteBtn =
        tr.querySelector(".delete-table-btn");

        deleteBtn.addEventListener("click", () => {

            deleteBook(book.id);

        });

        /* edit */

        const editBtn =
        tr.querySelector(".edit-btn");

        editBtn.addEventListener("click", () => {

            editBook(book);

        });

        tableBody.appendChild(tr);

    });

}

/* ================= OPEN ================= */

openAddModal.addEventListener("click", () => {

    adminModal.classList.add("show");

});

/* ================= CLOSE ================= */

cancelBtn.addEventListener("click", () => {

    adminModal.classList.remove("show");

    resetForm();

});

/* ================= RESET ================= */

function resetForm(){

    bookForm.reset();

    bookId.value = "";

}

