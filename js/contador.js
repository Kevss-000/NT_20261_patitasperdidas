// 🔥 NÚMEROS ALEATORIOS
document.addEventListener("DOMContentLoaded", () => {

    function numeroAleatorio(min, max) {
        return Math.floor(Math.random() * (max - min + 1)) + min;
    }

    const publicaciones = numeroAleatorio(100, 5000);
    const encontrados = numeroAleatorio(50, publicaciones);

    document.getElementById("random-publicaciones").textContent = publicaciones.toLocaleString();
    document.getElementById("random-encontrados").textContent = encontrados.toLocaleString();

});