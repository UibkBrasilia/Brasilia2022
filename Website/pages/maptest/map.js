//Hauptkarte: Brasília

//create bounds, so map keeps focus on Brasília
let bounds = [
    [-17, -50], // Southwest coordinates
    [-14, -46] // Northeast coordinates
]

//create map with options 
const map = L.map('map', {
    fullscreenControl: true,
    fullscreenControlOptions: {
        position: 'topleft'}, //option to viep map on fullscreen
    maxBounds: bounds, //set bounds as maximum extend
    zoomControl: true //option to zoom in and out on map
}).setView([-15.80896, -47.94766], 12);


L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a>, <a href="https://mapicons.mapsmarker.com">Maps Icon Collection<a/>, <a href="https://www.sdgwatch.at/de/wer-wir-sind/mitglieder/">SDG Watch Austria<a/> contributors'
}).addTo(map);


//min Zoom: stops zooming out at one point
map.setMinZoom(map.getBoundsZoom(map.options.maxBounds));


//create overlays for categories with function: on/off
let overlays = {
    Gruppe1: L.markerClusterGroup(),
    Gruppe2: L.markerClusterGroup(),
    Gruppe3: L.markerClusterGroup(),
    Gruppe4: L.markerClusterGroup(),
};

//  add overlays to layers
let layerControl = L.control.layers({}, {
    "<img src='icons/city.png' /> Gruppe 1": overlays.Gruppe1,
    "<img src='icons/health.png' /> Gruppe 2": overlays.Gruppe2,
    "<img src='icons/sozial.png' /> Gruppe3": overlays.Gruppe3,
    "<img src='icons/tree.png' /> Gruppe 4": overlays.Gruppe4
}, {
    position: 'topright',
    collapsed: true,
}).addTo(map);


// display overlays after loading
overlays.Gruppe1.addTo(map);
overlays.Gruppe2.addTo(map);
overlays.Gruppe3.addTo(map);
overlays.Gruppe4.addTo(map);


//create icons
var LeafIcon = L.Icon.extend({
    options: {
        iconSize: [38, 38], // size of the icon
        iconAnchor: [16, 37], // point of the icon which will correspond to marker's location
        popupAnchor: [2, -38] // point from which the popup should open relative to the iconAnchor
    }
});

var Gr1Icon = new LeafIcon({
        iconUrl: 'icons/tree.png'
    }),
    Gr2Icon = new LeafIcon({
        iconUrl: 'icons/sozial.png'
    }),
    Gr3Icon = new LeafIcon({
        iconUrl: 'icons/city.png'
    });
Gr4Icon = new LeafIcon({
    iconUrl: 'icons/health.png'
});


// button to close sidebar
const buttonClose = document.querySelector(".close-button");

let featureGroups = [];
let groupBounds;
let latlngs = [];


//tear data from Gruppe1.js and add to map with marker and popup 
for (let entry of GRUPPE1) {
    let mrk = L.marker([entry.lat, entry.lng], {
        icon: Gr1Icon
    });
    mrk.bindPopup(`<h1>${entry.user}<h1>
        <h3>${entry.intro}</h3>
        <h4>${entry.about}</h4>
        <h4>Adresse: ${entry.Adresse}</h4>
        <h4><i class="far fa-envelope mr-3" style="margin-right: 0.3em"></i><a href=" mailto:${entry.Mail}" target="_blank">${entry.Mail}</a></h4>
        <p><a href="${entry.weblink}" target="_blank"><i class="fas fa-external-link-alt mr-3" style="margin-right: 0.3em"></i> Weiter zur Organisation</a></p>
        `, {
        maxHeight: 310
    }).addTo(overlays.Gruppe1);
}


//tear data from Gruppe1.js and add to map with marker and popup 
for (let entry of GRUPPE2) {
    let mrk = L.marker([entry.lat, entry.lng], {
        icon: Gr1Icon
    });
    mrk.bindPopup(`<h1>${entry.user}<h1>
        <h3>${entry.intro}</h3>
        <h4>${entry.about}</h4>
        <h4>Adresse: ${entry.Adresse}</h4>
        <h4><i class="far fa-envelope mr-3" style="margin-right: 0.3em"></i><a href=" mailto:${entry.Mail}" target="_blank">${entry.Mail}</a></h4>
        <p><a href="${entry.weblink}" target="_blank"><i class="fas fa-external-link-alt mr-3" style="margin-right: 0.3em"></i> Weiter zur Organisation</a></p>
        `, {
        maxHeight: 310
    }).addTo(overlays.Gruppe2);
}


//tear data from Gruppe1.js and add to map with marker and popup 
for (let entry of GRUPPE3) {
    let mrk = L.marker([entry.lat, entry.lng], {
        icon: Gr1Icon
    });
    mrk.bindPopup(`<h1>${entry.user}<h1>
        <h3>${entry.intro}</h3>
        <h4>${entry.about}</h4>
        <h4>Adresse: ${entry.Adresse}</h4>
        <h4><i class="far fa-envelope mr-3" style="margin-right: 0.3em"></i><a href=" mailto:${entry.Mail}" target="_blank">${entry.Mail}</a></h4>
        <p><a href="${entry.weblink}" target="_blank"><i class="fas fa-external-link-alt mr-3" style="margin-right: 0.3em"></i> Weiter zur Organisation</a></p>
        `, {
        maxHeight: 310
    }).addTo(overlays.Gruppe3);
}


//tear data from Gruppe1.js and add to map with marker and popup 
for (let entry of GRUPPE4) {
    let mrk = L.marker([entry.lat, entry.lng], {
        icon: Gr1Icon
    });
    mrk.bindPopup(`<h1>${entry.user}<h1>
        <h3>${entry.intro}</h3>
        <h4>${entry.about}</h4>
        <h4>Adresse: ${entry.Adresse}</h4>
        <h4><i class="far fa-envelope mr-3" style="margin-right: 0.3em"></i><a href=" mailto:${entry.Mail}" target="_blank">${entry.Mail}</a></h4>
        <p><a href="${entry.weblink}" target="_blank"><i class="fas fa-external-link-alt mr-3" style="margin-right: 0.3em"></i> Weiter zur Organisation</a></p>
        `, {
        maxHeight: 310
    }).addTo(overlays.Gruppe4);
}

// Leaflet hash
var hash = new L.Hash(map);

//Add Minimap
var miniMap = new L.Control.MiniMap(
    L.tileLayer.provider("Esri.WorldStreetMap"), {
        toggleDisplay: true,
        minimized: false
    }
).addTo(map);

//Add Scale bar
L.control.scale({
    metric: true,
    imperial: false,
    position: ('bottomleft')
}).addTo(map);


