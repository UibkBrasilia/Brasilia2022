//Hauptkarte: Brasília

//create bounds, so map keeps focus on Brasília
let bounds = [
    [-17, -50], // Southwest coordinates
    [-14, -46] // Northeast coordinates
]


// magnification with which the map will start
const zoom = 12;
// co-ordinates
const lat = -15.80896;
const lng = -47.94766;


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
    Gruppe5: L.markerClusterGroup(),
    Gruppe6: L.markerClusterGroup(),
};

//  add overlays to layers
let layerControl = L.control.layers({}, {
    "<img src='icons/group1icon.png' height=\'20px\' width=\'20px\'/> Gruppe 1": overlays.Gruppe1,
    "<img src='icons/group2icon.png' height=\'20px\' width=\'20px\'/> Gruppe 2": overlays.Gruppe2,
    "<img src='icons/group3icon.png' height=\'20px\' width=\'20px\'/> Gruppe 3": overlays.Gruppe3,
    "<img src='icons/group4icon.png' height=\'20px\' width=\'20px\'/> Gruppe 4": overlays.Gruppe4,
    "<img src='icons/group5icon.png' height=\'20px\' width=\'20px\'/> Gruppe 5": overlays.Gruppe5,
    "<img src='icons/group6icon.png' height=\'20px\' width=\'20px\'/> Gruppe 6": overlays.Gruppe6,
}, {
    position: 'topright',
    collapsed: true,
    maxHeight:38,
}).addTo(map);


// display overlays after loading
overlays.Gruppe1.addTo(map);
overlays.Gruppe2.addTo(map);
overlays.Gruppe3.addTo(map);
overlays.Gruppe4.addTo(map);
overlays.Gruppe5.addTo(map);
overlays.Gruppe6.addTo(map);


//create icons
var LeafIcon = L.Icon.extend({
    options: {
        iconSize: [35, 35], // size of the icon
        iconAnchor: [16, 37], // point of the icon which will correspond to marker's location
        popupAnchor: [2, -38] // point from which the popup should open relative to the iconAnchor
    }
});

