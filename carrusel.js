document.addEventListener("DOMContentLoaded", () => {
    const slides = document.querySelectorAll(".slide");
    const btnAnterior = document.querySelector(".anterior");
    const btnSiguiente = document.querySelector(".siguiente");
    let indice = 0;

    function mostrarSlide(i) {
        slides.forEach(slide => slide.classList.remove("activo"));
        slides[i].classList.add("activo");
    }

    btnAnterior.addEventListener("click", () => {
        indice = (indice - 1 + slides.length) % slides.length;
        mostrarSlide(indice);
    });

    btnSiguiente.addEventListener("click", () => {
        indice = (indice + 1) % slides.length;
        mostrarSlide(indice);
    });

    mostrarSlide(indice);
});
