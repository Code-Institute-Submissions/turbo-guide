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

    //display name and info about place and icon Drop to the map
    addMarkerInfo()

    var infoObj = [];


    function addMarkerInfo() {
    for (var i = 0; i < locations.length; i++) {
        var contentString = `<h3> ${'locations[i].placeName'}</h3>` + `<p> ${'locations[i].information'}</p>`;
        const marker = new google.maps.Marker({
            position: locations[i].coordinates[0],
            icon: icons[markersArray[i].type].icon,
            map: map,
            animation: google.maps.Animation.DROP
        });

        const infowindow = new google.maps.InfoWindow({
            content: contentString,
        });

        marker.addListner("click", function() {
            closeOtherInfo();
            infowindow.open(map.marker);
            infoObj[0] = infowindow;
        });
    };

    //clear out previous information   
    function closeOtherInfo() {
        if (infoObj.length > 0) {
            infoObj[0].set("marker", null);
            infoObj[0].close();
            infoObj[0].length = 0;
        }
    }