












import mapboxgl from "mapbox-gl";
mapboxgl.accessToken = "pk.eyJ1IjoiZXJpY2Zpc2giLCJhIjoiY2tkeXAzMWFmMWRtdDJ4b2d3YzhwdTMwbSJ9.ZdXxwUGmlrJvCT-BLqBU9Q";
const iconURLs = {
    hotels: "http://i.imgur.com/D9574Cu.png",
    restaurants: "http://i.imgur.com/cqR6pUI.png",
    activities: "http://i.imgur.com/WbMOfMl.png"
};


// const buildMarker = function(type, coords) {
//     const markerDomEl = document.createElement("div"); // Create a new, detached DIV
//     markerDomEl.style.width = "32px";
//     markerDomEl.style.height = "39px";



// // if (type == "hotels")
// //     markerDomEl.style.backgroundImage = iconURLs[0];
// //     else if (type == "restaurants")
// //     markerDomEl.style.backgroundImage = iconURLs[1];
// // else
// markerDomEl.style.backgroundImage = iconURLs[2];



//  return   new mapboxgl.Marker(markerDomEl).setLngLat([-74.009151, 40.705086]);

// };
const buildMarker = function(type, coords) {
new mapboxgl.Marker(mapboxgl.Marker).setLngLat([-74.009151, 40.705086]).addTo(map);
}
 export default buildMarker;