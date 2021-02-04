var map;

var infoObj = [],

    var sligo = {
    lat: 54.2697,
    lng: -8.4694
}

//individual markers 
//I took an idea to create this array in that way from ryanjbm and customise it for my project, but I customise it much more with tutorial https://www.youtube.com/watch?v=Xptz0GQ2DO4&t=356s  Icons are taken form: https://mapicons.mapsmarker.com/
    
var markersArray = "assets/img/";
    var marker = {
            surfing:{
                //name:"surfing", 
                //markersArray + "surfing"
                icon: "./img/surfing.png"
            },

            ruins:{
                //"name": "Sligo Abbey",
                //name:"abbey",
                //markersArray + "ruins-2" 
                icon: "./img/ruins-2.png"
            },
             smallcity:{
                //name:"Sligo", 
                //markersArray + "smallcity"
                icon: "./img/smallcity.png"

            },

             museum:{
                 //"name": "Yeats Building",
                //name:"yeats", 
                //arkersArray +m "art-museum-2"
                icon: "./img/art-museum-2.png"
            },

             palace:{
                //"name": "Lisadell House and Gardens",
                //name:"lisadell",
                //markersArray + "palace-2" 
                icon: "./img/palace-2.png"

            },
             shore:{
                //name:"Rosses Point",
                //name: "rosses", 
                //markersArray + "shore-2"
                icon: "./img/surfing.png"
            },

             restaurant:{
                //name:"Mullaghamore", 
                //markersArray + "restaurant"
                icon:"./img/restaurant.png" 
            },
        };

// create an array with places in and nearby Sligo

const locations = [

    // Beaches
    //Rosses Point
    {
    
        LatLng:[{
            lat: 54.306250,
            lng: -8.567500,
        }],
        type:"shore",
        placeName: "Rosses Point",
        information:"#"
    },  

    //Strandhill
    {
        LatLng:[{
        lat: 54.306250,
        lng: -8.567500,
         }],
        type:"surfing",
        placeName: "Strandhill",
        information: "#"
    },

    // Town attractions

    //Sligo Town
   {
        LatLng:[{   
        lat: 54.2697,
        lng: -8.4694,
         }],
        type:"smallcity",
        placeName:"Sligo",
        information:"#"
    },

    //Sligo Abbey
    {   LatLng:[{
        lat: 54.27087,
        lng: -8.47002,
         }],
        type:"ruins",
        placeName: "Sligo Abbey",
        information: "#"
    },

    //Yeats Building
    {
        LatLng:[{
        lat: 54.27376,
        lng: -8.47213,
         }],
        type:"museum",
        placeName: "Yeats Building",
        information: "#"
    },

    // Nearby attractions

    //Lisadell House and Gardens 
    {
        LatLng:[{
        lat: 54.34645,
        lng: -8.58279,
         }],
        type:"palace",
        placeName: "Lisadell House and Gardens",
        information: "#"
    },

    //Mullaghmore
    {
        LatLng:[{
        lat: 54.46555,
        lng: -8.45219,
         }],
        type:"restaurant",
        placeName: "Mullaghmore",
        information: "#"
    },
];

    window.onload =function (){
        initMap();
    };    

// Create markers.
    function addMarkerInfo(){
        for (var i=0; i<locations.length; i++) {
            const marker = new google.maps.Marker({
                position: locations[i].LatLng[0],
                icon: icons[markersArray[i].type].icon,
                map: map
            });
                
        } 
    }     
           
function initMap(){
        map = new google.maps.Map(document.getElementById ("map"),{
            center: sligo,
            zoom: 8
        });

        addMarkerInfo();

    }      
    
         // The marker, positioned at Sligo
        //const sligo = new google.maps.Marker({
        //position: sligo,
        //map,
    //});  

    //}
   

// setup window for some informations about place
//const infoWindow = new google.maps.infoWindow({
    //content: contentString,
   // maxwidth:400
//});
          
// add markers
  //function addMarker(locations) {
 // var pins = new google.maps.Marker({
  //  position: locations.position,
    
 // });

  //pins.push(marker);
//}

