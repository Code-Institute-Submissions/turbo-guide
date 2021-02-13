let map;

const sligo = {
    lat: 54.2697,
    lng: -8.4694
};

function initMap() {

    map = new google.maps.Map(document.getElementById("map"), {
        center: sligo,
        zoom: 8
    });