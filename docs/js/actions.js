
$(document).ready(function(){

    /* inicio MENU PRINCIPAL */
    var menu =  "<a href='index.html'><div class='logomenu_txt'>MEMORIAS DEL PERIODISMO</div></a>\
                <ul'>\
                    <li class='serif'><a href='elmuseo.html'>Sobre el museo</a></li>\
                    <li class='serif'><a href='exposicion.html'>Exposición</a></li>\
                    <li><a href='arauca.html'>Arauca. Fronteras de la Censura</a></li>\
                    <li><a href='caqueta.html'>Caquetá. Dando la Vuelta al Olvido</a></li>\
                    <li><a href='cordoba.html'>Córdoba. Noticias a contracorriente</a></li>\
                    <li class='serif'><a href='contacto.html'>Contacto</a></li>\
                </ul>";
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
        navigationPosition: 'right',        
        onLeave: function(){
            debugger;
            validavideos();
        }
    });
    $(".cerrar-lateral").click(function() {        
        var valorregreso = this.lastElementChild.attributes[1].value;
        cerrarLateral(valorregreso);
       /* if (testLateral == true){   
            
        }*/
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

var elementoPadre;
var controlA;
function clicAPage(control) {
    debugger; 
    controlA = control.attributes[2].value;  
    elementoPadre = $('#fullpage-interna-lat_'+ controlA);
    var objcontent = elementoPadre[0].parentElement;
    $(objcontent).toggleClass('story-open');        
    $(control).toggleClass('active');   
    setTimeout(function(){
        fullpage_api.destroy('#fullpage');        
        var myFullpage = new fullpage('#fullpage-interna-lat_'+ controlA, {
            navigation: true,
            navigationPosition: 'right',
            onLeave: function(){
                validavideos();
            }
        });
        validavideos();       
        $('#fullpage-interna-lat_'+ controlA).toggleClass('hide');
        window.location = '#1';
        var classActive = $('#fullpage-interna-lat_' + controlA)[0].className;
        debugger;

        if ((classActive == 'fullpage-wrapper fp-notransition') || (classActive =='fullpage-wrapper')) {
            debugger;
            var palyervideo = $('.fp-section.active.fp-completely .ComponentBgContainer.playervideo');
            if ($(palyervideo).length > 0) {
                debugger;
                validavideosplay();
            } else {
                validavideos();
            }

        }
     //validavideos();      
        

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
                onLeave: function(){
                    validavideos();
                }
            });
                    
            $('#fullpage-interna-lat_'+ positionpage).toggleClass('hide');
            window.location = '#1';

          // validavideos();
            
        }, 2000); 
       
       
	}
}

/* inicio CERRAR LATERALES */
var numeroAncla;
function cerrarLateral(e) {
    
    numeroAncla = e;
   
    var selector = "section.lat_" + e;
    console.log(selector);
    ancla = "#" + e;
    $(selector).toggleClass('story-open');
    fullpage_api.destroy('#fullpage-interna-lat_'+e);
    /* reconstruir fullpage principal */
    var myFullpage = new fullpage('#fullpage', {
        navigation: true,
        navigationPosition: 'right',
        onLeave: function(){            
            validavideos();
        }
    });
    window.location = ancla,
    $('#fullpage-interna-lat_'+e).toggleClass('hide');

    //validavideos();
}

function validavideos(){
    var vidgeneral = $('video, audio');
    $.each( vidgeneral, function( key, value ) {
        var objv= value;
        if((value.hasAttribute('data-keepplaying')== true) && ( typeof value.pause === 'function')){
                value.pause();
            }             
      }); 
}

function validavideosplay(){
    var vidgeneralplay = $('.fullpage-wrapper video, .fullpage-wrapper audio');
    $.each( vidgeneralplay, function( key, value ) {
        var objv= value;
        if((value.hasAttribute('data-keepplaying')== true) && ( typeof value.pause === 'function')){
                value.play();
            }             
      }); 
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




