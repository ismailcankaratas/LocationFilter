var p1 = new google.maps.LatLng(45.463688, 9.18814);
var p2 = new google.maps.LatLng(45.463688, 9.18814);

console.log();

//calculates distance between two points in km's
function calcDistance(p1, p2) {
    var distance = (google.maps.geometry.spherical.computeDistanceBetween(p1, p2) / 1000).toFixed(2);
    var distanceConvertKm = distance * 0.001;
    return distanceConvertKm.toFixed(2);
}
function konumuGetir() {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(konumuGoster);
    } else {
      document.write("Tarayıcınız Geolocation API desteklemiyor.");
    }
}

function konumuGoster(konum) {
    document.write("Enlem: " + konum.coords.latitude);
    document.write("<br />");
    document.write("Boylam: " + konum.coords.longitude);
    document.write("<br />");
    document.write("Mesafe: " + calcDistance(p1, p2) + " Km")
}

konumuGetir();


/* meter to others */
// function meter_to_others(x){
//     document.getElementById("kilometer").value = x*0.001;
//     document.getElementById("centimeter").value = x*100;
//     document.getElementById("millimeter").value = x*1000;
//     document.getElementById("mile").value = (x*0.0006213712).toFixed(5);
//     document.getElementById("yard").value = (x*1.093613).toFixed(5);
//     document.getElementById("foot").value = (x*3.28084).toFixed(5);
//     document.getElementById("inch").value = (x*39.37008).toFixed(5);
//     document.getElementById("nauticalmile").value = (x*0.0005399568).toFixed(5); 
//   }
  