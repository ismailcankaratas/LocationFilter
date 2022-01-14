konumuGetir();

function calcDistance(p1, p2) {
    var distance = (google.maps.geometry.spherical.computeDistanceBetween(p1, p2) / 1000).toFixed(2);
    return distance;
}
function konumuGetir() {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(konumuGoster);
    } else {
      document.write("Tarayıcınız Geolocation API desteklemiyor.");
    }
}

function konumuGoster(konum) {
  var p1 = new google.maps.LatLng(konum.coords.latitude, konum.coords.longitude);
var p2 = new google.maps.LatLng(40.913064443793736, 29.278451732341182);
    document.write("Konum: " + konum.coords.latitude + ", " + konum.coords.longitude);
    document.write("<br>Konum2: " + p2);
    document.write("<br>Mesafe: " + calcDistance(p1, p2) + " Km")
}
