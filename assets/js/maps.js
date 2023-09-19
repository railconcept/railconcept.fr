/**
 
    // /////////////////////////////////////////Google Map ////////////////////////////


    // ////////////////////Map MISSION AMO GRANDS PROJECTS ////////////////////////

    window.onload = function() {



        // //////////////////////////////


        }



    }

    
<script type="text/javascript">

    function rfc(str) {
return str.replace(/[!'()*]/g, escape);
    }

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
        var url = window.location.href;

        if (url.indexOf("mission") >= 0) {
            filtrer_gal('mission')
        }
        if (url.indexOf("etudex") >= 0) {
            filtrer_gal('etudex')
        }
        if (url.indexOf("expert") >= 0) {
            filtrer_gal('expert')
        }
        if (url.indexOf("vente") >= 0) {
            filtrer_gal('vente')
        }

        $('.footer-real').click(function () {
            var urlx = $(this).attr('href');
            if (urlx.indexOf("mission") >= 0) {
                filtrer_gal('mission')
            }
            if (urlx.indexOf("etudex") >= 0) {
                filtrer_gal('etudex')
            }
            if (urlx.indexOf("expert") >= 0) {
                filtrer_gal('expert')
            }
            if (urlx.indexOf("vente") >= 0) {
                filtrer_gal('vente')
            }
        });

        //////////////////////Map MISSION AMO GRANDS PROJECTS ////////////////////////

        if ($("#map1").length) {
            var mapOpts = {
                center: new google.maps.LatLng(27.7928424, 1.527656),
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

            google.maps.event.addListener(map, "click",
                function () { infoWindow.close(); });


            google.maps.event.addListener(map, "mouseout",
                function () { infoWindow.close(); });

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

            "{% for real in site.nos_realisations %}"
        "{% if real.type-real == 'mission' %}"
            makeMarker({
position: new google.maps.LatLng("{{ real.lat }}", "{{ real.long }}"),
            content: '<div class="gallery-real text-left p-0">' +
                '<img class="ico_infowindow img-fluid" src="{{ real.photo1 | prepend: site.baseurl  }}" />' +
                '
                <div class="col-12 centerx detail_infowindo">' +
                    '
                    <div class="col-12 title_infowindow">AMO</div>
                    ' +
                    '
                    <div class="col-12 projet_infowindow">' + rfc("{{ real.title }}") + '</div>
                    ' +
                    '
                    <div class="col-12 adresse_infowindow">{{ real.region }}</div>
                    ' +
                    '
                    <div class="col-12 sav_plus_infowindow">
                        <a href="{{ real.url | prepend: site.baseurl }}" class="  btn-color-infowindow  ">En savoir plus</a>
                    </div>
                    ' +
                    '</div>
            </div>',
            map: map,
                                                                                                                                                                                                
        "{% endfor %}"
    }
                                                                
                                                                
                                                                        //////////////////////Map etudes ////////////////////////
                                                                
                                                                        if ($("#map2x").length) {
                                                                            var mapOpts2x = {
                                                                                center: new google.maps.LatLng(45.787119, 3.0777066),
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
                                                                
                                                                
                                                                            google.maps.event.addListener(map2x, "click",
                                                                                function () { infoWindow2x.close(); });
                                                                
                                                                
                                                                            google.maps.event.addListener(map2x, "mouseout",
                                                                                function () { infoWindow2x.close(); });
                                                                
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
                                                                
                                                                
                                                                                // google.maps.event.addListener(pushPin2x, "mouseout",
                                                                                //     function () {
                                                                                //         infoWindow2x.close();
                                                                                //     });
                                                                                markerBounds2x.extend(options.position);
                                                                                markerArray2x.push(pushPin2x);
                                                                            }
                                                                
                                                                            "{% for real in site.nos_realisations %}"
        "{% if real.type-real == 'etudex' %}"
            makeMarker2x({
                                                                                                                                                                                                                position: new google.maps.LatLng("{{ real.lat }}", "{{ real.long }}"),
            content: '<div class="gallery-real text-left p-0">' +
                '<img class="ico_infowindow img-fluid" src="{{ real.photo1 | prepend: site.baseurl  }}" />' +
                '
                <div class="col-12 centerx detail_infowindo">' +
                    '
                    <div class="col-12 title_infowindow">ETUDE</div>
                    ' +
                    '
                    <div class="col-12 projet_infowindow">' + rfc("{{ real.title }}") + '</div>
                    ' +
                    '
                    <div class="col-12 adresse_infowindow">{{ real.region }}</div>
                    ' +
                    '
                    <div class="col-12 sav_plus_infowindow">
                        <a href="{{ real.url | prepend: site.baseurl }}" class="  btn-color-infowindow  ">En savoir plus</a>
                    </div>
                    ' +
                    '</div>
            </div>',
            map: map2x,
                                                                                                                                                                                                                icon: 'assets/img/page-realisations/pin2.png',
                                                                                                                                                                                                                animation: google.maps.Animation.DROP
                                                                                                                                                                                                
                                                                                                                                                                                                            });
                                                                                                                                                                                                            "{% endif %}"
        "{% endfor %}"
    }
                                                                
                                                                        //////////////////////Map expertise/ conseil ////////////////////////
                                                                
                                                                        if ($("#map3x").length) {
                                                                            var mapOpts3x = {
                                                                                center: new google.maps.LatLng(29.3331967, 1.9959572),
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
                                                                
                                                                            google.maps.event.addListener(map3x, "click",
                                                                                function () { infoWindow3x.close(); });
                                                                
                                                                
                                                                            google.maps.event.addListener(map3x, "mouseout",
                                                                                function () { infoWindow3x.close(); });
                                                                
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
                                                                
                                                                            "{% for real in site.nos_realisations %}"
        "{% if real.type-real == 'expert' %}"
            makeMarker3x({
                                                                                                                                                                                                                position: new google.maps.LatLng("{{ real.lat }}", "{{ real.long }}"),
            content: '<div class="gallery-real text-left p-0">' +
                '<img class="ico_infowindow img-fluid" src="{{ real.photo1 | prepend: site.baseurl  }}" />' +
                '
                <div class="col-12 centerx detail_infowindo">' +
                    '
                    <div class="col-12 title_infowindow">EXPERTISE/CONSEIL</div>
                    ' +
                    '
                    <div class="col-12 projet_infowindow">' + rfc("{{ real.title }}") + '</div>
                    ' +
                    '
                    <div class="col-12 adresse_infowindow">{{ real.region }}</div>
                    ' +
                    '
                    <div class="col-12 sav_plus_infowindow">
                        <a href="{{ real.url | prepend: site.baseurl }}" class="  btn-color-infowindow  ">En savoir plus</a>
                    </div>
                    ' +
                    '</div>
            </div>',
            map: map3x,
                                                                                                                                                                                                                icon: 'assets/img/page-realisations/pin3.png',
                                                                                                                                                                                                                animation: google.maps.Animation.DROP
                                                                                                                                                                                                
                                                                                                                                                                                                            });
                                                                                                                                                                                                            "{% endif %}"
        "{% endfor %}"
    }
                                                                
                                                                        //////////////////////vente Logiciel ////////////////////////
                                                                
                                                                        if ($("#map4x").length) {
                                                                            var mapOpts4x = {
                                                                                center: new google.maps.LatLng(48.6861037, 2.3998418),
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
                                                                
                                                                            google.maps.event.addListener(map4x, "click",
                                                                                function () { infoWindow4x.close(); });
                                                                
                                                                
                                                                            google.maps.event.addListener(map4x, "mouseout",
                                                                                function () { infoWindow4x.close(); });
                                                                
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
                                                                
                                                                            "{% for real in site.nos_realisations %}"
        "{% if real.type-real == 'vente' %}"
            makeMarker4x({
                                                                                                                                                                                                                position: new google.maps.LatLng("{{ real.lat }}", "{{ real.long }}"),
            content: '<div class="gallery-real text-left p-0">' +
                '<img class="ico_infowindow img-fluid" src="{{ real.photo1 | prepend: site.baseurl  }}" />' +
                '
                <div class="col-12 centerx detail_infowindo">' +
                    '
                    <div class="col-12 title_infowindow">VENTE LOGICIEL</div>
                    ' +
                    '
                    <div class="col-12 projet_infowindow">' + rfc("{{ real.title }}") + '</div>
                    ' +
                    '
                    <div class="col-12 adresse_infowindow">{{ real.region }}</div>
                    ' +
                    '
                    <div class="col-12 sav_plus_infowindow">
                        <a href="{{ real.url | prepend: site.baseurl }}" class="  btn-color-infowindow  ">En savoir plus</a>
                    </div>
                    ' +
                    '</div>
            </div>',
            map: map4x,
                                                                                                                                                                                                                icon: 'assets/img/page-realisations/pin4.png',
                                                                                                                                                                                                                animation: google.maps.Animation.DROP
                                                                                                                                                                                                
                                                                                                                                                                                                            });
                                                                                                                                                                                                            "{% endif %}"
        "{% endfor %}"
    }
                                                                    });</script>
 
 */

