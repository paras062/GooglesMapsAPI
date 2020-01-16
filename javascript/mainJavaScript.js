/// <reference path="scripts/google-maps-3-vs-1-0.js" />
/// <reference path="scripts/GMAPJS/GMAPJSHelper_Release.js" />
var directionsDisplay;
var directionsService = new google.maps.DirectionsService();
var map;
var myCenter = new google.maps.LatLng(28.63100000000001, 77.21750683593746);
function initialize() {

    directionsDisplay = new google.maps.DirectionsRenderer();

    var mapOptions = {
        center: new google.maps.LatLng(28.63100000000001, 77.21750683593746),
        zoom: 8,
        mapTypeId: google.maps.MapTypeId.ROADMAP
    };

    map = new google.maps.Map(document.getElementById('map_canvas'), mapOptions);

    
        var mapOptions = {
            center: myCenter,
            zoom: 8,
            mapTypeId: google.maps.MapTypeId.ROADMAP
        };

        map = new google.maps.Map(document.getElementById('map_canvas'), mapOptions);
        directionsDisplay.setMap(map);
        directionsDisplay.setPanel(document.getElementById('directionsPanel'));
    

    /*  points and marker codes*/

    var points;
    var latitude;
    var longitude;


    /*pink ball marker*/


    var locate = document.getElementById('search').value;


    /* Code to get Latitude and Longitude of location*/

    var geocoder = new google.maps.Geocoder();
    var address = locate;


    geocoder.geocode({ 'address': address }, function (results, status) {

        if (status == google.maps.GeocoderStatus.OK) {
            latitude = results[0].geometry.location.lat();
            longitude = results[0].geometry.location.lng();
            points = new google.maps.LatLng(latitude, longitude);

            /* marker code*/

            var mapProp = {
                center: points,
                zoom: 12,
                panControl: true, /*In order to show navigating control*/
                zoomControl: true,
                mapTypeControl: true,
                scaleControl: true,
                streetViewControl: true, /*Enable street view control*/
                overviewMapControl: true,
                rotateControl: true,
                mapTypeId: google.maps.MapTypeId.ROADMAP
            };

            var map = new google.maps.Map(document.getElementById('map_canvas'), mapProp);
            map.setTilt(45);  /*To rotate map with an angle of 45 degree*/
            var marker = new google.maps.Marker({
                position: points,
               // icon: 'pinkball.png'
            });

            marker.setMap(map);

        }
    });
    document.getElementById('directionsPanel').innerHTML = "";
}


function calcRoute() {
    var direction_type = document.getElementById('dirtype').value;
        if (direction_type == '1') {
        drive();
    }
    else if (direction_type == '2') {
        walk();
    }
    else if (direction_type == '3') {
        trans();
    }

}
// driving path

function drive() {
    document.getElementById('search').value = "Enter Place To Search";
    initialize();
    var start = document.getElementById('first_location').value;
    var end = document.getElementById('second_location').value;
    var request = {
        origin: start,
        destination: end,
        travelMode: google.maps.TravelMode.DRIVING
    };
    directionsService.route(request, function (response, status) {
        if (status == google.maps.DirectionsStatus.OK) {
            directionsDisplay.setDirections(response);
        }
    });
}
// walking path

function walk() {
    document.getElementById('search').value = "Enter Place To Search";
    initialize();
    var start = document.getElementById('first_location').value;
    var end = document.getElementById('second_location').value;
    var request = {
        origin: start,
        destination: end,
        travelMode: google.maps.TravelMode.WALKING
    };
    directionsService.route(request, function (response, status) {
        if (status == google.maps.DirectionsStatus.OK) {
            directionsDisplay.setDirections(response);
        }
    });
}
// transit path

function trans() {
    document.getElementById('search').value = "Enter Place To Search";
    initialize();
    var start = document.getElementById('first_location').value;
    var end = document.getElementById('second_location').value;
    var request = {
        origin: start,
        destination: end,
        travelMode: google.maps.TravelMode.TRANSIT
    };
    directionsService.route(request, function (response, status) {
        if (status == google.maps.DirectionsStatus.OK) {
            directionsDisplay.setDirections(response);
        }
    });
}