// Abre o lightbox e exibe a imagem clicada
function openLightbox(element) {
    var lightbox = document.getElementById("lightbox");
    var lightboxImage = document.getElementById("lightbox-image");
    lightboxImage.src = element.src;
    lightbox.style.display = "flex";
}

// Fecha o lightbox
function closeLightbox() {
    var lightbox = document.getElementById("lightbox");
    lightbox.style.display = "none";
}
