var localtions = [
  {businessName: "Cezve Point", latitude: 40.906787, longitude: 29.283012}, //  1,36 km
  {businessName: "Cezve Point Coffe", latitude: 40.905908, longitude: 29.280641}, //  1,15 km
  {businessName: "Midyeci Ahmet", latitude: 40.905888, longitude: 29.269996}, //  0,26 km
  {businessName: "İsmail Can", latitude: 40.9055126, longitude: 29.2669325},
]

var localDiv = document.getElementById(localtions);

function calcDistance(myLocaltion) {
  localtions.forEach(local => {
    var businessLocaltion = new google.maps.LatLng(local.latitude, local.longitude);
    var distance = (google.maps.geometry.spherical.computeDistanceBetween(myLocaltion, businessLocaltion) / 1000).toFixed(2);
    document.write(local.businessName + "' a " + distance + " Km <br> <br> ");
  });
}
function localtionGet() {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(localtionShow);
    } else {
      document.write("Tarayıcınız Geolocation API desteklemiyor.");
    }
}

function localtionShow(location) {
  var myLocaltion = new google.maps.LatLng(location.coords.latitude, location.coords.longitude);
  console.log(location.coords.latitude, location.coords.longitude);
  calcDistance(myLocaltion);
}

addEventListener('load', ()=> {
  localtionGet();
})






