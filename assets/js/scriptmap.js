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
    }

];

// array with places icons   
const markersArray = [

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
    }
];

// this is an array with places in and nearby Sligo

const locationsArray = [

    // Beaches
    //Rosses Point
    {
        coordinates: {
            lat: 54.306250,
            lng: -8.567500,
        },
        type: "shore",
        placeName: "Rosses Point",
        information: "This is one of my favourite places on the coast. I love this old seafaring village that has a seaside resort with a 18-hole championship golf course. If you like sailing you can hire a fully equipped boat and enjoy your day at the sea."
    },

    //Strandhill
    {
        coordinates: {
            lat: 54.306250,
            lng: -8.567500,
        },
        type: "surfing",
        placeName: "Strandhill",
        information: "This is location has been named as one of the best places to surf in Europe. It is worth noting that swimming is forbidden at Strandhill beach due to very strong sea currents."
    },

    // Town attractions

    //Sligo Town
    {
        coordinates: {
            lat: 54.2697,
            lng: -8.4694,
        },
        type: "smallcity",
        placeName: "Sligo",

    },

    //Sligo Abbey
    {
        coordinates: {
            lat: 54.27087,
            lng: -8.47002,
        },
        type: "ruins",
        placeName: "Sligo Abbey",
        information: "This place surprised me very much. It was founded in the mid 13th cenury by Maurice Fitzgerald and is, still, one of the most distinguishable places in Sligo."
    },

    //Yeats Building
    {
        coordinates: {
            lat: 54.27376,
            lng: -8.47213,
        },
        type: "museum",
        placeName: "Yeats Building",
        information: "There is a permanent exhibition on the life and works of W.B.Yeats and Yeats Art Gallery presents changing exhibitions of art, sculpture, crafts etc."
    },

    // Nearby attractions

    //Lisadell House and Gardens 
    {
        coordinates: {
            lat: 54.34645,
            lng: -8.58279,
        },
        type: "palace",
        placeName: "Lisadell House and Gardens",
        information: "This is an amazing historical place sorrounded by a beautiful large garden. Located in proximity to the majestic table mountain, Benbulben."
    },

    //Mullaghmore
    {
        coordinates: {
            lat: 54.46555,
            lng: -8.45219,
        },
        type: "restaurant",
        placeName: "Mullaghmore",
        information: "Small fishing village with a superb, large (3km) sandy beach. Mullaghmore is also a base for licensed angling/passanger boats for charter."
    },
];
