let map;

var infoObj = [],

const sligo = {
    lat: 54.2697,
    lng: -8.4694
    },

        //individual markers 
        //I took an idea to create this array in that way from ryanjbm and customise it for my project. I needed customise it much more with tutorial:  https://www.youtube.com/watch?v=Xptz0GQ2DO4&t=356s  Icons are taken form: https://mapicons.mapsmarker.com/

    
var markersArray = [
    { 
        surfing: {
        icon: "./img/surfing.png"
        }
    },

    {
        ruins: {
        icon: "./img/ruins-2.png"
        }
    },
    
    {
        smallcity: {
        icon: "./img/smallcity.png"
        }
    },

    {
        museum: {
        icon: "./img/art-museum-2.png"
        }
    },
    
    {

        palace: {
        icon: "./img/palace-2.png"
        }
    },

    {
        shore: {
        icon: "./img/shore.png"
        }
    },

    {
        restaurant: {
        icon: "./img/restaurant.png"
        }
    }];



// create an array with places in and nearby Sligo

var locations = [

    // Beaches
    //Rosses Point
    {
        LatLng: [{
            lat: 54.306250,
            lng: -8.567500,
        }],
        type: "shore",
        placeName: "Rosses Point",
        information: "#"
    },

    //Strandhill
    {
        LatLng: [{
            lat: 54.306250,
            lng: -8.567500,
        }],
        type: "surfing",
        placeName: "Strandhill",
        information: "#"
    },

    // Town attractions

    //Sligo Town
    {
        LatLng: [{
            lat: 54.2697,
            lng: -8.4694,
        }],
        type: "smallcity",
        placeName: "Sligo",
        information: "#"
    },

    //Sligo Abbey
    {
        LatLng: [{
            lat: 54.27087,
            lng: -8.47002,
        }],
        type: "ruins",
        placeName: "Sligo Abbey",
        information: "#"
    },

    //Yeats Building
    {
        LatLng: [{
            lat: 54.27376,
            lng: -8.47213,
        }],
        type: "museum",
        placeName: "Yeats Building",
        information: "#"
    },

    // Nearby attractions

    //Lisadell House and Gardens 
    {
        LatLng: [{
            lat: 54.34645,
            lng: -8.58279,
        }],
        type: "palace",
        placeName: "Lisadell House and Gardens",
        information: "#"
    },

    //Mullaghmore
    {
        LatLng: [{
            lat: 54.46555,
            lng: -8.45219,
        }],
        type: "restaurant",
        placeName: "Mullaghmore",
        information: "#"
    },
];

//display window with map
window.onload = function() {
    initMap();
};

// Create markers.
function addMarkerInfo() {
    for (var i = 0; i < locations.length; i++) {
        const marker = new google.maps.Marker({
            position: locations[i].LatLng[0],
            icon: icons[markersArray[i].type].icon,
            map: map
        });

        const infowindow = new google.maps.InfoWindow({
            content: contentString,
        });

        marker.addListner("click", function(){
            closeOtherInfo,
            infowindow.open(map.marker),
            infoObj [0] = infowindow
        });
    }

//clear out previous information   
function closeOtherInfo(){
    if (infoObj.length>0){
    infoObj [0].set ("marker", null);
    infoObj [0].close();
    infoObj [0].length = 0;
    }
}

function initMap() {
    map = new google.maps.Map(document.getElementById("map"), {
        center: sligo,
        zoom: 8
    });

    addMarkerInfo();

}
/* call the map*/
myMap()};