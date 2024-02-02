'use strict'

import * as SPA from './spa.js';
// import * as CLASSE from './classe.js';


SPA.showView('home');

for (const link of document.querySelectorAll('.link')) {
    link.addEventListener('click', event => SPA.newLink(event));
}

var map = L.map('mapid').setView([48.8566, 2.3522], 13);
L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    attribution: '&copy; OpenStreetMap contributors'
}).addTo(map);

document.getElementById('geocodeBtn').onclick = function () {
    var address = document.getElementById('addressInput').value;
    fetch(`https://geocode.maps.co/search?q=${encodeURIComponent(address)}`)
        .then(response => response.json())
        .then(data => {
            if (data && data.length > 0) {
                var latLng = [data[0].lat, data[0].lon];
                L.marker(latLng).addTo(map)
                    .bindPopup(address)
                    .openPopup();
                map.setView(latLng, 13);
            }
        });
};