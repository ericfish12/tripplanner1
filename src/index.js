console.log("Hello from JavaScript");
//import { Marker } from "mapbox-gl";
import mapboxgl from "mapbox-gl";
import buildMarker from "./marker";


mapboxgl.accessToken = "pk.eyJ1IjoiZXJpY2Zpc2giLCJhIjoiY2tkeXAzMWFmMWRtdDJ4b2d3YzhwdTMwbSJ9.ZdXxwUGmlrJvCT-BLqBU9Q";

const map = new mapboxgl.Map({
  container: "map",
  center: [-74.009, 40.705], // FullStack NY coordinates; alternatively, use [-87.6354, 41.8885] for Chicago
  zoom: 12, // starting zoom
  style: "mapbox://styles/mapbox/streets-v10" // mapbox has lots of different map styles available.
});


//new mapboxgl.Marker(mapboxgl.Marker).setLngLat([-74.009151, 40.705086]).addTo(map);


// const markerDomEl = document.createElement("div"); // Create a new, detached DIV
// markerDomEl.style.width = "32px";
// markerDomEl.style.height = "39px";
// markerDomEl.style.backgroundImage = "url(http://i.imgur.com/WbMOfMl.png)";

// new mapboxgl.Marker(markerDomEl).setLngLat([-74.009, 40.705]).addTo(map); // [-87.641, 41.895] for Chicago 








// const marker = buildMarker("act", [-74.009151, 40.705086]); // or [-87.6354, 41.8885]
// marker.addTo(map);
buildMarker();