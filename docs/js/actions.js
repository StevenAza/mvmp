var testLateral = false;
$(document).ready(function(){
    /* menu principal */
    var url_rel = 'http://127.0.0.1:8080/';
    /*var url_rel = 'http://memoriasdelperiodismo.co/'; cambiar en paso a producción */
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

    /* funciones plugin fullpage */
    var myFullpage = new fullpage('#fullpage', {
        anchors: ['1', '2', '3', '4', '5', '6', '7', '8', '9', '10'],
        navigation: true,
        navigationPosition: 'right'
    });
    $(".cerrar-lateral").click(function() {
        if (testLateral == true){   
            cerrarLateral('2')
            }
        }); 

});

function cerrarLateral(e) {
    testLateral = false;
    selector = "section.lat_" + e;
    ancla = "#" + e;
    $(selector).toggleClass('story-open');
    fullpage_api.destroy('#fullpage-interna');
    /* funciones plugin fullpage */
    var myFullpage = new fullpage('#fullpage', {
        anchors: ['1', '2', '3', '4', '5', '6', '7', '8', '9', '10'],
        navigation: true,
        navigationPosition: 'right',
        lazyLoading: true,
    });
    window.location = ancla,
    $('#fullpage-interna').toggleClass('hide')
}

$.fn.isOutScreen = function(){
    var win = $(window);
    var viewport = {
        top : win.scrollTop(),
        left : win.scrollLeft()
    };
    viewport.right = viewport.left + win.width();
    viewport.bottom = viewport.top + win.height();
    var bounds = this.offset();
    bounds.right = bounds.left + this.outerWidth();
    bounds.bottom = bounds.top + this.outerHeight();
    return (!(viewport.right < bounds.left || viewport.left > bounds.right || viewport.bottom < bounds.top || viewport.top > bounds.bottom));
};


/* ingrid ¿es posible agregar funcionalidad por teclado en esta estructura?
$(document).keydown(function (tecla) {
	if (tecla.keyCode == 39) {
		ingresoInternas();
	}
	if (tecla.keyCode == 37) {
		clicAPageRegresar();
	}
});
*/