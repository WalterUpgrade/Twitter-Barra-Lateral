$(".menu > ul > li").click(function (e) {
    // ELIMINAR ACTIVO de ya activo
    $(this).siblings().removeClass("active");

    // agregar active al elemento clickeado
    $(this).toggleClass("active");

    // si tiene un sebmenu, abrelo
    $(this).find("ul").slideToggle();

    // cerrar un sub menu si hay otro abierto
    $(this).siblings().find("ul").slideUp();

    // eliminar la clase activa de elementos del submenu
    $(this).siblings().find("ul").find("li").removeClass("active");
  });
  

// funcion para clickear foto de perfil ( cerrar y abrir)
  $(document).ready(function() {
    $('#toggle-sidebar').click(function() {
        $('.sidebar').toggleClass('active');
    });
});

