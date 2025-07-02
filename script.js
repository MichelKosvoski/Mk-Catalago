// Seleciona o ícone do menu e o menu de categorias
const menuIcon = document.getElementById("menu-icon");
const categoriesMenu = document.getElementById("categories-menu");

// Verifica se os elementos existem
if (menuIcon && categoriesMenu) {
    console.log("Elementos encontrados!");

    // Adiciona evento de clique ao ícone do menu
    menuIcon.addEventListener("click", () => {
        console.log("Ícone clicado!");

        // Alterna a classe 'show' no menu de categorias
        categoriesMenu.classList.toggle("show");
    });
} else {
    console.error("menuIcon ou categoriesMenu não encontrado!");
}
