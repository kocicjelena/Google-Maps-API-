var googleMapsClient = require('@google/maps').createClient({
  key: 'AIzaSyCQ4SMbmgUw_moM37nVnAFQmzUdTv5jRnU'
});

//var createClient = require("@google/maps");

exports.createClients = googleMapsClient.geocode({
  address: '1600 Amphitheatre Parkway, Mountain View, CA'
}, function(err, response) {
	if (!err) {
		var example = [];
	console.log(response.json.results);
	update('There was id: ' + response.json.results[0].place_id);
  }else{console.log('err');}
});
     
function update(example) {
  document.getElementById('example').innerHTML += '<br>' + example;
}	         