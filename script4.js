// Como são vetores/polígonos, usamos ee.FeatureCollection
var paises = ee.FeatureCollection('USDOS/LSIB_SIMPLE/2017');
var brasil = paises.filter(ee.Filter.eq('country_na', 'Brazil'));

Map.addLayer(brasil, {color: 'green'}, 'Fronteira do Brasil');
