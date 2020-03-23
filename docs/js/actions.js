var testLateral = false;
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

    /* inicio FULLPAGE HISTORIA CENTRAL */
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
    /* fin FULLPAGE HISTORIA CENTRAL */

    /* inicio FULLPAGE HISTORIAS LATERALES */
    /* Ingrid ¿esto se puede general en un bucle que cuenta las páginas y sus secciones? */
    $storyRight2 = $('.story.lat_2');
    $boton2 = $('#btn_2');		
    $boton2.click(function() {
        $(this).toggleClass('active');
        $storyRight2.toggleClass('story-open');
        setTimeout(function(){
            fullpage_api.destroy('#fullpage');
            /* funciones plugin fullpage-interna */
            var myFullpage = new fullpage('#fullpage-interna', {
                anchors: ['1', '2', '3', '4', '5', '6', '7', '8', '9', '10'],
                navigation: true,
                navigationPosition: 'right',
                afterRender: function(){
                    testLateral = true;
                },
            });
            $('#fullpage-interna').toggleClass('hide');
            window.location = '#1';
        }, 2000); 
    });
    /* fin FULLPAGE HISTORIAS LATERALES */

});



/* inicio CERRAR LATERALES */
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
/* fin CERRAR LATERALES */

/* inicio NAVEGACIÓN POR TECLADO */
/* Ingrid ¿es posible agregar funcionalidad por teclado en esta estructura? */
$(document).keydown(function (tecla) {
	if (tecla.keyCode == 39) {
		ingresoInternas();
	}
	if (tecla.keyCode == 37) {
		clicAPageRegresar();
	}
});
/* fin NAVEGACIÓN POR TECLADO */