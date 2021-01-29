//initialize my map (Sligo)

function initMap() {
        map = new google.maps.Map(document.getElementById("map"), {
        center: { lat:54.2697 , lng:-8.4694 },
        zoom: 8,
    });
} 
// Create an array of alphabetical characters used to label the markers.

const labels = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";

// create an array with places in and nearby Sligo

const locations = [
    {lat:54.306250, lng:-8.567500, "name":"Rosses Point", "information":"#"},
    {lat:54.306250,lng:-8.567500, "name": "Strandhill", "information":"#"},
    {lat:54.27087,lng:-8.47002, "name": "Sligo Abbey", "information":"#"},
    {lat:54.27376,lng:-8.47213, "name": "Yeats Building", "information":"#"},
    {lat:54.34645,lng:-8.58279, "name": "Lisadell House and Gardens", "information":"#"},
    {lat:54.46555,lng:-8.45219, "name": "Mullaghmore", "information":"#"},
];

// Add some markers to the map.

const markers = locations.map((location, i) => {
    return new google.maps.Marker({
      position: location,
      label: labels[i % labels.length],
    });
  });
  
  // Add a marker clusterer to manage the markers.
  
  new MarkerClusterer(map, markers, {
    imagePath:
      "https://developers.google.com/maps/documentation/javascript/examples/markerclusterer/m",
  });