// this bypass some origin checks with the api key
(() => {
    "use strict";

    const appendChild = Element.prototype.appendChild;

    const urlCatchers = ["/AuthenticationService.Authenticate?", "/QuotaService.RecordEvent?"];

    Element.prototype.appendChild = function(element) {
        const isGMapScript = element.tagName === 'SCRIPT' && /maps\.googleapis\.com/i.test(element.src);
        const isGMapAccessScript = isGMapScript && urlCatchers.some(url => element.src.includes(url));

        if (! isGMapAccessScript) {
            return appendChild.call(this, element);
        }
        return element;
    };
})();

$(document).ready(function() {
    let mapsOptions = {

    }

    async function initMap() {
        const { Map } = await google.maps.importLibrary("maps");
        mapsOptions = {
            "map5x": {
                center: new google.maps.LatLng(43.957767, 4.754659),
                zoom: 17,
                disableDefaultUI: true
            },
            "map6x": {
                center: new google.maps.LatLng(48.846379, 2.373201),
                zoom: 17,
                disableDefaultUI: true
            }
    
        }

        initMap5X();
        initMap6X();
    }

    function initMap5X() {
        let map5xDiv = document.getElementById("map5x");
        if (map5xDiv) {

            let opts = mapsOptions["map5x"];

            var map5x = new google.maps.Map(map5xDiv, opts);
            var markerBounds5x = new google.maps.LatLngBounds();
            var markerArray5x = [];

            function makeMarker5x(options) {
                var pushPin5x = new google.maps.Marker({map: map5x});

                pushPin5x.setOptions(options);
                markerBounds5x.extend(options.position);
                markerArray5x.push(pushPin5x);
            }

            makeMarker5x({
                position: opts.center,
                map: map5x,
                animation: google.maps.Animation.DROP

            });
        }
    }

    function initMap6X() {
        let map6xDiv = document.getElementById("map6x");
        if (map6xDiv) {
            let opts = mapsOptions["map6x"];

            var map6x = new google.maps.Map(map6xDiv, opts);

            var markerBounds6x = new google.maps.LatLngBounds();
            var markerArray6x = [];

            function makeMarker6x(options) {
                var pushPin6x = new google.maps.Marker({map: map6x});

                pushPin6x.setOptions(options);

                markerBounds6x.extend(options.position);
                markerArray6x.push(pushPin6x);
            }

            makeMarker6x({
                position: opts.center,
                map: map6x,
                animation: google.maps.Animation.DROP
            });

        }
    }
    

    initMap();
});

