# @google/maps

Test _ Google Maps API  for web services

webpack


=> json in console for '1600 Amphitheatre Parkway, Mountain View, CA'
place_id for the same address is on the screen

Test _ Google Maps API for web

map is not loaded yet, npm @google/maps test:

var googleMapsClient = require('@google/maps').createClient({ key: 'your API key here' });

// Geocode an address. googleMapsClient.geocode({ address: '1600 Amphitheatre Parkway, Mountain View, CA' }, function(err, response) { if (!err) { console.log(response.json.results); } });

p.s. 'your API key here' will be deleted and dist will be wrong webpack-ed then

dev for future dist: https://kocicjelena.github.io/gmaps_placesapi/
