var base_url = window.location.origin;
$initial_height = $small = $bottom = 0;
$initial_height = $("#div-navbar").css("height");
$small = $("#container-navbar").css("padding-top");
$margin_left_container = $("#container-navbar").css("margin-left");
$padding_left_container = $("#container-navbar").css("padding-left");
$left_container = parseInt($margin_left_container) + parseInt($padding_left_container);
$debut = 1;





function findBootstrapEnvironment() {
    let envs = ['xs', 'sm', 'md', 'lg', 'xl'];

    let el = document.createElement('div');
    document.body.appendChild(el);

    let curEnv = envs.shift();

    for (let env of envs.reverse()) {
        el.classList.add(`d-${env}-none`);

        if (window.getComputedStyle(el).display === 'none') {
            curEnv = env;
            break;
        }
    }

    document.body.removeChild(el);
    return curEnv;
}


function show_hide(){
    if (findBootstrapEnvironment() == "xl" || findBootstrapEnvironment() == "lg") {

        

        $('.team-person').show();
        $('.team-person:gt(-12)').hide();

    }

    if (findBootstrapEnvironment() == "md") {
        $('.team-person').show();
        $('.team-person:gt(-15)').hide();


    }
    if (findBootstrapEnvironment() == "sm" || findBootstrapEnvironment() == "xs") {

        $('.team-person').show();
        $('.team-person:gt(-18)').hide();

    }

}


$(window).on('resize', function () {
    $("#div-navbar").css("height", '');
    //  $("#container-navbar").css("padding-top", '');
    $initial_height = $small = $bottom = 0;
    $initial_height = $("#div-navbar").css("height");
    //    $small = $("#container-navbar").css("padding-top");
    $margin_left_container = $("#container-navbar").css("margin-left");
    $padding_left_container = $("#container-navbar").css("padding-left");
    $left_container = parseInt($margin_left_container) + parseInt($padding_left_container);
    $('.slider-news-caption').css('padding-left', $left_container);

    $('#ul-rech-real').css('padding-left', $left_container);

    if (findBootstrapEnvironment() != "xs") {
        $('.slider-caption').css('left', $left_container);
    } else {
        $('.slider-caption').css('left', '0');
    }

    if (findBootstrapEnvironment() == "sm" || findBootstrapEnvironment() == "xs") {
        $("#loope-etude-img").css("width", '50%');
        $('.loope-etude').css('text-align', 'right');
    } else {
        $("#loope-etude-img").css("width", '100%')
    }


    if (findBootstrapEnvironment() == "md" || findBootstrapEnvironment() == "sm" || findBootstrapEnvironment() == "xs") {
        $(".container-fluid-etude").addClass("container");
        $('.etude-container-right').css('padding-right', 0);
        $('.etude-container-left').css('padding-left', 0);
        $('.etude-container-right').css('margin-left', 0);
        $('.etude-container-right').css('margin-top', -60);
        $('.etude-container-left').css('right', 0);
        $('.loope-etude').css('margin-left', 0);
    } else {
        $(".container-fluid-etude").removeClass("container");
        $('.etude-container-right').css('padding-right', $left_container - 50);
        $('.etude-container-left').css('padding-left', $left_container - 50);

    }
    show_hide();

   








});

$(window).scroll(function () {

    if ($(document).scrollTop() > 0) {
        //   $("#div-navbar").css("height", parseInt($initial_height) - parseInt($small) + parseInt($bottom));
        //    $("#container-navbar").css("padding-top", "0px");
        $("#div-navbar").addClass("navshadow");
    } else {
        //     $("#div-navbar").css("height", parseInt($initial_height));
        //     $("#container-navbar").css("padding-top", $small);
        $("#div-navbar").removeClass("navshadow");
    }
    AOS.refresh(); 
});



