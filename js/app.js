const booksContainer =
document.getElementById("booksContainer");

const genreFilters =
document.getElementById("genreFilters");

const searchInput =
document.getElementById("searchInput");

let books = [];

/* ================= FETCH BOOKS ================= */

async function fetchBooks() {

    try {

        const response =
        await fetch("http://localhost:3000/livres");

        books = await response.json();

        displayBooks(books);

        displayGenres();

    } catch (error) {

        console.log(
            "Erreur lors du chargement :",
            error
        );

    }

}

/* ================= DISPLAY BOOKS ================= */

function displayBooks(data) {

    booksContainer.innerHTML = "";

    data.forEach(book => {

        booksContainer.innerHTML += `

            <div class="book-card">

                <img src="${book.couverture}"
                alt="${book.titre}">

                <button>
                    Book Details
                </button>

            </div>

        `;

    });

}

/* ================= DISPLAY GENRES ================= */

function displayGenres() {

    const genres =
    ["All",
    ...new Set(books.map(book => book.genre))];

    genreFilters.innerHTML = "";

    genres.forEach(genre => {

        genreFilters.innerHTML += `

            <button onclick="filterBooks('${genre}')">

                ${genre}

            </button>

        `;

    });

}

/* ================= FILTER ================= */

function filterBooks(genre) {

    if (genre === "All") {

        displayBooks(books);

        return;

    }

    const filtered =
    books.filter(book =>
        book.genre === genre
    );

    displayBooks(filtered);

}

/* ================= SEARCH ================= */

searchInput.addEventListener("input", () => {

    const value =
    searchInput.value.toLowerCase();

    const filtered =
    books.filter(book =>

        book.titre
        .toLowerCase()
        .includes(value)

    );

    displayBooks(filtered);

});

/* ================= START ================= */

fetchBooks();