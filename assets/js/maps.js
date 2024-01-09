'use strict';

async function initMaps() {
    const { Map } = await google.maps.importLibrary("maps");

    const gmapsDivs = document.getElementsByClassName("gmap");
    
    for (const gmapDiv of gmapsDivs) {            
        var optsJson = gmapDiv.getAttribute("data-gmap-opts");
        let opts = JSON.parse(optsJson);

        //console.log(opts);
        
        let actualGmap = new google.maps.Map(gmapDiv, {
            center: new google.maps.LatLng(opts.center.lat, opts.center.lng),
            zoom: opts.zoom,
            disableDefaultUI: opts.disableDefaultUI
        });

        var infoWindow = new google.maps.InfoWindow({
            content: "message",
            maxWidth: 220
        });

        google.maps.event.addListener(actualGmap, "click", function () { infoWindow.close(); });
        google.maps.event.addListener(actualGmap, "mouseout", function () { infoWindow.close(); });


        let markerBounds = new google.maps.LatLngBounds();
        let markers = [];

        function makeMarker(options) {
            let marker = new google.maps.Marker({map: options.map});
            
            marker.setOptions(options);
            markerBounds.extend(options.position);
            markers.push(marker);

            if (options.infoWindowOpts.content) {
                let infoWindowOpenOpts = {
                    anchor: marker,
                    map: options.map
                };

                google.maps.event.addListener(marker, 
                    "click",
                    function() {
                        infoWindow.setOptions(options.infoWindowOpts);
                        infoWindow.open(infoWindowOpenOpts);
                    });

                google.maps.event.addListener(marker, 
                    "mouseover",
                    function() {
                        infoWindow.setOptions(options.infoWindowOpts);
                        infoWindow.open(infoWindowOpenOpts);
                    });
            }
        }
        
        for(const markerOpt of opts.markers) {
            const markerCenter = new google.maps.LatLng(markerOpt.lat, markerOpt.lng);
            makeMarker({
                position: markerCenter,
                map: actualGmap,
                animation: google.maps.Animation.DROP,
                infoWindowOpts: {
                    //position: markerCenter,
                    content: markerOpt.infoWindowContent
                }
            });
        }
    }
}


$(document).ready(function() {
    gmapLoadAndFix("initMaps", "fr");
});