$(document).ready(function () {

    show_hide();

    $('.first-button').on('click', function () {

        $('.animated-icon2').toggleClass('open');
        
      });
    



    $(".show_hide").click(function (event) {
        event.preventDefault();
        console.log($(this));
        if ($(this).data("show") == "no") {
            $(this).data("show","yes");
            $(this).text("VOIR MOINS");
            $('.team-person').show();




        } else {
            $(this).text("VOIR PLUS");
            $(this).data("show","no");
               $('html, body').animate({
        scrollTop: $("#title_team").offset().top - 100
    }, 1000);
            show_hide();
        }
  
  
    });  
    






    $("#search-link").click(function (event) {
        event.preventDefault();
        if ($('#input-search').css("display") == "block") {
            $('#input-search').css("display", "none");
        } else {
            $('#input-search').css("display", "block");
        }

    });


    $(document).on('click', function (event) {
        if (typeof event != "undefined") {
            if (!$(event.target).hasClass("loope")) {
                if (event.target.id != 'search-link') {
                    if (event.target.id != 'input-search') {
                        $('#input-search').css("display", "none");
                    }
                }
            }
            var menu_opened = $('#navbar-menu').hasClass('show');

            if (!$(event.target).closest('#navbar-menu').length &&
                !$(event.target).is('#navbar-menu') &&
                menu_opened === true) {
                $('#navbar-menu').collapse('toggle');
                $('.animated-icon2').toggleClass('open');
            }



        }
    });

    var pathname = window.location.pathname.split('/')[1];

    if (pathname != '') {
        $("#" + pathname).addClass('selected');
    } else {
        $("#index").addClass('selected');
    }
    console.log(pathname);

    $(".nav-li").click(function () {
        if (!$(this).hasClass("no-underline")) {
            $(".link-navbar").removeClass('selected');

            $(this).children().first().addClass("selected");
        }

    });

    $('#main-slider').carousel({
        interval: 5000
    });

    $('#slider-news').carousel({
        interval: 5000
    });

    $('#slider-clients').carousel({
        interval: 10000
    })


    $('.slider-news-caption').css('padding-left', $left_container);
    if (findBootstrapEnvironment() != "xs") {
        $('.slider-caption').css('left', $left_container);
    } else {
        $('.slider-caption').css('left', '0');
    }


    $('#ul-rech-real').css('padding-left', $left_container);
    $('.etude-container-right').css('padding-right', $left_container - 50);
    $('.etude-container-left').css('padding-left', $left_container - 50);
    $('.clients_carousel .client_item').each(function () {
        var minPerSlide = 2;
        var next = $(this).next();
        if (!next.length) {
            next = $(this).siblings(':first');
        }
        next.children(':first-child').clone().appendTo($(this));

        for (var i = 0; i < minPerSlide; i++) {
            next = next.next();
            if (!next.length) {
                next = $(this).siblings(':first');
            }

            next.children(':first-child').clone().appendTo($(this));
        }
    });


    $('input[type="checkbox"]').click(function () {
        $('input[type="checkbox"]').not(this).prop("checked", false);
        $id_x = $(this).attr('id');
        $id = $id_x.substr($id_x.length - 1);
        $('#' + $id).click();

    });

    filtrer_gal('all');
    filtrer_act('all');
    $('.gallery-act').each(function (i, obj) {
        $tag = '';
        for ($i = 1; $i < 4; $i++) {

            if ($(this).hasClass("tag" + $i)) {


                $tag += "<div class='tag tag_" + ($i) + " col-md-12'>" + tagsss['tag' + $i][0] + "</div>";
            }
        }
        $(this).children(":first").children(":first").prepend("<div class='row tags-row'>" + $tag + "</div>");

    });
    if (findBootstrapEnvironment() == "sm" || findBootstrapEnvironment() == "xs") {
        $("#loope-etude-img").css("width", '50%');
        $('.loope-etude').css('text-align', 'right');
    } else {
        $("#loope-etude-img").css("width", '100%')
    }
    if (findBootstrapEnvironment() == "md" || findBootstrapEnvironment() == "sm" || findBootstrapEnvironment() == "xs") {
        $(".container-fluid-etude").addClass("container");
        $('.etude-container-right').css('padding-right', 0);
        $('.etude-container-left').css('padding-left', 0);
        $('.etude-container-right').css('margin-left', 0);
        $('.etude-container-right').css('margin-top', -60);
        $('.etude-container-left').css('right', 0);

        $('.loope-etude').css('margin-left', 0);



    } else {
        $(".container-fluid-etude").removeClass("container");
        $('.etude-container-right').css('padding-right', $left_container - 50);
        $('.etude-container-left').css('padding-left', $left_container - 50);




    }

    if (pathname == 'realisations' || pathname == 'actualites') {

        $("#all").click();
    }
    $('.carousel').carousel().swipeCarousel({
        // low, medium or high
        sensitivity: 'high'
    });

    AOS.init({
        // Global settings:
        startEvent: 'DOMContentLoaded', // name of the event dispatched on the document, that AOS should initialize on
        initClassName: 'aos-init', // class applied after initialization
        animatedClassName: 'aos-animate', // class applied on animation
        useClassNames: false, // if true, will add content of `data-aos` as classes on scroll
        disableMutationObserver: false, // disables automatic mutations' detections (advanced)
        debounceDelay: 500, // the delay on debounce used while resizing window (advanced)
        throttleDelay: 99, // the delay on throttle used while scrolling the page (advanced)


        // Settings that can be overridden on per-element basis, by `data-aos-*` attributes:
        offset: 0, // offset (in px) from the original trigger point
        delay: 200, // values from 0 to 3000, with step 50ms
        duration: 800, // values from 0 to 3000, with step 50ms
        easing: 'ease', // default easing for AOS animations
        once: true, // whether animation should happen only once - while scrolling down
        mirror: false, // whether elements should animate out while scrolling past them
        anchorPlacement: 'top', // defines which position of the element regarding to window should trigger the animation
        disable: 'mobile'
    });



    ///////////////////////////////////////////Google Map ////////////////////////////

   (() => {
        "use strict";

        const appendChild = Element.prototype.appendChild;

        const urlCatchers = [
            "/AuthenticationService.Authenticate?",
            "/QuotaService.RecordEvent?"
        ];

        Element.prototype.appendChild = function (element) {
            const isGMapScript = element.tagName === 'SCRIPT' && /maps\.googleapis\.com/i.test(element.src);
            const isGMapAccessScript = isGMapScript && urlCatchers.some(url => element.src.includes(url));

            if (!isGMapAccessScript) {
                return appendChild.call(this, element);
            }
            return element;
        };
    })(); 




    //////////////////////Map MISSION AMO GRANDS PROJECTS ////////////////////////

    /********************Google Map***********************/

    window.onload = function () {

        if ($("#map1").length) {
            var mapOpts = {
                center: new google.maps.LatLng(27.7928424,1.527656),
                zoom: 4,
                disableDefaultUI: true,
                styles: [{
                    stylers: [{
                        saturation: -100
                    }]
                }]

            };

            var map = new google.maps.Map(document.getElementById("map1"), mapOpts);


            var infoWindow = new google.maps.InfoWindow({
                content: "message",
                maxWidth: 220
            });
            var markerBounds = new google.maps.LatLngBounds();
            var markerArray = [];





            /* google.maps.event.addListener(map, "click", 
              function () { infoWindow.close(); }); 


             google.maps.event.addListener(map, "mouseout", 
             function () { infoWindow.close(); }); */




            function makeMarker(options) {
                var pushPin = new google.maps.Marker({
                    map: map
                });

                pushPin.setOptions(options);

                google.maps.event.addListener(pushPin, "click",
                    function () {
                        infoWindow.setOptions(options);



                        infoWindow.open(map);
                    });

                google.maps.event.addListener(pushPin, "mouseover",
                    function () {
                        infoWindow.setOptions(options);



                        infoWindow.open(map);
                    });

                markerBounds.extend(options.position);
                markerArray.push(pushPin);


            }



            makeMarker({
                position: new google.maps.LatLng(43.129083, 5.927973),

                content: '<div class="gallery-real text-left p-0">' +
                    '<img class="ico_infowindow img-fluid" src="assets/img/page-realisations/amo/LNPCA.png" />' +
                    ' <div class="col-12 centerx detail_infowindo">' +
                    ' <div class="col-12 title_infowindow">AMO</div> ' +
                    ' <div class="col-12 projet_infowindow">Projet de ligne nouvelle Provence Côte d\’Azur</div> ' +
                    ' <div class="col-12 adresse_infowindow">PROVENCE CÔTE D’AZUR</div> ' +
                    ' <div class="col-12 sav_plus_infowindow"><a href="nos-realisations/mission-1.html" class="  btn-color-infowindow  ">En savoir plus</a></div> ' +
                    '</div></div>',
                map: map,
                icon: 'assets/img/page-realisations/pin.png',
                animation: google.maps.Animation.DROP

            });
            makeMarker({
                position: new google.maps.LatLng(43.698010, 4.149878),
                content: '<div class="gallery-real text-left p-0">' +
                    '<img class="ico_infowindow img-fluid" src="assets/img/page-realisations/amo/Nimes-Montpellier.png" />' +
                    ' <div class="col-12 centerx detail_infowindo">' +
                    ' <div class="col-12 title_infowindow">AMO</div> ' +
                    ' <div class="col-12 projet_infowindow">Mission de maîtrise d\'oeuvre Générale: Maintenance du Contournement Nîmes Montpellier</div> ' +
                    ' <div class="col-12 adresse_infowindow">NÎMES MONTPELLIER</div> ' +
                    ' <div class="col-12 sav_plus_infowindow"><a href="nos-realisations/mission-2.html" class="  btn-color-infowindow  ">En savoir plus</a></div> ' +
                    '</div></div>',
                map: map,
                icon: 'assets/img/page-realisations/pin.png',
                animation: google.maps.Animation.DROP

            });
            makeMarker({
                position: new google.maps.LatLng(46.906120, 4.749562),
                content: '<div class="gallery-real text-left p-0">' +
                    '<img class="ico_infowindow img-fluid" src="assets/img/page-realisations/amo/TER.png" />' +
                    ' <div class="col-12 centerx detail_infowindo">' +
                    ' <div class="col-12 title_infowindow">AMO</div> ' +
                    ' <div class="col-12 projet_infowindow">Mission de maîtrise d\'oeuvre Générale: Temps de parcours TER</div> ' +
                    ' <div class="col-12 adresse_infowindow">BOURGOGNE</div> ' +
                    ' <div class="col-12 sav_plus_infowindow"><a href="nos-realisations/mission-3.html" class="  btn-color-infowindow  ">En savoir plus</a></div> ' +
                    '</div></div>',
                map: map,
                icon: 'assets/img/page-realisations/pin.png',
                animation: google.maps.Animation.DROP

            });

            makeMarker({
                position: new google.maps.LatLng(5.353573, -4.028075),
                content: '<div class="gallery-real text-left p-0">' +
                    '<img class="ico_infowindow img-fluid" src="assets/img/page-realisations/amo/metro_abd.png" />' +
                    ' <div class="col-12 centerx detail_infowindo">' +
                    ' <div class="col-12 title_infowindow">AMO</div> ' +
                    ' <div class="col-12 projet_infowindow">Métro Urbain d’Abidjan Ligne 1 Axe Nord-Sud</div> ' +
                    ' <div class="col-12 adresse_infowindow">ABIDJAN</div> ' +
                    ' <div class="col-12 sav_plus_infowindow"><a href="nos-realisations/mission-4.html" class="  btn-color-infowindow  ">En savoir plus</a></div> ' +
                    '</div></div>',
                map: map,
                icon: 'assets/img/page-realisations/pin.png',
                animation: google.maps.Animation.DROP

            });

            makeMarker({
                position: new google.maps.LatLng(5.371688, -3.990993),
                content: '<div class="gallery-real text-left p-0">' +
                    '<img class="ico_infowindow img-fluid" src="assets/img/page-realisations/amo/metro_abd_2.png" />' +
                    ' <div class="col-12 centerx detail_infowindo">' +
                    ' <div class="col-12 title_infowindow">AMO</div> ' +
                    ' <div class="col-12 projet_infowindow">Métro Urbain d’Abidjan Ligne 1 Axe Nord-Sud</div> ' +
                    ' <div class="col-12 adresse_infowindow">ABIDJAN</div> ' +
                    ' <div class="col-12 sav_plus_infowindow"><a href="nos-realisations/mission-5.html" class="  btn-color-infowindow  ">En savoir plus</a></div> ' +
                    '</div></div>',
                map: map,
                icon: 'assets/img/page-realisations/pin.png',
                animation: google.maps.Animation.DROP

            });




        }


        //////////////////////Map ètudes ////////////////////////



        if ($("#map2x").length) {
            var mapOpts2x = {
                center: new google.maps.LatLng(45.787119,3.0777066),
                zoom: 6,
                disableDefaultUI: true,
                styles: [{
                    stylers: [{
                        saturation: -100
                    }]
                }]

            };

            var map2x = new google.maps.Map(document.getElementById("map2x"), mapOpts2x);


            var infoWindow2x = new google.maps.InfoWindow({
                content: "message",
                maxWidth: 220
            });
            var markerBounds2x = new google.maps.LatLngBounds();
            var markerArray2x = [];





            /* google.maps.event.addListener(map2x, "click", 
              function () { infoWindow2x.close(); }); 
            
            
              google.maps.event.addListener(map2x, "mouseout", 
              function () { infoWindow2x.close(); }); */




            function makeMarker2x(options) {
                var pushPin2x = new google.maps.Marker({
                    map: map2x
                });

                pushPin2x.setOptions(options);

                google.maps.event.addListener(pushPin2x, "click",
                    function () {
                        infoWindow2x.setOptions(options);



                        infoWindow2x.open(map2x);
                    });

                google.maps.event.addListener(pushPin2x, "mouseover",
                    function () {
                        infoWindow2x.setOptions(options);



                        infoWindow2x.open(map2x);
                    });

                markerBounds2x.extend(options.position);
                markerArray2x.push(pushPin2x);


            }



            makeMarker2x({
                position: new google.maps.LatLng( 43.204810, 3.009691),

                content: '<div class="gallery-real text-left p-0">' +
                    '<img class="ico_infowindow img-fluid" src="assets/img/page-realisations/etude/Montpellier-Perpignan.png" />' +
                    ' <div class="col-12 centerx detail_infowindo">' +
                    ' <div class="col-12 title_infowindow">Etude </div> ' +
                    ' <div class="col-12 projet_infowindow">Ligne Nouvelle Montpellier-Perpignan Avant-Projet Sommaire</div> ' +
                    ' <div class="col-12 adresse_infowindow">Montpellier</div> ' +
                    ' <div class="col-12 sav_plus_infowindow"><a href="nos-realisations/etude-1.html" class="  btn-color-infowindow  ">En savoir plus</a></div> ' +
                    '</div></div>',
                map: map2x,
                icon: 'assets/img/page-realisations/pin.png',
                animation: google.maps.Animation.DROP

            });
            
            makeMarker2x({
                position: new google.maps.LatLng( 47.448659, -0.551660),

                content: '<div class="gallery-real text-left p-0">' +
                    '<img class="ico_infowindow img-fluid" src="assets/img/page-realisations/etude/Axe_Nantes_Angers_Sable.png" />' +
                    ' <div class="col-12 centerx detail_infowindo">' +
                    ' <div class="col-12 title_infowindow">Etude </div> ' +
                    ' <div class="col-12 projet_infowindow">Fiabilisation de l’axe Nantes-Angers-Sablé</div> ' +
                    ' <div class="col-12 adresse_infowindow">Nantes-Angers</div> ' +
                    ' <div class="col-12 sav_plus_infowindow"><a href="nos-realisations/etude-2.html" class="  btn-color-infowindow  ">En savoir plus</a></div> ' +
                    '</div></div>',
                map: map2x,
                icon: 'assets/img/page-realisations/pin.png',
                animation: google.maps.Animation.DROP

            });

            makeMarker2x({
                position: new google.maps.LatLng(45.460703, -0.486922),

                content: '<div class="gallery-real text-left p-0">' +
                    '<img class="ico_infowindow img-fluid" src="assets/img/page-realisations/etude/Gare_de_Bordeaux.jpg" />' +
                    ' <div class="col-12 centerx detail_infowindo">' +
                    ' <div class="col-12 title_infowindow">Etude </div> ' +
                    ' <div class="col-12 projet_infowindow">Axe Nantes-Bordeaux Diagnostic et études socio-économiques</div> ' +
                    ' <div class="col-12 adresse_infowindow">Nantes-Bordeaux</div> ' +
                    ' <div class="col-12 sav_plus_infowindow"><a href="nos-realisations/etude-3.html" class="  btn-color-infowindow  ">En savoir plus</a></div> ' +
                    '</div></div>',
                map: map2x,
                icon: 'assets/img/page-realisations/pin.png',
                animation: google.maps.Animation.DROP

            });

            makeMarker2x({
                position: new google.maps.LatLng(45.266327, 5.648278),

                content: '<div class="gallery-real text-left p-0">' +
                    '<img class="ico_infowindow img-fluid" src="assets/img/page-realisations/etude/Tunnel_de_Voreppe.jpg" />' +
                    ' <div class="col-12 centerx detail_infowindo">' +
                    ' <div class="col-12 title_infowindow">Etude </div> ' +
                    ' <div class="col-12 projet_infowindow">Tunnel de Voreppe : Dégagement du Gabarit Haut d’autoroute Ferroviaire</div> ' +
                    ' <div class="col-12 adresse_infowindow">CHAMBERY</div> ' +
                    ' <div class="col-12 sav_plus_infowindow"><a href="nos-realisations/etude-4.html" class="  btn-color-infowindow  ">En savoir plus</a></div> ' +
                    '</div></div>',
                map: map2x,
                icon: 'assets/img/page-realisations/pin.png',
                animation: google.maps.Animation.DROP

            });

            makeMarker2x({
                position: new google.maps.LatLng(42.809058, -0.439495),

                content: '<div class="gallery-real text-left p-0">' +
                    '<img class="ico_infowindow img-fluid" src="assets/img/page-realisations/etude/Nouvel_axe_ferroviaire_transpyreneen.png" />' +
                    ' <div class="col-12 centerx detail_infowindo">' +
                    ' <div class="col-12 title_infowindow">Etude </div> ' +
                    ' <div class="col-12 projet_infowindow">Etude des corridors de tracés possibles pour le nouvel axe ferroviaire à grande capacité transpyrénéen</div> ' +
                    ' <div class="col-12 adresse_infowindow">Espagne - France</div> ' +
                    ' <div class="col-12 sav_plus_infowindow"><a href="nos-realisations/etude-5.html" class="  btn-color-infowindow  ">En savoir plus</a></div> ' +
                    '</div></div>',
                map: map2x,
                icon: 'assets/img/page-realisations/pin.png',
                animation: google.maps.Animation.DROP

            });

            makeMarker2x({
                position: new google.maps.LatLng(46.064035, 6.306631),

                content: '<div class="gallery-real text-left p-0">' +
                    '<img class="ico_infowindow img-fluid" src="assets/img/page-realisations/etude/Haute-Savoie.png" />' +
                    ' <div class="col-12 centerx detail_infowindo">' +
                    ' <div class="col-12 title_infowindow">Etude </div> ' +
                    ' <div class="col-12 projet_infowindow">Etude de robustesse et de valorisation des aménagements</div> ' +
                    ' <div class="col-12 adresse_infowindow">Lyon</div> ' +
                    ' <div class="col-12 sav_plus_infowindow"><a href="nos-realisations/etude-6.html" class="  btn-color-infowindow  ">En savoir plus</a></div> ' +
                    '</div></div>',
                map: map2x,
                icon: 'assets/img/page-realisations/pin.png',
                animation: google.maps.Animation.DROP

            });


            makeMarker2x({
                position: new google.maps.LatLng(47.461576, -0.565522),

                content: '<div class="gallery-real text-left p-0">' +
                    '<img class="ico_infowindow img-fluid" src="assets/img/page-realisations/etude/Gare-Angers.jpg" />' +
                    ' <div class="col-12 centerx detail_infowindo">' +
                    ' <div class="col-12 title_infowindow">Etude </div> ' +
                    ' <div class="col-12 projet_infowindow">Etude d’Exploitation de la gare d’Angers</div> ' +
                    ' <div class="col-12 adresse_infowindow">Angers</div> ' +
                    ' <div class="col-12 sav_plus_infowindow"><a href="nos-realisations/etude-7.html" class="  btn-color-infowindow  ">En savoir plus</a></div> ' +
                    '</div></div>',
                map: map2x,
                icon: 'assets/img/page-realisations/pin.png',
                animation: google.maps.Animation.DROP

            });

            makeMarker2x({
                position: new google.maps.LatLng(43.669548, 4.033310),

                content: '<div class="gallery-real text-left p-0">' +
                    '<img class="ico_infowindow img-fluid" src="assets/img/page-realisations/etude/Raccordement-Saint-Bres.png" />' +
                    ' <div class="col-12 centerx detail_infowindo">' +
                    ' <div class="col-12 title_infowindow">Etude </div> ' +
                    ' <div class="col-12 projet_infowindow">Etude préliminaire du raccordement de Saint Brès inversé Contournement de Nîmes-Montpellier</div> ' +
                    ' <div class="col-12 adresse_infowindow">Nîmes-Montpellier</div> ' +
                    ' <div class="col-12 sav_plus_infowindow"><a href="nos-realisations/etude-8.html" class="  btn-color-infowindow  ">En savoir plus</a></div> ' +
                    '</div></div>',
                map: map2x,
                icon: 'assets/img/page-realisations/pin.png',
                animation: google.maps.Animation.DROP

            });


            makeMarker2x({
                position: new google.maps.LatLng(43.559284, 7.013866),

                content: '<div class="gallery-real text-left p-0">' +
                    '<img class="ico_infowindow img-fluid" src="assets/img/page-realisations/etude/Marseille-Vintimille.png" />' +
                    ' <div class="col-12 centerx detail_infowindo">' +
                    ' <div class="col-12 title_infowindow">Etude </div> ' +
                    ' <div class="col-12 projet_infowindow">Déploiement ERTMS sur le réseau structurant Analyse de Marseille - Vintimille</div> ' +
                    ' <div class="col-12 adresse_infowindow">Marseille - Vintimille</div> ' +
                    ' <div class="col-12 sav_plus_infowindow"><a href="nos-realisations/etude-9.html" class="  btn-color-infowindow  ">En savoir plus</a></div> ' +
                    '</div></div>',
                map: map2x,
                icon: 'assets/img/page-realisations/pin.png',
                animation: google.maps.Animation.DROP

            });

            makeMarker2x({
                position: new google.maps.LatLng(48.580981, 7.606553),

                content: '<div class="gallery-real text-left p-0">' +
                    '<img class="ico_infowindow img-fluid" src="assets/img/page-realisations/etude/Longuyou-Bale.png" />' +
                    ' <div class="col-12 centerx detail_infowindo">' +
                    ' <div class="col-12 title_infowindow">Etude </div> ' +
                    ' <div class="col-12 projet_infowindow">Déploiement ERTMS sur le réseau structurant Analyse socio-économique de l\'équipement en ETCS1 de l\'axe Longuyon-Bâle</div> ' +
                    ' <div class="col-12 adresse_infowindow">Longuyon-Bâle</div> ' +
                    ' <div class="col-12 sav_plus_infowindow"><a href="nos-realisations/etude-10.html" class="  btn-color-infowindow  ">En savoir plus</a></div> ' +
                    '</div></div>',
                map: map2x,
                icon: 'assets/img/page-realisations/pin.png',
                animation: google.maps.Animation.DROP

            });

            makeMarker2x({
                position: new google.maps.LatLng(48.888606, 2.313073),

                content: '<div class="gallery-real text-left p-0">' +
                    '<img class="ico_infowindow img-fluid" src="assets/img/page-realisations/etude/Gare_de_Cardinet.jpg" />' +
                    ' <div class="col-12 centerx detail_infowindo">' +
                    ' <div class="col-12 title_infowindow">Etude </div> ' +
                    ' <div class="col-12 projet_infowindow">Travaux PRO Cardinet</div> ' +
                    ' <div class="col-12 adresse_infowindow">Gare de Pont Cardinet</div> ' +
                    ' <div class="col-12 sav_plus_infowindow"><a href="nos-realisations/etude-11.html" class="  btn-color-infowindow  ">En savoir plus</a></div> ' +
                    '</div></div>',
                map: map2x,
                icon: 'assets/img/page-realisations/pin.png',
                animation: google.maps.Animation.DROP

            });

            makeMarker2x({
                position: new google.maps.LatLng(45.822182, 5.995255),

                content: '<div class="gallery-real text-left p-0">' +
                    '<img class="ico_infowindow img-fluid" src="assets/img/page-realisations/etude/Sillon_Alpin.png" />' +
                    ' <div class="col-12 centerx detail_infowindo">' +
                    ' <div class="col-12 title_infowindow">Etude </div> ' +
                    ' <div class="col-12 projet_infowindow">Sillon Alpin Nord Aix-les-Bains – Annecy : Etudes d’exploitation et de stabilité</div> ' +
                    ' <div class="col-12 adresse_infowindow">Aix-Annecy</div> ' +
                    ' <div class="col-12 sav_plus_infowindow"><a href="nos-realisations/etude-12.html" class="  btn-color-infowindow  ">En savoir plus</a></div> ' +
                    '</div></div>',
                map: map2x,
                icon: 'assets/img/page-realisations/pin.png',
                animation: google.maps.Animation.DROP

            });

            makeMarker2x({
                position: new google.maps.LatLng(43.392523, -1.649692),

                content: '<div class="gallery-real text-left p-0">' +
                    '<img class="ico_infowindow img-fluid" src="assets/img/page-realisations/etude/Bayonne-Saint-Sabastien.png" />' +
                    ' <div class="col-12 centerx detail_infowindo">' +
                    ' <div class="col-12 title_infowindow">Etude </div> ' +
                    ' <div class="col-12 projet_infowindow">Étude des conditions de mise en œuvre d\'un service ferroviaire transfrontalier de voyageurs entre Bayonne  et Saint Sébastien</div> ' +
                    ' <div class="col-12 adresse_infowindow">Bayonne - Saint Sébastien</div> ' +
                    ' <div class="col-12 sav_plus_infowindow"><a href="nos-realisations/etude-13.html" class="  btn-color-infowindow  ">En savoir plus</a></div> ' +
                    '</div></div>',
                map: map2x,
                icon: 'assets/img/page-realisations/pin.png',
                animation: google.maps.Animation.DROP

            });

            makeMarker2x({
                position: new google.maps.LatLng(43.704081, 7.260318),

                content: '<div class="gallery-real text-left p-0">' +
                    '<img class="ico_infowindow img-fluid" src="assets/img/page-realisations/etude/LNPCA.png" />' +
                    ' <div class="col-12 centerx detail_infowindo">' +
                    ' <div class="col-12 title_infowindow">Etude </div> ' +
                    ' <div class="col-12 projet_infowindow">Analyse des trafics et calcul de la capacité contributive du projet de Ligne Nouvelle Provence Cote d’Azur (LN PCA)</div> ' +
                    ' <div class="col-12 adresse_infowindow">Cote d’Azur</div> ' +
                    ' <div class="col-12 sav_plus_infowindow"><a href="nos-realisations/etude-14.html" class="  btn-color-infowindow  ">En savoir plus</a></div> ' +
                    '</div></div>',
                map: map2x,
                icon: 'assets/img/page-realisations/pin.png',
                animation: google.maps.Animation.DROP

            });

            makeMarker2x({
                position: new google.maps.LatLng(44.186355, 0.678983),

                content: '<div class="gallery-real text-left p-0">' +
                    '<img class="ico_infowindow img-fluid" src="assets/img/page-realisations/etude/IPCS-Bordeaux.png" />' +
                    ' <div class="col-12 centerx detail_infowindo">' +
                    ' <div class="col-12 title_infowindow">Etude </div> ' +
                    ' <div class="col-12 projet_infowindow">Etudes d’opportunité des IPCS – Evaluation socio-économique</div> ' +
                    ' <div class="col-12 adresse_infowindow"> Bordeaux</div> ' +
                    ' <div class="col-12 sav_plus_infowindow"><a href="nos-realisations/etude-15.html" class="  btn-color-infowindow  ">En savoir plus</a></div> ' +
                    '</div></div>',
                map: map2x,
                icon: 'assets/img/page-realisations/pin.png',
                animation: google.maps.Animation.DROP

            });

            makeMarker2x({
                position: new google.maps.LatLng(48.827023, 2.399894),

                content: '<div class="gallery-real text-left p-0">' +
                    '<img class="ico_infowindow img-fluid" src="assets/img/page-realisations/etude/Axe_LTV_Paris-Est.png" />' +
                    ' <div class="col-12 centerx detail_infowindo">' +
                    ' <div class="col-12 title_infowindow">Etude </div> ' +
                    ' <div class="col-12 projet_infowindow">Etude d’axe LTV Paris Est – SA 2018</div> ' +
                    ' <div class="col-12 adresse_infowindow">Paris</div> ' +
                    ' <div class="col-12 sav_plus_infowindow"><a href="nos-realisations/etude-16.html" class="  btn-color-infowindow  ">En savoir plus</a></div> ' +
                    '</div></div>',
                map: map2x,
                icon: 'assets/img/page-realisations/pin.png',
                animation: google.maps.Animation.DROP

            });

            makeMarker2x({
                position: new google.maps.LatLng(46.866937, 5.691565),

                content: '<div class="gallery-real text-left p-0">' +
                    ' <img class="ico_infowindow img-fluid" src="assets/img/page-realisations/etude/Ligne-Revermont.png" />' +
                    ' <div class="col-12 centerx detail_infowindo">' +
                    ' <div class="col-12 title_infowindow">Etude </div> ' +
                    ' <div class="col-12 projet_infowindow">Etude horaire de la ligne du Revermont</div> ' +
                    ' <div class="col-12 adresse_infowindow">Bourgogne</div> ' +
                    ' <div class="col-12 sav_plus_infowindow"><a href="nos-realisations/etude-17.html" class="  btn-color-infowindow  ">En savoir plus</a></div> ' +
                    '</div></div>',
                map: map2x,
                icon: 'assets/img/page-realisations/pin.png',
                animation: google.maps.Animation.DROP

            });

            makeMarker2x({
                position: new google.maps.LatLng(45.714122, 4.851933),

                content: '<div class="gallery-real text-left p-0">' +
                    ' <img class="ico_infowindow img-fluid" src="assets/img/page-realisations/etude/Noeud_ferroviaire_lyonnais.png" />' +
                    ' <div class="col-12 centerx detail_infowindo">' +
                    ' <div class="col-12 title_infowindow">Etude </div> ' +
                    ' <div class="col-12 projet_infowindow">Analyse globale des aménagements de robustesse dans l’étoile de Lyon</div> ' +
                    ' <div class="col-12 adresse_infowindow">Lyon</div> ' +
                    ' <div class="col-12 sav_plus_infowindow"><a href="nos-realisations/etude-18.html" class="  btn-color-infowindow  ">En savoir plus</a></div> ' +
                    '</div></div>',
                map: map2x,
                icon: 'assets/img/page-realisations/pin.png',
                animation: google.maps.Animation.DROP

            });

            makeMarker2x({
                position: new google.maps.LatLng(43.660341, 7.187158),

                content: '<div class="gallery-real text-left p-0">' +
                    ' <img class="ico_infowindow img-fluid" src="assets/img/page-realisations/etude/Mandelieu-Ventimille.png" />' +
                    ' <div class="col-12 centerx detail_infowindo">' +
                    ' <div class="col-12 title_infowindow">Etude </div> ' +
                    ' <div class="col-12 projet_infowindow">Amélioration de la performance entre Mandelieu et Vintimille</div> ' +
                    ' <div class="col-12 adresse_infowindow">Mandelieu – Vintimille</div> ' +
                    ' <div class="col-12 sav_plus_infowindow"><a href="nos-realisations/etude-19.html" class="  btn-color-infowindow  ">En savoir plus</a></div> ' +
                    '</div></div>',
                map: map2x,
                icon: 'assets/img/page-realisations/pin.png',
                animation: google.maps.Animation.DROP

            });

            makeMarker2x({
                position: new google.maps.LatLng(44.186060, 0.543761),

                content: '<div class="gallery-real text-left p-0">' +
                    ' <img class="ico_infowindow img-fluid" src="assets/img/page-realisations/etude/Ligne-Bordeaux-Toulouse.png" />' +
                    ' <div class="col-12 centerx detail_infowindo">' +
                    ' <div class="col-12 title_infowindow">Etude </div> ' +
                    ' <div class="col-12 projet_infowindow">GPSO : Impact régularité</div> ' +
                    ' <div class="col-12 adresse_infowindow">Bordeaux-Toulouse</div> ' +
                    ' <div class="col-12 sav_plus_infowindow"><a href="nos-realisations/etude-20.html" class="  btn-color-infowindow  ">En savoir plus</a></div> ' +
                    '</div></div>',
                map: map2x,
                icon: 'assets/img/page-realisations/pin.png',
                animation: google.maps.Animation.DROP

            });

            makeMarker2x({
                position: new google.maps.LatLng(45.665935, 4.853161),

                content: '<div class="gallery-real text-left p-0">' +
                    ' <img class="ico_infowindow img-fluid" src="assets/img/page-realisations/etude/Ligne_St-Fons-Tain_Hermitage.png" />' +
                    ' <div class="col-12 centerx detail_infowindo">' +
                    ' <div class="col-12 title_infowindow">Etude </div> ' +
                    ' <div class="col-12 projet_infowindow">Analyse du block entre St-Fons et Tain-l’Hermitage</div> ' +
                    ' <div class="col-12 adresse_infowindow">St-Fons - Tain-l’Hermitage</div> ' +
                    ' <div class="col-12 sav_plus_infowindow"><a href="nos-realisations/etude-21.html" class="  btn-color-infowindow  ">En savoir plus</a></div> ' +
                    '</div></div>',
                map: map2x,
                icon: 'assets/img/page-realisations/pin.png',
                animation: google.maps.Animation.DROP

            });

        }



        //////////////////////Map expertise/ conseil ////////////////////////



        if ($("#map3x").length) {
            var mapOpts3x = {
                center: new google.maps.LatLng(29.3331967,1.9959572),
                zoom: 4,
                disableDefaultUI: true,
                styles: [{
                    stylers: [{
                        saturation: -100
                    }]
                }]

            };

            var map3x = new google.maps.Map(document.getElementById("map3x"), mapOpts3x);


            var infoWindow3x = new google.maps.InfoWindow({
                content: "message",
                maxWidth: 220
            });
            var markerBounds3x = new google.maps.LatLngBounds();
            var markerArray3x = [];





            /*google.maps.event.addListener(map3x, "click", 
              function () { infoWindow3x.close(); }); 
            
            
              google.maps.event.addListener(map3x, "mouseout", 
              function () { infoWindow3x.close(); }); */




            function makeMarker3x(options) {
                var pushPin3x = new google.maps.Marker({
                    map: map3x
                });

                pushPin3x.setOptions(options);

                google.maps.event.addListener(pushPin3x, "click",
                    function () {
                        infoWindow3x.setOptions(options);



                        infoWindow3x.open(map3x);
                    });

                google.maps.event.addListener(pushPin3x, "mouseover",
                    function () {
                        infoWindow3x.setOptions(options);



                        infoWindow3x.open(map3x);
                    });

                markerBounds3x.extend(options.position);
                markerArray3x.push(pushPin3x);


            }



            makeMarker3x({
                position: new google.maps.LatLng(48.844974, 2.376834),

                content: '<div class="gallery-real text-left p-0">' +
                    '<img class="ico_infowindow img-fluid" src="assets/img/page-realisations/expert/Reseau-ERTMS.jpg" />' +
                    ' <div class="col-12 centerx detail_infowindo">' +
                    ' <div class="col-12 title_infowindow">Expertise/Conseil</div> ' +
                    ' <div class="col-12 projet_infowindow">Déploiement d’ERTMS sur le réseau structurant</div> ' +
                    ' <div class="col-12 adresse_infowindow">Europe</div> ' +
                    ' <div class="col-12 sav_plus_infowindow"><a href="nos-realisations/expert-1.html" class="  btn-color-infowindow  ">En savoir plus</a></div> ' +
                    '</div></div>',
                map: map3x,
                icon: 'assets/img/page-realisations/pin.png',
                animation: google.maps.Animation.DROP

            });
            makeMarker3x({
                position: new google.maps.LatLng(6.479821, -3.931384),
                content: '<div class="gallery-real text-left p-0">' +
                    '<img class="ico_infowindow img-fluid" src="assets/img/page-realisations/expert/BoucleNiger.png" />' +
                    ' <div class="col-12 centerx detail_infowindo">' +
                    ' <div class="col-12 title_infowindow">Expertise/Conseil</div> ' +
                    ' <div class="col-12 projet_infowindow">Assistance technique et économique à la mise en concession de la section Cotonou-Niamey</div> ' +
                    ' <div class="col-12 adresse_infowindow">Cotonou (Bénin)-Niamey (Niger)</div> ' +
                    ' <div class="col-12 sav_plus_infowindow"><a href="nos-realisations/expert-2.html" class="  btn-color-infowindow  ">En savoir plus</a></div> ' +
                    '</div></div>',
                map: map3x,
                icon: 'assets/img/page-realisations/pin.png',
                animation: google.maps.Animation.DROP

            });
            makeMarker3x({
                position: new google.maps.LatLng(47.573972, 1.316354),
                content: '<div class="gallery-real text-left p-0">' +
                    '<img class="ico_infowindow img-fluid" src="assets/img/page-realisations/expert/Vendome-Montoire.jpg" />' +
                    ' <div class="col-12 centerx detail_infowindo">' +
                    ' <div class="col-12 title_infowindow">Expertise/Conseil</div> ' +
                    ' <div class="col-12 projet_infowindow">MISSION D’EXPERTISE SUR LES POSSIBILITES DE MAINTIEN D’UN SERVICE FERROVIAIRE SUR LES LIGNES VENDÔME – BIFURCATION PONT DE BRAYE-MONTOIRE-TRÔO ET BLOIS-VILLEFRANCOEUR</div> ' +
                    ' <div class="col-12 adresse_infowindow">VENDÔME – BIFURCATION</div> ' +
                    ' <div class="col-12 sav_plus_infowindow"><a href="nos-realisations/expert-3.html" class="  btn-color-infowindow  ">En savoir plus</a></div> ' +
                    '</div></div>',
                map: map3x,
                icon: 'assets/img/page-realisations/pin.png',
                animation: google.maps.Animation.DROP

            });

            makeMarker3x({
                position: new google.maps.LatLng(48.076711, -0.758023),
                content: '<div class="gallery-real text-left p-0">' +
                    '<img class="ico_infowindow img-fluid" src="assets/img/page-realisations/expert/LGV_Bretagne_Pay_de_Loire.png" />' +
                    ' <div class="col-12 centerx detail_infowindo">' +
                    ' <div class="col-12 title_infowindow">Expertise/Conseil</div> ' +
                    ' <div class="col-12 projet_infowindow">I&P GP BPL - LGV Bretagne Pays de Loire Inspections préalables des installations et ouvrages d’équipements ferroviaires</div> ' +
                    ' <div class="col-12 adresse_infowindow">Bretagne – pays de la Loire</div> ' +
                    ' <div class="col-12 sav_plus_infowindow"><a href="nos-realisations/expert-4.html" class="  btn-color-infowindow  ">En savoir plus</a></div> ' +
                    '</div></div>',
                map: map3x,
                icon: 'assets/img/page-realisations/pin.png',
                animation: google.maps.Animation.DROP

            });

            makeMarker3x({
                position: new google.maps.LatLng(46.603062, 1.589501),
                content: '<div class="gallery-real text-left p-0">' +
                    '<img class="ico_infowindow img-fluid" src="assets/img/page-realisations/expert/LISEA.png" />' +
                    ' <div class="col-12 centerx detail_infowindo">' +
                    ' <div class="col-12 title_infowindow">Expertise/Conseil</div> ' +
                    ' <div class="col-12 projet_infowindow">Mission d’Assistance à la rédaction de consignes d’exploitation et de maintenance</div> ' +
                    ' <div class="col-12 adresse_infowindow">France</div> ' +
                    ' <div class="col-12 sav_plus_infowindow"><a href="nos-realisations/expert-5.html" class="  btn-color-infowindow  ">En savoir plus</a></div> ' +
                    '</div></div>',
                map: map3x,
                icon: 'assets/img/page-realisations/pin.png',
                animation: google.maps.Animation.DROP

            });

            makeMarker3x({
                position: new google.maps.LatLng(48.978987, 7.023069),
                content: '<div class="gallery-real text-left p-0">' +
                    '<img class="ico_infowindow img-fluid" src="assets/img/page-realisations/expert/Grand_Est.png" />' +
                    ' <div class="col-12 centerx detail_infowindo">' +
                    ' <div class="col-12 title_infowindow">Expertise/Conseil</div> ' +
                    ' <div class="col-12 projet_infowindow">Audit des lignes de la région Grand Est</div> ' +
                    ' <div class="col-12 adresse_infowindow">la région Grand Est</div> ' +
                    ' <div class="col-12 sav_plus_infowindow"><a href="nos-realisations/expert-6.html" class="  btn-color-infowindow  ">En savoir plus</a></div> ' +
                    '</div></div>',
                map: map3x,
                icon: 'assets/img/page-realisations/pin.png',
                animation: google.maps.Animation.DROP

            });

            makeMarker3x({
                position: new google.maps.LatLng(48.898399, 2.297213),
                content: '<div class="gallery-real text-left p-0">' +
                    '<img class="ico_infowindow img-fluid" src="assets/img/page-realisations/expert/Paris_Saint-Lazarre.png" />' +
                    ' <div class="col-12 centerx detail_infowindo">' +
                    ' <div class="col-12 title_infowindow">Expertise/Conseil</div> ' +
                    ' <div class="col-12 projet_infowindow">Scénarisation des plans de transport lors des phases travaux sur le réseau francilien de Paris St-Lazare</div> ' +
                    ' <div class="col-12 adresse_infowindow">Ile de France</div> ' +
                    ' <div class="col-12 sav_plus_infowindow"><a href="nos-realisations/expert-7.html" class="  btn-color-infowindow  ">En savoir plus</a></div> ' +
                    '</div></div>',
                map: map3x,
                icon: 'assets/img/page-realisations/pin.png',
                animation: google.maps.Animation.DROP

            });


        }



        //////////////////////vente Logiciel ////////////////////////



        if ($("#map4x").length) {
            var mapOpts4x = {
                center: new google.maps.LatLng(48.6861037,2.3998418),
                zoom: 6,
                disableDefaultUI: true,
                styles: [{
                    stylers: [{
                        saturation: -100
                    }]
                }]

            };

            var map4x = new google.maps.Map(document.getElementById("map4x"), mapOpts4x);


            var infoWindow4x = new google.maps.InfoWindow({
                content: "message",
                maxWidth: 220
            });
            var markerBounds4x = new google.maps.LatLngBounds();
            var markerArray4x = [];





            /*google.maps.event.addListener(map4x, "click", 
              function () { infoWindow4x.close(); }); 
            
            
              google.maps.event.addListener(map4x, "mouseout", 
              function () { infoWindow4x.close(); }); */




            function makeMarker4x(options) {
                var pushPin4x = new google.maps.Marker({
                    map: map4x
                });

                pushPin4x.setOptions(options);

                google.maps.event.addListener(pushPin4x, "click",
                    function () {
                        infoWindow4x.setOptions(options);



                        infoWindow4x.open(map4x);
                    });

                google.maps.event.addListener(pushPin4x, "mouseover",
                    function () {
                        infoWindow4x.setOptions(options);



                        infoWindow4x.open(map4x);
                    });

                markerBounds4x.extend(options.position);
                markerArray4x.push(pushPin4x);


            }



            makeMarker4x({
                position: new google.maps.LatLng(45.773332, 4.859707),

                content: '<div class="gallery-real text-left p-0">' +
                    '<img class="ico_infowindow img-fluid" src="assets/img/page-realisations/vente/PRI_LYON.png" />' +
                    ' <div class="col-12 centerx detail_infowindo">' +
                    ' <div class="col-12 title_infowindow">Vente Logiciel</div> ' +
                    ' <div class="col-12 projet_infowindow">PRI de Lyon / Cellule Exploitation - Vente d’IngeTime au PRI de Lyon</div> ' +
                    ' <div class="col-12 adresse_infowindow">LYON</div> ' +
                    ' <div class="col-12 sav_plus_infowindow"><a href="nos-realisations/vente-1.html" class="  btn-color-infowindow  ">En savoir plus</a></div> ' +
                    '</div></div>',
                map: map4x,
                icon: 'assets/img/page-realisations/pin.png',
                animation: google.maps.Animation.DROP

            });
            makeMarker4x({
                position: new google.maps.LatLng(50.956680, 1.853523),
                content: '<div class="gallery-real text-left p-0">' +
                    '<img class="ico_infowindow img-fluid" src="assets/img/page-realisations/vente/Eurotunnel.png" />' +
                    ' <div class="col-12 centerx detail_infowindo">' +
                    ' <div class="col-12 title_infowindow">Vente Logiciel</div> ' +
                    ' <div class="col-12 projet_infowindow">Eurotunnel – Vente d’IngeTime à EUROTUNNEL</div> ' +
                    ' <div class="col-12 adresse_infowindow">CALAIS</div> ' +
                    ' <div class="col-12 sav_plus_infowindow"><a href="nos-realisations/vente-2.html" class="  btn-color-infowindow  ">En savoir plus</a></div> ' +
                    '</div></div>',
                map: map4x,
                icon: 'assets/img/page-realisations/pin.png',
                animation: google.maps.Animation.DROP

            });
           


        }






        ////////////////////////////////

        if ($("#map5x").length) {
            var mapOpts5x = {
                center: new google.maps.LatLng(43.957767, 4.754659),
                zoom: 17,
                disableDefaultUI: true,


            };

            var map5x = new google.maps.Map(document.getElementById("map5x"), mapOpts5x);
            var markerBounds5x = new google.maps.LatLngBounds();
            var markerArray5x = [];

            function makeMarker5x(options) {
                var pushPin5x = new google.maps.Marker({
                    map: map5x
                });

                pushPin5x.setOptions(options);


                markerBounds5x.extend(options.position);
                markerArray5x.push(pushPin5x);


            }



            makeMarker5x({
                position: new google.maps.LatLng(43.957767, 4.754659),
                map: map5x,
                animation: google.maps.Animation.DROP

            });

        }


        if ($("#map6x").length) {
            var mapOpts6x = {
                center: new google.maps.LatLng(48.846379, 2.373201),
                zoom: 17,
                disableDefaultUI: true,


            };

            var map6x = new google.maps.Map(document.getElementById("map6x"), mapOpts6x);
            var markerBounds6x = new google.maps.LatLngBounds();
            var markerArray6x = [];

            function makeMarker6x(options) {
                var pushPin6x = new google.maps.Marker({
                    map: map6x
                });

                pushPin6x.setOptions(options);


                markerBounds6x.extend(options.position);
                markerArray6x.push(pushPin6x);


            }



            makeMarker6x({
                position: new google.maps.LatLng(48.846379, 2.373201),
                map: map6x,
                animation: google.maps.Animation.DROP

            });

        }



    }
});

