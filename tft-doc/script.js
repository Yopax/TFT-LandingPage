$(".menu > ul > li").click(function(e){

    $(this).siblings().removeClass("active");
    $(this).toggleClass("active");
    $(this).find("ul").slideToggle();
    $(this).siblings().find("ul").slideUp();
    $(this).siblings().find("ul").find("li").removeClass("active");
});

$(".menu-btn").click(function(){
    $(".sidebar").toggleClass("active")
});

const contenedor1 = document.querySelector('.container');

// Función para cambiar el ancho del contenedor1
function toggleSidebar() {
  contenedor1.classList.toggle('sidebar-contraido');
}

// Evento para detectar el cambio de estado del sidebar (expandido o contraído)
contenedor1.addEventListener('click', toggleSidebar);