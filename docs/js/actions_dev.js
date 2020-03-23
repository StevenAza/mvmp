$(document).ready(function(){
    /* inicio MENU PRINCIPAL */
    var url_rel = 'http://127.0.0.1:8080/'; /*cambiar según ambiente donde se este desplegando */
    var menu =  "<a href='"+ url_rel +"'><div class='logomenu_txt'>MEMORIAS DEL PERIODISMO</div><span><a href='"+url_rel+"arauca/'>Arauca. Fronteras de la Censura</a></span><span><a href='"+url_rel+"caqueta.html'>Caquetá. Dando la Vuelta al Olvido</a></span><span><a href='"+url_rel+"cordoba/'>Córdoba. Noticias a contracorriente</a></span>";
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