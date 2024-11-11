// Inicializa o mapa e define a posição central e o nível de zoom
var map = L.map('map').setView([-22.898000, -43.681907], 13); // Coordenadas do centro do mapa

// Adiciona o tileLayer (camada de mapa) usando o serviço OpenStreetMap
L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    // Remove a marca d'água da camada
    noWrap: true
}).addTo(map);

// Adiciona o marcador na coordenada especificada
var marker = L.marker([-22.904341, -43.681907]).addTo(map);

// Opcional: adiciona um popup ao marcador
marker.bindPopup("<b>Endereço :</b><br>Av. Padre Guilherme Decaminada, 720 - Santa Cruz - RJ");
