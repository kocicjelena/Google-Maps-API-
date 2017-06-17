var googleMapsClient = require('@google/maps').createClient({
  key: 'AIzaSyAIH412ihD0zsXV5j9KUw1TYfLopo-B9FU'
});

//var createClient = require("@google/maps");

exports.createClients = googleMapsClient.geocode({
  address: '1600 Amphitheatre Parkway, Mountain View, CA'
}, function(err, response) {
  if (!err) {
    console.log(response.json.results);
  }
});