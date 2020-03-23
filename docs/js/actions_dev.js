$(document).ready(function(){
    /* inicio MENU PRINCIPAL */
    var menu =  "<a href='index.html'><div class='logomenu_txt'>MEMORIAS DEL PERIODISMO</div>\
                <span><a href='arauca.html'>Arauca. Fronteras de la Censura</a></span>\
                <span><a href='caqueta.html'>Caquetá. Dando la Vuelta al Olvido</a></span>\
                <span><a href='cordoba.html'>Córdoba. Noticias a contracorriente</a></span>";
    menu_html = $.parseHTML(menu);
    $("#nav-info").append(menu_html);
    $menuLeft = $('.pushmenu-left');
    $nav_list = $('#nav_list');		
    $nav_list.click(function() {
        $(this).toggleClass('active');
        $menuLeft.toggleClass('pushmenu-open');
        $(".buttonset").toggleClass('open');
    });
    /* fin MENU PRINCIPAL */
});