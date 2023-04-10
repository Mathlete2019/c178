let latitude = 22.7868542;
let longitude = 88.3643296;

mapboxgl.accessToken =
  "pk.eyJ1IjoiYXBvb3J2ZWxvdXMiLCJhIjoiY2ttZnlyMDgzMzlwNTJ4a240cmEzcG0xNyJ9.-nSyL0Gy2nifDibXJg4fTA";

var map = new mapboxgl.Map({
  container: "map",
  style: "mapbox://styles/mapbox/streets-v11",
  center: [longitude, latitude],
  zoom: 10,
});

map.addControl(
  new MapboxGecoder({
    accessToken: mapboxgl.accessToken,
    mapboxgl: mapboxgl,
  })
);

var tajmahalImage = document.querySelector("#tajmahal");
var marker1 = new mapboxgl.Marker({
  element: tajmahalImage,
})
  .setLngLat([78.0421, 27.1751])
  .addTo(map);

var victoriaImage = document.querySelector("#victoria");
var marker2 = new mapboxgl.Marker({
  element: victoriaImage,
})
  .setLngLat([88.3426, 22.5448])
  .addTo(map);

var gatewayImage = document.querySelector("#gateway");
var marker3 = new mapboxgl.Marker({
  element: gatewayImage,
})
  .setLngLat([72.8347, 18.922])
  .addTo(map);
