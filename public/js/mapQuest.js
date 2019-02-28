function initMap() {
	// add your code here
	L.mapquest.key = '6A4NR0toIodA6hsGjm9Ngc5nXc1Xwf8E';
	
	// 'map' refers to a <div> element with the ID map
	var map = L.mapquest.map('map', {
		center: [32.8787, -117.235913],
		layers: L.mapquest.tileLayer('map'),
		zoom: 12,
		zoomControl: false
	});

	// Add a marker to the map
	L.marker([32.8787, -117.235913]).addTo(map);
}