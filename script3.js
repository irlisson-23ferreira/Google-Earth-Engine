// Filtrando temperatura do ar a 2 metros de altura para um mês
var era5 = ee.ImageCollection('ECMWF/ERA5_LAND/DAILY_AGGR')
  .filterDate('2026-06-01', '2026-06-30')
  .select('temperature_2m')
  .mean()
  .subtract(273.15); // Convertendo Kelvin para Celsius

Map.addLayer(era5, {min: 0, max: 40, palette: ['blue', 'white', 'red']}, 'Temperatura Média (ºC)');
