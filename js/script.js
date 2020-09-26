// Creating map options
var mapOptions = {
    center: [44.9482, 34.1003],
    zoom: 13
}

// Creating a map object
var map = new L.map('map', mapOptions);

// Creating a Layer object
var layer = L.tileLayer('http://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    maxZoom: 18,
    attribution: '&copy; <a href="https://vk.com/dot_zub">Дмитрий Зубко</a>'
});

// Adding layer to the map
map.addLayer(layer);

// Creating a Marker
var markerOptions = {
    title: "Нажмите, чтобы узнать что это за место",
    clickable: true,
    draggable: false
 }

// Creating a marker
var cfu = L.marker([44.9364, 34.1342], markerOptions);
var home = L.marker([44.9133, 34.0802], markerOptions);
var rectal = L.marker([44.9393, 34.0841], markerOptions);
var railway = L.marker([44.9622, 34.0818], markerOptions);

var center = L.polygon([    
    [44.9494, 34.1027],
    [44.9429, 34.0962],
    [44.9473, 34.0904],
    [44.9526, 34.0969]
]);

// Adding marker to the map
cfu.addTo(map);
home.addTo(map);
rectal.addTo(map);
railway.addTo(map);
center.addTo(map);

// Adding pop-up to the marker
cfu.bindPopup('<b>КФУ им. В.И. Вернадского</b>');
home.bindPopup('<b>Casa dolce casa</b>');
rectal.bindPopup('<b>Военкомат</b>');
railway.bindPopup('<b>Ж/Д вокзал</b>');
center.bindPopup('<b>Центр города</b>');