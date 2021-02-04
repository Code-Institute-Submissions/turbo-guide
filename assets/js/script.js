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
    })
}