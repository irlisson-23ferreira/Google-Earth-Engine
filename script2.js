// Como o SRTM é uma imagem estática única, usamos ee.Image()
var srtm = ee.Image('USGS/SRTMGL1_003');

// Gerando a declividade (Slope) a partir do relevo em graus
var declividade = ee.Terrain.slope(srtm);

Map.addLayer(srtm, {min: 0, max: 1000, palette: ['blue', 'yellow', 'red']}, 'Elevação (m)');