function rech_releaseEvents(el) {
    
    $id = $(el).attr('id');
    console.log($id);
    $('.bg-circle').removeClass('image-active');
    $('#bg-circle-' + $id).addClass("image-active");
    $(".rech-check").prop("checked", false);
    $("#check0" + $id).prop("checked", true);

    $(".tab-pane").removeClass("active show");
    $($(el).attr('href')).addClass("active show");

}


$(document).ready(function () {
	
	 if ($(".zoomx").length) {

            $('.zoomx').magnificPopup({ 
             type: 'image'
             // other options here
             // end each line (except the last) with a comma
          });
        
	 }	
	if ($("#all").length) {
		$("#all").click();
	}
	
	
	
	
	
	
	
	
	
	

    $(".filter-button").click(function () {
        var value = $(this).attr('data-filter');

        if (value == "all") {

            $('.filter').show('1000');
        } else {

            $(".filter").not('.' + value).hide('1000');
            $('.filter').filter('.' + value).show('1000');

        }
    });

    if ($(".filter-button").removeClass("active")) {
        $(this).removeClass("active");
    }
    $(this).addClass("active");





    $("a.partager_link").click(function (event) {
        event.preventDefault();
        $id = $(this).attr('id')
        if ($id == 'copy') {
            var dummy = document.createElement('input'),
                text = window.location.href;
            document.body.appendChild(dummy);
            dummy.value = text;
            dummy.select();
            document.execCommand('copy');
            document.body.removeChild(dummy);


            Swal.fire({
                title: 'Copied',
                type: 'success',
                showConfirmButton: false,
                width: 350,
                timer: 1500
            })

        }

        if ($id == 'facebook') {
            var facebookWindow = window.open('https://www.facebook.com/sharer/sharer.php?u=' + window.location.href, 'facebook-popup', 'height=350,width=600');
            if (facebookWindow.focus) {
                facebookWindow.focus();
            }
            return false;
        }

        if ($id == 'twitter') {
            var twitterWindow = window.open('https://twitter.com/share?url=' + window.location.href, 'twitter-popup', 'height=350,width=600');
            if (twitterWindow.focus) {
                twitterWindow.focus();
            }
            return false;
        }

        if ($id == 'linkedin') {
            var linkedinwindow = window.open('http://www.linkedin.com/shareArticle?mini=true&url=' + window.location.href, 'sharer', 'toolbar=0, status=0, width=600, height=350');
            if (linkedinwindow.focus) {
                linkedinwindow.focus();
            }
            return false;

        }
    });


    $(".offre-tabs-link").click(function () {

        $(".position-icon-plus").html(" <i class='fas fa-plus-circle'></i>");

        $(this).find(".position-icon-plus").html("<i class='fas fa-minus-circle'></i>");



    });





});


