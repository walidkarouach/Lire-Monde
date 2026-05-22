const modal =
document.getElementById("bookModal");

const modalBody =
document.getElementById("modalBody");

const closeModal =
document.getElementById("closeModal");

/* ================= OPEN MODAL ================= */

function openModal(book){

    modal.classList.add("show");

    modalBody.innerHTML = `

        <img src="${book.couverture}"
        alt="${book.titre}">

        <div class="modal-info">

            <h2>${book.titre}</h2>

            <h4>
                Author :
                <span>${book.auteur}</span>
            </h4>

            <h4>
                Genre :
                <span>${book.genre}</span>
            </h4>

            <p>
                ${book.description}
            </p>

            <button id="readBtn">

                ${book.aLire
                    ? "Remove From List"
                    : "Add To Read"}

            </button>

        </div>

    `;

    /* button */

    const readBtn =
    document.getElementById("readBtn");

    readBtn.addEventListener("click", () => {

        toggleRead(book);

    });

}

/* ================= TO READ ================= */

async function toggleRead(book){

    try{

        const response = await fetch(

            `http://localhost:3000/livres/${book.id}`,

            {
                method: "PATCH",

                headers:{
                    "Content-Type":
                    "application/json"
                },

                body: JSON.stringify({

                    aLire: !book.aLire

                })

            }

        );

        if(!response.ok){

            throw new Error(
                "Erreur PATCH"
            );

        }

        /* update value */

        book.aLire = !book.aLire;

        /* reopen */

        openModal(book);

    }

    catch(error){

        console.log(error);

    }

}

/* ================= CLOSE ================= */

closeModal.addEventListener("click", () => {

    modal.classList.remove("show");

});

/* outside */

window.addEventListener("click", (e) => {

    if(e.target === modal){

        modal.classList.remove("show");

    }

});