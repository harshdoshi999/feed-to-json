var feed = require('./index');

feed.read('https://news.google.com/news?pz=1&cf=all&output=rss', function(err, rss){
    console.log(JSON.stringify(rss));
});