function paginate($cls) {

    $("#paginate_real").off('click');
    var target = $("#gallerie-real");
    $n = '';
    $clsx = '';
    $n = $('.' + $cls).length;
    $('#paging-real').Pagination({
        size: $n,
        pageShow: 5,
        page: 1,
        limit: 6,
    }, function (obj) {
        $('.gallery-real').filter(':not([data-pagex="' + obj.page + '"])').css('display', 'none');
        $('.gallery-real').filter('[data-pagex="' + obj.page + '"]').css('display', 'block');
        $('html,body').stop(true, false).animate({
            scrollTop: eval(target.offset().top - 100)
        }, 1000);
    });

}


function filtrer_gal($class) {
    $(".filter-button").removeClass("btn-active");
    $("#" + $class).addClass("btn-active");
    $nbre_per_page = 6;


    $('.gallery-real').each(function (i, obj) {
        $(this).attr('data-pagex', 'X');
    });
    $('.gallery-real').css('display', 'block');

    if ($class == 'all') {
        $('.gallery-real').each(function (i, obj) {
            $(this).attr('data-pagex', Math.ceil((i + 1) / $nbre_per_page));
        });
        paginate('gallery-real');

    } else {
        $('.gallery-real:not(.' + $class + ')').css('display', 'none');
        $('.' + $class).each(function (i, obj) {
            $(this).attr('data-pagex', Math.ceil((i + 1) / $nbre_per_page));
        });
        paginate($class);
    }
    $('.gallery-real').filter(':not([data-pagex=1])').css('display', 'none');

}

