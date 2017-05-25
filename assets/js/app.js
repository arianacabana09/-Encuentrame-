function initMap(){
  alert();
    var laboratoriaLima = {lat: -12.119127, lng: -77.0349046};
    var map = new google.maps.Map(document.getElementById("map"), {
      zoom: 18,
      center: laboratoriaLima
    });

    var markadorLaboratoria = new google.maps.Marked({
      position: laboratoriaLima,
      map: map
    })
}
