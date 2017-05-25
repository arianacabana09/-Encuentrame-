function initMap(){

  var laboratoriaLima = {lat: -12.119127, lng: -77.0349046};
  var map = new google.maps.Map(document.getElementById("map"), {
    zoom: 18,
    center: laboratoriaLima
  });

  var markadorLaboratoria = new google.maps.Marker({
    position: laboratoriaLima,
    map: map
  });

  function buscar(){
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(functionExito, functionError);
    }
  }

  //
  var latitud, longitud;
  var functionExito = function(position){
    latitud=position.coords.latitude;
    longitud=position.coords.longitude;

    map.setZoom(18);
    map.setCenter({lat:latitud, lng:longitud});

    var miUbicacion =  new google.maps.Marker({
      position:{lat: latitud, lng: longitud}, map: map
    });
  }

  //
  var functionError = function(error){
    alert("Tenemos un problema con encontrar tu ubicacion");
  }

  document.getElementById("encuentrame").addEventListener("click",buscar);
}