function filtrer_act($class) {
    $(".filter-button").removeClass("btn-active");
    $("#" + $class).addClass("btn-active");
    $nbre_per_page = 6;


    $('.gallery-act').each(function (i, obj) {
        $(this).attr('data-pagex', 'X');
    });
    $('.gallery-act').css('display', 'block');

    if ($class == 'all') {
        $('.gallery-act').each(function (i, obj) {
            $(this).attr('data-pagex', Math.ceil((i + 1) / $nbre_per_page));
        });
        paginate_actualite('gallery-act');

    } else {
        $('.gallery-real:not(.' + $class + ')').css('display', 'none');
        $('.' + $class).each(function (i, obj) {
            $(this).attr('data-pagex', Math.ceil((i + 1) / $nbre_per_page));
        });
        paginate_actualite($class);
    }
    $('.gallery-act').filter(':not([data-pagex=1])').css('display', 'none');

}

function paginate_actualite($cls) {
    $("#paginate_real").off('click');
    var target = $("#gallerie-actualite");
    $n = '';
    $n = $('.' + $cls).length;

    $('#paging-real').Pagination({
        size: $n,
        pageShow: 5,
        page: 1,
        limit: 6,
    }, function (obj) {
        $('.gallery-act').filter(':not([data-pagex="' + obj.page + '"])').css('display', 'none');
        $('.gallery-act').filter('[data-pagex="' + obj.page + '"]').css('display', 'block');
        $('html,body').stop(true, false).animate({
            scrollTop: eval(target.offset().top - 100)
        }, 1000);
    });

}

