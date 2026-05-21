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

            <button>

                ${book.aLire
                    ? "Remove From List"
                    : "Add To Read"}

            </button>

        </div>

    `;

}

/* ================= CLOSE MODAL ================= */

closeModal.addEventListener("click", () => {

    modal.classList.remove("show");

});

/* close outside */

window.addEventListener("click", (e) => {

    if(e.target === modal){

        modal.classList.remove("show");

    }

});