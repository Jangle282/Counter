function startMap() {
  let center = {lat: 0, lng: 0}
  if (navigator.geolocation) {
    // Get current position
    navigator.geolocation.getCurrentPosition(function (position) {
      center = {
        lat: position.coords.latitude,
        lng: position.coords.longitude
      };
      const map = new google.maps.Map(
        document.getElementById('map'),
        {
          zoom: 18,
          center: center
        }
      );
      const currentPositionMarker = new google.maps.Marker({
        position: {
          lat: center.lat,
          lng: center.lng
        },
        map: map,
        title: "You are here"
      });
    }, function () {
      // If something goes wrong
      console.log('Error in the geolocation service.');
    })
  } else {
    // Browser says: Nah! I do not support this.
    console.log('Browser does not support geolocation.');
  }
}

startMap();