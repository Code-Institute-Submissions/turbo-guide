let map;

//initialize my map (Sligo)

const sligo = {
    lat: 54.2697,
    lng: -8.4694
}

function initMap() {
    map = new google.maps.Map(document.getElementById("map"), {
        center: sligo,
        zoom: 8

});

// create an array with places in and nearby Sligo

    const locations = [

        // Beaches

        //Rosses Point
        {
            lat: 54.306250,
            lng: -8.567500,
            "name": "Rosses Point",
            "information": "#"
        },  

        //Strandhill
        {
            lat: 54.306250,
            lng: -8.567500,
            "name": "Strandhill",
            "information": "#"
        },

        // Town attractions

        //Sligo Abbey
        {
            lat: 54.27087,
            lng: -8.47002,
            "name": "Sligo Abbey",
            "information": "how add links to the pages#"
        },

        //Yeats Building
        {
            lat: 54.27376,
            lng: -8.47213,
            "name": "Yeats Building",
            "information": "#"
        },

        // Nearby attractions

        //Lisadell House and Gardens 
        {
            lat: 54.34645,
            lng: -8.58279,
            "name": "Lisadell House and Gardens",
            "information": "#"
        },

        //Mullaghmore
        {
            lat: 54.46555,
            lng: -8.45219,
            "name": "Mullaghmore",
            "information": "#"
        },
    ];

     //individual markers 
    //I took an idea to create this array in that way from ryanjbm and customise it for my project. Icons are taken form: https://mapicons.mapsmarker.com/
    
    const markersArray = "assets/img/";
        const marker = {
            marker1:{
                name:"surfing", 
                icon: markersArray + "surfing"
            },
            marker2:{
                name:"abbey", 
                icon: markersArray + "ruins-2"
            },
             marker3:{
                name:"sligoTownMarker", 
                icon: markersArray + "smallcity"
            },
             marker4:{
                name:"yeats", 
                icon: markersArray + "art-museum-2"
            },
             marker5:{
                name:"lisadell", 
                icon: markersArray + "palace-2"
            },
             marker6:{
                name:"rosses", 
                icon: markersArray + "shore-2"
            },
             marker7:{
                name:"mullaghamore", 
                icon: markersArray + "restaurant"
            },
        }

    // The marker, positioned at Sligo
    const sligoTownMarker = new google.maps.Marker({
    position: sligo,
    map,
    });  

    // Create markers.
  
    for (let i = 0; i < locations.length; i++) {
     const pins = new google.maps.Marker({
     position: locations[i].position,
     icon: icons[markerArray[i].type].icon,
     map: map,
});

  }
// add markers
  function addMarker(feature) {
  var pins = new google.maps.Marker({
    position: locations.position,
    icon: icons[markersArray.type].icon,
    map: map
  });

  pins.push(marker);
}
// // This example displays a marker at the center of Australia.
// When the user clicks the marker, an info window opens.

const contentString =
    '<div id="content">' +
    '<div id="siteNotice">' +
    "</div>" +
    '<h1 id="firstHeading" class="firstHeading">Uluru</h1>' +
    '<div id="bodyContent">' +
    "<p><b>Uluru</b>, also referred to as <b>Ayers Rock</b>, is a large " +
    "sandstone rock formation in the southern part of the " +
    "Northern Territory, central Australia. It lies 335&#160;km (208&#160;mi) " +
    "south west of the nearest large town, Alice Springs; 450&#160;km " +
    "(280&#160;mi) by road. Kata Tjuta and Uluru are the two major " +
    "features of the Uluru - Kata Tjuta National Park. Uluru is " +
    "sacred to the Pitjantjatjara and Yankunytjatjara, the " +
    "Aboriginal people of the area. It has many springs, waterholes, " +
    "rock caves and ancient paintings. Uluru is listed as a World " +
    "Heritage Site.</p>" +
    '<p>Attribution: Uluru, <a href="https://en.wikipedia.org/w/index.php?title=Uluru&oldid=297882194">' +
    "https://en.wikipedia.org/w/index.php?title=Uluru</a> "</p>" +
    "</div>" +
    "</div>";
  
    const infowindow = new google.maps.InfoWindow({
    content: contentString,
  });

  const marker = new google.maps.Marker({
    position: uluru,
    map,
    title: "sligo (Ayers Rock)",
  });
  marker.addListener("click", () => {
    infowindow.open(map, marker);
  });
}


}
