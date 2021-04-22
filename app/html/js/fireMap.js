let map = L.map("map", {
  center: [55.9400, 93.3014],
  zoom: 4,
});
L.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png", {
  attribution:
    '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors',
}).addTo(map);


// Load kml file
// fetch('../img/test.kml')
//     .then(res => res.text())
//     .then(kmltext => {
//       // Create new kml overlay
//       const parser = new DOMParser();
//       const kml = parser.parseFromString(kmltext, 'text/xml');
//       const track = new L.KML(kml);
//       console.log(track)
//       // map.addLayer(track);
//
//       // Adjust map to show the kml
//       // const bounds = track.getBounds();
//       // map.fitBounds(bounds);
//     });

let a = omnivore.csv('../img/test.csv')
let i = 0;
// let b = Object.keys(a._layers)
console.log(a._layers[75])



