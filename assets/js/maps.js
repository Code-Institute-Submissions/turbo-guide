let map;

const sligo = {
    lat: 54.2697,
    lng: -8.4694
};
// source: https://developers.google.com/maps/documentation/javascript/maptypes

function initMap() {

    map = new google.maps.Map(document.getElementById("map"), {
        center: sligo,
        zoom: 9,
        mapTypeId: "satellite",
        heading: 90,
        tilt: 45,

    });


    // The marker, positioned at Sligo
    const marker = new google.maps.Marker({
        position: sligo,
        map: map,
    });
}
    //map.setTilt(45);

    // source: https://developers.google.com/maps/documentation/javascript/examples/aerial-rotation#all
    
    function rotate90() {
        const heading = map.getHeading() || 0;
        map.setHeading(heading + 90);
        }
    
    function autoRotate() {
        // Determine if we're showing aerial imagery.
        if (map.getTilt() !== 0) {
            window.setInterval(rotate90, 2000);
            }
        }

    const iconBase = "assets/img/";  
    // array with icons   
    const iconArray = [
                
            {   name:"surfing",
                icon: iconBase + "surfing.png"
            },  

            {
                name:"ruins",
                icon: iconBase +"ruins-2.png"
                
            },
            {
                name:"smallcity",
                icon: iconBase + "smallcity.png"
            },
            {
                name:"museum",
                icon: iconBase + "art-museum-2.png"
            
            },
            {
                name:palace,
                icon: iconBase + "palace-2.png"
            
            },
            {
                name:"shore",
                icon: iconBase + "shore.png"
        
            },
            {
                name:"restaurant",
                icon: iconBase + "restaurant.png"
                
            }
    ];

// create an array with places in and nearby Sligo
const locations = [

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
            placeName: "Sligo"
            

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

locations.forEach((location) => {
    new google.maps.Marker({
      position: location.coordinates,
      icon: iconArray[location.type].icon,
      map: map,
    });
  });

  const legend = document.getElementById("legend");

  for (const key in iconArray) {
        const type = iconArray[key];
        const name = type.name;
        const icon = type.icon;
        const div = document.createElement("div");
        div.innerHTML = '<img src="' + icon + '"> ' + name;
        legend.appendChild(div);
    }
    map.controls[google.maps.ControlPosition.LEFT_TOP].push(legend);



