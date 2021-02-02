let map;

//initialize my map (Sligo)

const town = { lat:54.2697 , lng:-8.4694 }

function initMap() {
        map = new google.maps.Map(document.getElementById("map"), {
        center: town,
        zoom: 8,
    });

// create an array with places in and nearby Sligo

// https://developers.google.com/maps/documentation/javascript/examples/infowindow-simple#maps_infowindow_simple-javascript

const locations = [
   
    // Beaches
    
    //Rosses Point
    
    {
    lat:54.306250, lng:-8.567500, 
    "name":"Rosses Point", 
    "information":"#"
    },

    //Strandhill
    {
    lat:54.306250,lng:-8.567500, 
    "name": "Strandhill", 
    "information":"#"
    },

    // Town attractions
    
    //Sligo Abbey
    {
    lat:54.27087,lng:-8.47002,
    "name": "Sligo Abbey", 
    "information":"#"
    },

    //Yeats Building
    {
    lat:54.27376,lng:-8.47213, 
    "name": "Yeats Building", 
    "information":"#"
    },

    // Nearby attractions
    
    //Lisadell House and Gardens 
    {
    lat:54.34645,lng:-8.58279, 
    "name": "Lisadell House and Gardens", 
    "information":"#"
    },

    //Mullaghmore
    {
    lat:54.46555,lng:-8.45219, 
    "name": "Mullaghmore", 
    "information":"#"
    },
];

// This event listener calls addMarker() when the map is clicked.

  google.maps.event.addListener(map, "click", (event) => {
    addMarker(event.town, map);
  });
 
}   

// zoom the map  

//https://developers.google.com/maps/documentation/javascript/examples/event-simple#maps_event_simple-javascript

const marker = new google.maps.Marker({
    position: town,
    map,
    title: "Click to zoom",
});


// Create an array of alphabetical characters used to label the markers (markers appear when the user clicks on the map)

//https://developers.google.com/maps/documentation/javascript/examples/marker-labels

const labels = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
let labelIndex = 0;

// Add markers to the map.

const markers = locations.map((location, i) => {
    return new google.maps.Marker({
      position: location,
      label: labels[i % labels.length],
    });
  });
  
// Add a marker clusterer to manage the markers.
//https://developers.google.com/maps/documentation/javascript/marker-clustering
  
  new MarkerClusterer(map, markers, {
    imagePath:
      "https://developers.google.com/maps/documentation/javascript/examples/markerclusterer/m",
  });

// Adds a marker to the map and push to the array.
//https://developers.google.com/maps/documentation/javascript/examples/marker-remove

function addMarker(location) {
  const marker = new google.maps.Marker({
    position: location,
    map: map,
  });
  markers.push(marker);
}

// Sets the map on all markers in the array.

function setMapOnAll(map) {
  for (let i = 0; i < markers.length; i++) {
    markers[i].setMap(map);
  }
}

// Removes the markers from the map, but keeps them in the array.
function clearMarkers() {
  setMapOnAll(null);
}

// Shows any markers currently in the array.
function showMarkers() {
  setMapOnAll(map);
}

// Deletes all markers in the array by removing references to them.
function deleteMarkers() {
  clearMarkers();
  markers = [];
}