$(document).ready(function () {

    $('#input_cv').change(function () {
        var a = $('#input_cv').val().toString().split('\\');

        if (a.length == 1) {
            $('#fake_input_cv').text('Parcourir');
            $("#label_input_cv").css("opacity", 0.65);

        } else {
            $('#fake_input_cv').text(a[a.length - 1]);
            $("#label_input_cv").css("opacity", 1);
        }

    });
    $('#input_lm').change(function () {
        var a = $('#input_lm').val().toString().split('\\');

        if (a.length == 1) {
            $('#fake_input_lm').text('Parcourir');
            $("#label_input_lm").css("opacity", 0.65);
        } else {
            $('#fake_input_lm').text(a[a.length - 1]);
            $("#label_input_lm").css("opacity", 1);
        }
    });
    $('#input_ad').change(function () {
        var a = $('#input_ad').val().toString().split('\\');

        if (a.length == 1) {
            $('#fake_input_ad').text('Parcourir');
            $("#label_input_ad").css("opacity", 0.65);
        } else {
            $('#fake_input_ad').text(a[a.length - 1]);
            $("#label_input_ad").css("opacity", 1);
        }
    });

    $(document).on('input', '.d_pers', function () {
        $a = $(this).val();

        if ($a == '') {
            $(this).css("opacity", 0.65);
        } else {
            $(this).css("opacity", 1);
        }
    });




    $(".select_offre").first().trigger("click");

    $('#input-search').on('keypress', function (e) {
        if (e.which === 13) {

            if ($(this).val().length > 0) {
                window.location.replace(base_url + "/search?query=" + $(this).val());
            }


        }
    });

    var current_url = window.location.href;
    if (current_url.indexOf('#') > -1) {
        $id_tab = current_url.substr(current_url.indexOf("#") + 1)
        $('a[href="#' + $id_tab + '"]').trigger('click');

    }


    $(".tagx").each(function (i, obj) {
        $tag = "";
        $tag = $(this).html();
        $(this).html(tagsss[$tag][0]);
    });

});

