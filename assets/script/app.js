'use strict';


mapboxgl.accessToken = 'pk.eyJ1IjoiZ3VybGlua2F1ciIsImEiOiJjbHExYjM4cHUwNzE3MnBud25qNDlmc2VjIn0.Jeu9BD0h1vILAwXce8dQqw';


const map = new mapboxgl.Map({
    container: 'map',
    style: 'mapbox://styles/mapbox/streets-v11',
    //center :[0,0],
    center:[-97.1384, 49.8951],   //winnipeg 
    // Default center set to Winnipeg so map is not blank before user clicks "Track"

    zoom: 17,
    pitch: 40
});


const marker = new mapboxgl.Marker({
    color: '#2847cc'
});


const options = {
    enableHighAccuracy: true
};


function getLocation(position) {
    let latitude = position.coords.latitude;
    let longitude = position.coords.longitude;

    console.log(`Latitude: ${latitude} | Longitude: ${longitude}`);

    
    map.setCenter([longitude, latitude]);

    
    marker.setLngLat([longitude, latitude]).addTo(map);
}


function errorHandler() {
    console.log('Unable to retrieve your location.');
}


function startTracking() {
    if ('geolocation' in navigator) {
       
        navigator.geolocation.watchPosition(getLocation, errorHandler, options);
    } else {
        console.log('Geolocation is not supported by your browser.');
    }
}


const trackBtn = document.getElementById('trackBtn');

trackBtn.addEventListener('click', function () {
    startTracking();
});
