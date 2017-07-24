// Map
function myMap() {
    var mapProp = {
        center: new google.maps.LatLng(41.878114, -87.629798),
        zoom: 12
    };
    var map = new google.maps.Map(document.getElementById("map"), mapProp);
}
var marker = new google.maps.Marker({
    position: uluru,
    map: map
});