function get_offre($url, $that, e) {
console.log($url);
    $(".select_offre").removeClass("active");
    $($that).addClass("active");
    $debut = 0;
    $.ajax({
        url: $url,
        type: "GET",
        dataType: "html",
        success: function (data) {
            var x = document.createElement('div');


            x.innerHTML = data;
            $("#poste_selected").html("<b>" + x.querySelector('#title').innerHTML + " - " + x.querySelector('#departement').innerHTML + "</b>");
            $("#poste_contrat").html(x.querySelector('#type_contract').innerHTML + " - " + x.querySelector('#lieu_travail').innerHTML);

            $("#entreprise").html(x.querySelector('#entreprise').innerHTML);
            $("#poste").html(x.querySelector('#poste').innerHTML);
            $("#profil").html(x.querySelector('#profil').innerHTML);
            $("#selected_job").val(x.querySelector('#title').innerHTML + " - " + x.querySelector('#offre_date').innerHTML);


        },
        error: function (xhr, status) {
            alert("Sorry, there was a problem!");
        },
        complete: function (xhr, status) {

            if (e.isTrigger) {
                console.log('not a human');
            } else {
                goToByScroll('offre_selectionne');
            }


        }
    });


}

function redirect_to($link) {
    window.location.replace(base_url + $link);

}

function goToByScroll(id) {
    // Remove "link" from the ID
    id = id.replace("link", "");
    // Scroll
    $('html,body').animate({
        scrollTop: $("#" + id).offset().top
    }, 'slow');
}