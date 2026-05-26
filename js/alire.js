const toReadContainer =
document.getElementById("toReadContainer");

/* ================= FETCH ================= */

async function fetchToReadBooks(){

    try{

        const response =
        await fetch(
            "http://localhost:3000/livres"
        );

        const books =
        await response.json();

        /* only aLire true */

        const toReadBooks =
        books.filter(book =>
            book.aLire === true
        );

        displayBooks(toReadBooks);

    }

    catch(error){

        console.log("Erreur :", error);
        
    }

}

/* ================= DISPLAY ================= */

function displayBooks(data){

    toReadContainer.innerHTML = "";

    data.forEach(book => {

        const card =
        document.createElement("div");

        card.classList.add("book-card");

        card.innerHTML = `

            <img src="${book.couverture}"
            alt="${book.titre}">

            <button class="delete-btn">

                Delete

            </button>

        `;

        /* delete */

        const deleteBtn =
        card.querySelector(".delete-btn");

        deleteBtn.addEventListener(
            "click",
            () => removeFromRead(book.id)
        );

        toReadContainer
        .appendChild(card);

    });

}

/* ================= REMOVE ================= */

async function removeFromRead(id){

    try{

        await fetch(

            `http://localhost:3000/livres/${id}`,

            {
                method: "PATCH",

                headers:{
                    "Content-Type":
                    "application/json"
                },

                body: JSON.stringify({

                    aLire: false

                })

            }

        );

        fetchToReadBooks();

    }

    catch(error){

        console.log(error);

    }

}

/* ================= START ================= */

fetchToReadBooks();