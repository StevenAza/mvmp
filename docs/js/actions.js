var myFullpage;
$(document).ready(function () {

    /* inicio MENU PRINCIPAL */
    var menu = "<a href='index.html'><div class='logomenu_txt'>MEMORIAS DEL PERIODISMO</div></a>\
                <ul'>\
                    <li class='serif'><a href='elmuseo.html'>El museo</a></li>\
                    <li class='serif'><a href='exposicion.html'>Exposición</a></li>\
                    <br><span class='subtitle'><i>Periodismo, memorias desde adentro</i></span>\
                    <li><a href='arauca.html'>Arauca. Fronteras de la Censura</a></li>\
                    <li><a href='caqueta.html'>Caquetá. Dando la Vuelta al Olvido</a></li>\
                    <li><a href='cordoba.html'>Córdoba. Noticias a contracorriente</a></li>\
                    <li class='serif'><a href='contacto.html'>Contacto</a></li>\
                </ul>";
    menu_html = $.parseHTML(menu);
    $("#nav-info").append(menu_html);
    $("body").append('<div id="mute"></div>');
    $menuLeft = $('.pushmenu-left');
    $nav_list = $('#nav_list');
    $nav_list.click(function () {
        $(this).toggleClass('active');
        $menuLeft.toggleClass('pushmenu-open');
        $(".buttonset").toggleClass('open');
    });
    /* fin MENU PRINCIPAL */

    /* MUTE */
    var vidgeneral = $('video, audio');
    var pathurl = "../img/";
    $("#mute").click(function () {
        if ($(vidgeneral).prop('muted')) {
            $("#mute").css('background-image', 'url(' + pathurl + 'unmuted.png)');
            for (var i = 0; i < vidgeneral.length; ++i) {
                vidgeneral[i].muted = false;
            }
        } else {
            $("#mute").css('background-image', 'url(' + pathurl + 'muted.png)');
            for (var i = 0; i < vidgeneral.length; ++i) {
                vidgeneral[i].muted = true;
            }
        }
    });

    /* inicio FULLPAGE HISTORIA CENTRAL */
    myFullpage = new fullpage('#fullpage', {
        licenseKey: '4%2M$#W?x0',
        navigation: true,
        navigationPosition: 'right',
        onLeave: function () {
            validavideos();
        }
    });
    $(".cerrar-lateral").click(function () {
        var valorregreso = this.lastElementChild.attributes[1].value;
        cerrarLateral(valorregreso);
        /* if (testLateral == true){   
             
         }*/
    });
    /* fin FULLPAGE HISTORIA CENTRAL */

    /* inicio FULLPAGE HISTORIAS LATERALES */

    /*--------------------------------------------*/
    /* fin FULLPAGE HISTORIAS LATERALES */




    asignateValueButton();

    $('#fullpage-interna-lat_' + positionpage).keydown(function (tecla) {
        if (tecla.keyCode == 39) {
            cerrarLateral(positionpage);
        }
    });

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
var conteoClick = 0;
var imagenfondo;
var objencontrado;
function clicAPage(control) {

    //if (conteoClick == 0) {

    imagenfondo = $('#fullpage .fp-section.fp-table.active.fp-completely .fp-tableCell')[0].children[0].firstElementChild;

    $(imagenfondo).attr('id', 'objfondo');
    //$(imagenfondo).addClass('imgultimaposition');
    $('#fullpage .TextWrapper , #fullpage.introduccion , #fullpage .bt-center, #fullpage .ButtonCta').css('display', 'none');
    var idseccion = $('#fullpage .section').length - 1;
    var objcambiofondo = $('#fullpage .section')[idseccion];
    objencontrado = $(objcambiofondo).find('.ComponentBgContainer .ComponentBg.ComponentBg--cover.ComponentBg--overlay.ComponentBgContainer.lazyloaded');
    objencontrado.hide();
    $(objcambiofondo).append(imagenfondo);

    controlA = control.attributes[2].value;
    var elementoPadre_1 = $('#fullpage-interna-lat_' + controlA);
    var objcontent_1 = elementoPadre_1[0].parentElement;
    $(objcontent_1).addClass('story-open');
    // $(control).toggleClass('active');   
    fullpage_api.destroy('#fullpage');

    myFullpage = new fullpage('#fullpage-interna-lat_' + controlA, {
        licenseKey: '4%2M$#W?x0',
        navigation: true,
        navigationPosition: 'right',
        anchors: ['#fullpage-interna-lat_' + controlA + ''],
        onLeave: function () {
            validavideos();
        }
    });

    setTimeout(function () {
        $('#fullpage-interna-lat_' + controlA).removeClass('hide');
        //validavideos();
        var classActive = $('#fullpage-interna-lat_' + controlA)[0].className;
        /*if ((classActive == 'fullpage-wrapper fp-notransition') || (classActive == 'fullpage-wrapper')) {
            var palyervideo = $('.fp-section.active.fp-completely .ComponentBgContainer.playervideo');
            if ($(palyervideo).length > 0) {
                validavideosplay();
            } else {
                validavideos();
            }

        }*/ 
    }, 2000);
    conteoClick++;
    //}

}

var positionpage;
function ingresoInternas() {
    if (typeof ($('.fp-section.fp-table.active .btn a')) != "undefined") {
        var vinculoboton = $('.fp-section.fp-table.active .btn a');
        imagenfondo = $('#fullpage .fp-section.fp-table.active.fp-completely .fp-tableCell')[0].children[0].firstElementChild;
        $(imagenfondo).attr('id', 'objfondo');
        $('#fullpage .TextWrapper , #fullpage.introduccion , #fullpage .bt-center, #fullpage .ButtonCta').css('display', 'none');

        var idseccion = $('#fullpage .section').length - 1;
        var objcambiofondo = $('#fullpage .section')[idseccion];
        objencontrado = $(objcambiofondo).find('.ComponentBgContainer .ComponentBg.ComponentBg--cover.ComponentBg--overlay.ComponentBgContainer.lazyloaded');
        objencontrado.hide();
        $(objcambiofondo).append(imagenfondo);

        positionpage = $('.fp-section.fp-table.active .btn a')[0].attributes[2].value;
        var elementoPadre = $('#fullpage-interna-lat_' + positionpage);
        var objcontent = elementoPadre[0].parentElement;
        $(objcontent).addClass('story-open');
        fullpage_api.destroy('#fullpage');
        myFullpage = new fullpage('#fullpage-interna-lat_' + positionpage, {
            navigation: true,
            navigationPosition: 'right',
            licenseKey: '4%2M$#W?x0',
            scrollOverflow: true,
            anchors: ['#fullpage-interna-lat_' + positionpage + ''],
            onLeave: function () {
                validavideos();
            }
        });

        setTimeout(function () {
            $('#fullpage-interna-lat_' + positionpage).removeClass('hide');
            validavideos();
            var classActive = $('#fullpage-interna-lat_' + positionpage)[0].className;

            if ((classActive == 'fullpage-wrapper fp-notransition') || (classActive == 'fullpage-wrapper')) {

                var palyervideo = $('.fp-section.active.fp-completely .ComponentBgContainer.playervideo');
                if ($(palyervideo).length > 0) {

                    validavideosplay();
                } else {
                    validavideos();
                }

            }


        }, 2000);
        validavideos();
    }
}

/* inicio CERRAR LATERALES */

function cerrarLateral(e) {
    conteoClick = 0;
    var conteo = e - 1;
    var selector = "section.story.lat_" + e;

    /* reconstruir fullpage principal */
    fullpage_api.destroy('#fullpage-interna-lat_' + e);

    myFullpage = new fullpage('#fullpage', {
        licenseKey: '4%2M$#W?x0',
        navigation: true,
        navigationPosition: 'right',
        anchors: ['#fullpage-interna-lat_' + e + ''],
        onLeave: function () {
            validavideos();
        }
    });

    fullpage_api.silentMoveTo(e);
    $('#fullpage-interna-lat_' + e).addClass('hide');
    $(selector).removeClass('story-open');
    $('#fullpage .TextWrapper , #fullpage.introduccion , #fullpage .bt-center, #fullpage .ButtonCta').css('display', 'inline-flex');

    var objcambiofondo_r = $('#fullpage #section' + conteo);
    //var objencontrado_r = $(objcambiofondo_r).find('.ComponentBgContainer ComponentBg.ComponentBg--cover.ComponentBg--overlay.ComponentBgContainer.lazyloaded');
    var objencontrado_r = objcambiofondo_r[0].firstChild.children[0];
    var textsection = objcambiofondo_r[0].firstChild.children[0].children[0];
    objencontrado.show();
    $('#objfondo').remove();
    //$(objencontrado_r).append(imagenfondo);
    $(imagenfondo).insertBefore(textsection);
    var videoprinciapl = $(objcambiofondo_r).find("video");
    if (videoprinciapl != "undefined") {
        $.each(videoprinciapl, function (key, value) {
            var objv = value;
            if ((value.hasAttribute('data-keepplaying') == true) && (typeof value.pause === 'function')) {
                value.play();
            }
        });
    }

  /* var activeElement = document.activeElement;
    var audiosection = ('#fullpage-interna-lat_' + e);
    var audioactive = $(audiosection).find("audio");    
    $(audioactive).forEach(function(element){
        if( !element.hasAttribute('data-keepplaying') && typeof element.pause === 'function' ) {
            element.pause();
        }
    });*/

   
    //validavideos();
}

function validavideos() {
    var vidgeneral = $('video, audio');
    $.each(vidgeneral, function (key, value) {
        var objv = value;
        if ((value.hasAttribute('data-keepplaying') == true) && (typeof value.pause === 'function')) {
            value.pause();
        }
    });

}

function validavideosplay() {
    var vidgeneralplay = $('.fullpage-wrapper video, .fullpage-wrapper audio');
    $.each(vidgeneralplay, function (key, value) {
        var objv = value;
        if ((value.hasAttribute('data-keepplaying') == true) && (typeof value.pause === 'function')) {
            value.play();
        }
    });
}
/* fin CERRAR LATERALES */

/* inicio NAVEGACIÓN POR TECLADO */

var tecla;
$(document).keydown(function (tecla) {
    if (tecla.keyCode == 39) {

        ingresoInternas();

    }
    if (tecla.keyCode == 37) {

        cerrarLateral(positionpage)

    }

});
/* fin NAVEGACIÓN POR TECLADO */



