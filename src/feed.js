// Invoke 'strict' JavaScript mode
'use strict';
var request = require('request');

module.exports = {
	load: function(feedURL, callback){
		var $ = this;
		var apiKey = "3oy5r452dlpancq2bytzui7bgxito9qiqgfvwyui";
		request({
			url: "https://api.rss2json.com/v1/api.json?rss_url="+encodeURIComponent(feedURL)+"&api_key="+apiKey,
			json: true
		}, function (error, response, body) {
			if (!error && response.statusCode == 200) {
				callback(null, body);
			}else {
				this.emit('error', new Error('Bad status code'));
			}
		});
	},
	read: function(url, callback){
		return this.load(url, callback);
	}
};