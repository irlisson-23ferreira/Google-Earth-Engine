// Carregando a coleção Landsat 8
var landsat = ee.ImageCollection('LANDSAT/LC08/C02/T1_L2')
  .filterBounds(Map.getCenter())
  .filterDate('2023-01-01', '2023-12-31')
  .median();

// B4 = Vermelho, B3 = Verde, B2 = Azul
Map.addLayer(landsat, {bands: ['SR_B4', 'SR_B3', 'SR_B2'], min: 7000, max: 12000}, 'Landsat 8');

