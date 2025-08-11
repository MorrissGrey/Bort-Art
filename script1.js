document.addEventListener("DOMContentLoaded", function () {
    const modal = document.getElementById("modal");
    const imgGrande = document.getElementById("img-grande");
    const texto = document.getElementById("texto");
    const cerrar = document.querySelector(".cerrar");
    const miniaturas = document.querySelectorAll(".miniatura");

    miniaturas.forEach(img => {
        img.addEventListener("click", () => {
            modal.style.display = "flex";
            imgGrande.src = img.src;
            imgGrande.alt = img.alt;
            texto.textContent = img.alt;
        });
    });

    cerrar.addEventListener("click", () => {
        modal.style.display = "none";
        imgGrande.src = "";
        texto.textContent = "";
    });

    window.addEventListener("click", (e) => {
        if (e.target === modal) {
            modal.style.display = "none";
            imgGrande.src = "";
            texto.textContent = "";
        }
    });
});
