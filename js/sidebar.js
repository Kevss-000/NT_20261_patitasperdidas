const btn1 = document.getElementById("menu-toggle");
const btn2 = document.getElementById("menu-toggle-2");
const sidebar = document.getElementById("sidebar");

// 🔐 Simulación de login
let isLoggedIn = false;

// 🔥 Función SOLO para iconos (abre y cierra)
function toggleSidebar() {

    if (!sidebar.classList.contains("active")) {
        // ABRIR
        sidebar.classList.add("active");

        btn1.style.opacity = "0";
        btn1.style.pointerEvents = "none";

    } else {
        // CERRAR
        sidebar.classList.remove("active");

        setTimeout(() => {
            btn1.style.opacity = "1";
            btn1.style.pointerEvents = "auto";
        }, 300);
    }
}

// Eventos iconos
btn1.addEventListener("click", toggleSidebar);
btn2.addEventListener("click", toggleSidebar);


// 🔒 BLOQUEO DE SECCIONES (SOLO ABRE, NO CIERRA)
const restrictedLinks = document.querySelectorAll(
    'a[href="#reportes"], a[href="#publicaciones"], a[href="#voluntarios"]'
);

restrictedLinks.forEach(link => {
    link.addEventListener("click", (e) => {
        if (!isLoggedIn) {
            e.preventDefault();

            // 🔥 SOLO ABRE SI ESTÁ CERRADO
            if (!sidebar.classList.contains("active")) {
                sidebar.classList.add("active");

                btn1.style.opacity = "0";
                btn1.style.pointerEvents = "none";
            }
        }
    });
});