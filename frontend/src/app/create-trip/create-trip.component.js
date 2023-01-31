require('dotenv').config();
function initMap(){
    //create a Directions service object to use the route method and get a result for our request
    const directionsService = new google.maps.DirectionsService();
    //create a Directions render method to display route
    const directionsDisplay = new google.maps.DirectionsRenderer();
    //Map options
    let myLatLng = { lat: 38.6270, lng:-90.1994};
    let options = {
        zoom:6,
        center: myLatLng,
        mapTypeId: google.maps.MapTypeId.ROADMAP
    };//options closing//
    //map object
   let map = new google.maps.Map(document.getElementById("googleMap"),options);
    //bind the directions display to map
   directionsDisplay.setMap(map);
   directionsDisplay.setPanel(document.getElementById("sidebar"));

  const control = document.getElementById("floating-panel");
  map.controls[google.maps.ControlPosition.TOP_CENTER].push(control);
  const onChangeHandler = function () {
  calcRoute(directionsService, directionsDisplay);
  };
  document.getElementById("from").addEventListener("change", onChangeHandler);
  document.getElementById("to").addEventListener("change", onChangeHandler);

}

function calcRoute(directionsService, directionsDisplay) {
  const from = document.getElementById("from").value;
  const to = document.getElementById("to").value;

  directionsService
    .route({
    origin: from,
    destination: to,
    travelMode: google.maps.TravelMode.DRIVING,
    })
    .then((response) => {
      directionsDisplay.setDirections(response);
    })
    .catch((error) => window.alert("Directions request failed due to " + status));
}


/*  TRYING ALTERNATE METHOD/FUNCTION*/
//function
function calcRoute(){
  //create request
  let request = {
    origin: document.getElementById("from").value,
    destination: document.getElementById("to").value,
    travelMode: google.maps.TravelMode.DRIVING, //WALKING, BICYCLING, TRANSIT --> alt options
    unitSystem: google.maps.UnitSystem.IMPERIAL
  }

  //Pass the request to the route method
  directionsService.route(request, (result, status) => {
    if(status == google.maps.DirectionsStatus.OK) {

      //get distance and time
      const output = document.querySelector('#output');
      output.innerHTML = "<div class='alert-info'> From: "
      + document.getElementById("from").value + ".<br />To: "
      + document.getElementById("to").value + ".<br/> Driving Distance: "
      + result.routes[0].legs[0].distance.text + ".<br />Duration: "
      + result.routes[0].legs[0].duration.text + ".</div>";

      //display route
      directionsDisplay.setDirections(result);

    } else {
      //delete route from map
      directionsDisplay.setDirections({ routes: []});
      //center map
      map.setCenter(myLatLng);

      //error - can't drive in ocean
      output.innerHTML = "<div class='alert-danger'> Could not retrieve driving directions :( </div>";
    }

  });

} 

//create autocomplete options for all input
let inputOptions = {
  type: ['(cities)']
}
let input1 = document.getElementById("from");
let autocomplete1 = new google.maps.places.Autocomplete(input1, inputOptions)
let input2 = document.getElementById("to");
let autocomplete2 = new google.maps.places.Autocomplete(input2, inputOptions)


window.initMap = initMap;

  //Listen for click on map
  google.maps.event.addListener(map, 'click',
  function(event){
  //Add Marker
      addMarker({coords:event.latLng});
  });
/**/
  //Add Marker
  let marker = new google.maps.Marker({
      position:{lat:39.0997, lng:-94.5786},
      map: map,
      icon:'https://developers.google.com/maps/documentation/javascript/examples/full/images/beachflag.png'
   });
 let infoWindow = new google.maps.InfoWindow({
  content: '<h1>Kansas City, MO</h1>'
 });

 marker.addListener('click', function(){
  infoWindow.open(map, marker);
 });


//Array of Markers
let markers = [
    {
    coords:{lat:39.0997, lng:-94.5786},
    iconImage:'https://developers.google.com/maps/documentation/javascript/examples/full/images/beachflag.png',
    content: '<h1>KC, MO</h1>'
},
{
    coords:{lat:37.2090, lng:-93.2923},
    content:'<h1>Springfield, MO</h1>'
},
{coords:{lat:38.5951, lng:-90.5462}}
];

//Loop through Markers
for(let i = 0; i < markers.length; i++){
//Add marker
    addMarker(markers[i]);
}



//Add Marker Function
function addMarker(props){
    let marker = new google.maps.Marker({
        position: props.coords,
        map: map,
      //  icon:props.iconImage

     });
     //check for custom icon
     if(props.iconImage){
     //Set icon image
        marker.setIcon(props.iconImage);
     }
     //check content
     if(props.content){
      let infoWindow = new google.maps.InfoWindow({
        content: props.content,
   });
     }
}
//Info Window
const detailWindow = new google.maps.InfoWindow({
  content: '<h2>St. Louis</h2>',
});

marker.addListener("mouseover", () =>{
  detailWindow.open(map, marker);
})