var Gr1Icon = new LeafIcon({
        iconUrl: 'icons/group1icon.png'
    });
    Gr2Icon = new LeafIcon({
        iconUrl: 'icons/group2icon.png'
    });
    Gr3Icon = new LeafIcon({
        iconUrl: 'icons/group3icon.png'
    });
    Gr4Icon = new LeafIcon({
        iconUrl: 'icons/group4icon.png'
    });
    Gr5Icon = new LeafIcon({
        iconUrl: 'icons/group5icon.png'
    });
    Gr6Icon = new LeafIcon({
        iconUrl: 'icons/group6icon.png'
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
        <h4>${entry.image}</h4>
        <h4>${entry.about}</h4>
        <h4>Adresse: ${entry.Adresse}</h4>
        <p><a href="${entry.weblink}" target="_blank"><i class="fas fa-external-link-alt mr-3" style="margin-right: 0.3em"></i> Weiter zur Organisation</a></p>
        `, {
        maxHeight: 310,
        minWidth: 250,
        className: 'popupstyle',
    }).addTo(overlays.Gruppe1);
}


//tear data from Gruppe2.js and add to map with marker and popup 
for (let entry of GRUPPE2) {
    let mrk = L.marker([entry.lat, entry.lng], {
        icon: Gr2Icon
    });
    mrk.bindPopup(`<h1>${entry.user}<h1>
        <h3>${entry.intro}</h3>
        <h4>${entry.about}</h4>
        <h4>${entry.image}</h4>
        <h4>Adresse: ${entry.Adresse}</h4>
        <p><a href="${entry.weblink}" target="_blank"><i class="fas fa-external-link-alt mr-3" style="margin-right: 0.3em"></i> Weiter zur Organisation</a></p>
        `, {
        maxHeight: 310,
        minWidth: 250,
    }).addTo(overlays.Gruppe2);
}


//tear data from Gruppe3.js and add to map with marker and popup 
for (let entry of GRUPPE3) {
    let mrk = L.marker([entry.lat, entry.lng], {
        icon: Gr3Icon
    });
    mrk.bindPopup(`<h1>${entry.user}<h1>
        <h3>${entry.intro}</h3>
        <h4>${entry.about}</h4>
        <h4>Adresse: ${entry.Adresse}</h4>
        <h4>${entry.image}</h4>
        <h4><i class="far fa-envelope mr-3" style="margin-right: 0.3em"></i><a href=" mailto:${entry.Mail}" target="_blank">${entry.Mail}</a></h4>
        <p><a href="${entry.weblink}" target="_blank"><i class="fas fa-external-link-alt mr-3" style="margin-right: 0.3em"></i> Weiter zur Organisation</a></p>
        `, {
        maxHeight: 310,
        minWidth: 250,
    }).addTo(overlays.Gruppe3);
}


//tear data from Gruppe4.js and add to map with marker and popup 
for (let entry of GRUPPE4) {
    let mrk = L.marker([entry.lat, entry.lng], {
        icon: Gr4Icon
    });
    mrk.bindPopup(`<h1>${entry.user}<h1>
        <h3>${entry.intro}</h3>
        <h4>${entry.about}</h4>
        <h4>${entry.image}</h4>
        <h4>Adresse: ${entry.Adresse}</h4>
        <p><a href="${entry.weblink}" target="_blank"><i class="fas fa-external-link-alt mr-3" style="margin-right: 0.3em"></i> Weiter zur Organisation</a></p>
        `, {
        maxHeight: 310
    }).addTo(overlays.Gruppe4);
}

//tear data from Gruppe5.js and add to map with marker and popup 
for (let entry of GRUPPE5) {
    let mrk = L.marker([entry.lat, entry.lng], {
        icon: Gr5Icon
    });
    mrk.bindPopup(`<h1>${entry.user}<h1>
        <h3>${entry.intro}</h3>
        <h4>${entry.about}</h4>
        <h4>${entry.image}</h4>
        <h4>Adresse: ${entry.Adresse}</h4>
        <p><a href="${entry.weblink}" target="_blank"><i class="fas fa-external-link-alt mr-3" style="margin-right: 0.3em"></i> Weiter zur Organisation</a></p>
        `, {
        maxHeight: 310
    }).addTo(overlays.Gruppe5);
}

//tear data from Gruppe6.js and add to map with marker and popup 
for (let entry of GRUPPE6) {
    let mrk = L.marker([entry.lat, entry.lng], {
        icon: Gr6Icon
    });
    mrk.bindPopup(`<h1>${entry.user}<h1>
        <h3>${entry.intro}</h3>
        <h4>${entry.about}</h4>
        <h4>${entry.image}</h4>
        <h4>Adresse: ${entry.Adresse}</h4>
        <p><a href="${entry.weblink}" target="_blank"><i class="fas fa-external-link-alt mr-3" style="margin-right: 0.3em"></i> Weiter zur Organisation</a></p>
        `, {
        maxHeight: 310
    }).addTo(overlays.Gruppe6);
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


const htmlTemplate =
  '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32"><path d="M32 18.451L16 6.031 0 18.451v-5.064L16 .967l16 12.42zM28 18v12h-8v-8h-8v8H4V18l12-9z" /></svg>';


// create custom button
const customControl = L.Control.extend({
    // button position
    options: {
      position: "topleft",
    },
  
    // method
    onAdd: function (map) {
      console.log(map.getCenter());
      // create button
      const btn = L.DomUtil.create("button");
      btn.title = "back to home";
      btn.innerHTML = htmlTemplate;
      btn.className += "leaflet-bar back-to-home hidden";
  
      return btn;
    },
  });
  
  // adding new button to map controll
  map.addControl(new customControl());
  
  // on drag end
  map.on("moveend", getCenterOfMap);
  
  const buttonBackToHome = document.querySelector(".back-to-home");
  
  function getCenterOfMap() {
    buttonBackToHome.classList.remove("hidden");
  
    buttonBackToHome.addEventListener("click", () => {
      map.flyTo([lat, lng], zoom);
    });
  
    map.on("moveend", () => {
      const { lat: latCenter, lng: lngCenter } = map.getCenter();
  
      const latC = latCenter.toFixed(3) * 1;
      const lngC = lngCenter.toFixed(3) * 1;
  
      const defaultCoordinate = [+lat.toFixed(3), +lng.toFixed(3)];
  
      const centerCoordinate = [latC, lngC];
  
      if (compareToArrays(centerCoordinate, defaultCoordinate)) {
        buttonBackToHome.classList.add("hidden");
      }
    });
  }
  
  const compareToArrays = (a, b) => JSON.stringify(a) === JSON.stringify(b);
