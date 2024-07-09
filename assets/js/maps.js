'use strict';

async function initMaps() {
    const gmapsDivs = document.getElementsByClassName("gmap");
    for (const gmapDiv of gmapsDivs) {      
        var optsJson = gmapDiv.getAttribute("data-gmap-opts");
        let opts = JSON.parse(optsJson);

        let actualGmap = L.map(gmapDiv, {
            center: [opts.center.lat, opts.center.lng],
            zoom: opts.zoom,
            //disableDefaultUI: opts.disableDefaultUI
        });

        // duplicating the tile layer seems necessary
        const tileLayer = L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
            attribution: '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>'
        });

        tileLayer.addTo(actualGmap);

        for(const markerOpt of opts.markers) {
            const marker = L.marker([markerOpt.lat, markerOpt.lng]);
            marker.addTo(actualGmap);

            if(markerOpt.infoWindowContent) {
                marker.bindPopup(markerOpt.infoWindowContent);
            }
        }
    }
}

$(document).ready(function() {
    //gmapLoadAndFix("initMaps", "fr");
    initMaps();
});

