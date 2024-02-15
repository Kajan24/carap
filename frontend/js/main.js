'use strict';

import * as BRAND from './brand.js';

var map = L.map('map').setView([46.200745, 6.148224], 10);
L.tileLayer('https://{s}.basemaps.cartocdn.com/rastertiles/voyager/{z}/{x}/{y}{r}.png', {
    maxZoom: 19,
}).addTo(map);

BRAND.readAll().then(result => {
    let brands = JSON.parse(result);
    let html = "";
    for (const brand of brands) {
        let marker = L.marker([brand.longitude, brand.latitude]).addTo(map);

        marker.bindPopup(`<b>${brand.name}</b><br>Depuis: ${brand.since} <br> Groupe: ${brand.group}`);


        marker.on('click', () => {
            map.setView([brand.longitude, brand.latitude], 18);
        });


        marker.on('mouseover', () => {
            marker.openPopup();
        });


        marker.on('mouseout', () => {
            marker.closePopup();
        });


        html += `<li>${brand.name}</li>`
    }
    document.getElementById("allBrands").innerHTML = html;

    document.getElementById("searchForm").addEventListener("submit", (event) => {
        event.preventDefault(); 
        searchBrand(brands);
    });
});

function searchBrand(brands) {
    let brandName = document.getElementById('searchInput').value.trim().toLowerCase();

    for (const brand of brands) {
        if (brand.name.toLowerCase() === brandName) {
            map.setView([brand.longitude, brand.latitude], 18);
            return;
        }
    }
    alert("Marque non trouvée !");
}







