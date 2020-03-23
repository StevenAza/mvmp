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
        navigation: true,
        navigationPosition: 'right'
    });
    $(".cerrar-lateral").click(function() {        
        var valorregreso = this.lastElementChild.attributes[1].value;
        if (testLateral == true){   
            cerrarLateral(valorregreso);
        }
    }); 
    /* fin FULLPAGE HISTORIA CENTRAL */

    /* inicio FULLPAGE HISTORIAS LATERALES */
    /* Ingrid ¿esto se puede general en un bucle que cuenta las páginas y sus secciones? */
    /*--------------------------------------------*/
    /* fin FULLPAGE HISTORIAS LATERALES */


    

    asignateValueButton();

   
});



function asignateValueButton() {
    
    var buttons = $('.fp-section.fp-table .btn a');
    buttons.attr("data-page", "");
    buttons.attr("ontouchstart", "clicAPage(this)");
    buttons.attr("onclick", "clicAPage(this)"); 

    var regreso = $('.cerrar-lateral .boton');
    regreso.attr("data-regreso", "");
   // regreso.attr("ontouchstart", "cerrarLateral()");
    //regreso.attr("onclick", "cerrarLateral()");
    for (var i = 0; i < buttons.length; i++) {
        buttons[i].attributes[2].value = i + 2;
    }

    for (var i = 0; i < regreso.length; i++) {
        
        regreso[i].attributes[1].value = i + 2;
    }

}
var controlA;
function clicAPage(control) {
    controlA = control.attributes[2].value;  
    var elementoPadre = $('#fullpage-interna-lat_'+ controlA);
    var objcontent = elementoPadre[0].parentElement;
    $(objcontent).toggleClass('story-open');        
    $(control).toggleClass('active');   
    setTimeout(function(){
        fullpage_api.destroy('#fullpage');        
        var myFullpage = new fullpage('#fullpage-interna-lat_'+ controlA, {
            navigation: true,
            navigationPosition: 'right',
            afterRender: function(){
                testLateral = true;
            },
        });
                
        $('#fullpage-interna-lat_'+ controlA).toggleClass('hide');
        window.location = '#1';
    }, 2000); 
	
}

var positionpage;
function ingresoInternas() {
	if (typeof ($('.fp-section.fp-table.active .btn a')) != "undefined") {
       var vinculoboton =  $('.fp-section.fp-table.active .btn a');
        positionpage = $('.fp-section.fp-table.active .btn a')[0].attributes[2].value;
        
		var elementoPadre = $('#fullpage-interna-lat_'+ positionpage);
        var objcontent = elementoPadre[0].parentElement;
        $(objcontent).toggleClass('story-open');        
        $(vinculoboton).toggleClass('active');   
        setTimeout(function(){
            fullpage_api.destroy('#fullpage');        
            var myFullpage = new fullpage('#fullpage-interna-lat_'+ positionpage, {
                navigation: true,
                navigationPosition: 'right',
                afterRender: function(){
                    testLateral = true;
                },
            });
                    
            $('#fullpage-interna-lat_'+ positionpage).toggleClass('hide');
            window.location = '#1';
        }, 2000); 
	}
}

/* inicio CERRAR LATERALES */
var numeroAncla;
function cerrarLateral(e) {
    
    numeroAncla = e;
    var testLateral = false;
    var selector = "section.lat_" + e;
    console.log(selector);
    ancla = "#" + e;
    $(selector).toggleClass('story-open');
    fullpage_api.destroy('#fullpage-interna-lat_'+e);
    /* reconstruir fullpage principal */
    var myFullpage = new fullpage('#fullpage', {
        navigation: true,
        navigationPosition: 'right'
    });
    window.location = ancla,
    $('#fullpage-interna-lat_'+e).toggleClass('hide');
}
/* fin CERRAR LATERALES */

/* inicio NAVEGACIÓN POR TECLADO */
/* Ingrid ¿es posible agregar funcionalidad por teclado en esta estructura? */
$(document).keydown(function (tecla) {    
	if (tecla.keyCode == 39) {
        
        ingresoInternas();
       
	}
	if (tecla.keyCode == 37) {
      
        cerrarLateral(positionpage);
	}
});
/* fin NAVEGACIÓN POR TECLADO */




