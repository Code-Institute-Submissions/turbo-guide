// Initialize and add the map

function initMap() {
    // The location of Sligo
    const townSligo = {
        lat: 54.2697,
        lng: -8.4694
    };

    // The map, centered at Sligo
    const map = new google.maps.Map(document.getElementById("map"), {
        zoom: 11,
        center: townSligo,
        icon: {
            url: "http://maps.google.com/mapfiles/ms/icons/blue-dot.png"
        }

    });

    // The marker, positioned at Sligo
    const marker = new google.maps.Marker({
        position: townSligo,
        map: map,
    });

    // Create an array of alphabetical characters used to label the markers.
    const labels = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";

    // Add some markers to the map, but it does't use the Google Maps API.


    const markers = locations.map((location, i) => {
        return new google.maps.Marker({
            position: location,
            label: labels[i % labels.length],
        });
    });
    
    // Add a marker clusterer to manage the markers.
    
    new MarkerClusterer(map, markers, {
        imagePath: "https://developers.google.com/maps/documentation/javascript/examples/markerclusterer/m",
    });

   
    const locations = [{

        lat: 54.306250,
        lng: -8.567500
    },
    {
        lat: 54.306250,
        lng: -8.567500
    },
    {
        lat: 54.306250,
        lng: -8.567500
    },
    {
        lat: 54.27376,
        lng: -8.47213
    },
    {
        lat: 54.34645,
        lng: -8.58279
    },
    {
        lat: 54.46555,
        lng: -8.45219
    }]
    

}



