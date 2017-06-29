var express = require('express');
var Twitter = require('twitter');

var client = new Twitter({
  consumer_key: 'fP5fTk7JfSFK0H9kFvPPXRxtQ',
  consumer_secret: 'X4zH5SmcNxNEt0j8uwY3MWlP0kjSzJbxye7HyAI9GxdAy7P3l0',
  access_token_key: '15919184-hodNiuNta7EL3SRXHmg2zikvzUwGKtTdsNOxWjcAw',
  access_token_secret: 'KhyaDr3FZKkLcwmCFgKDBEKHXKmazEVmFD6HHJaPSokRG'
});



function getFavs(res){
  client.get('trends/place',{id:'1'},function(error, tweets, response) {
    if(error){
      res.json("Service Error!");
    }else{
      res.json(tweets);
    }
  })
};

var router = express.Router();
var that = this;
/* GET users listing. */
router.get('/', function(req, res, next) {
	// Comment out this line:
  //res.send('respond with a resource');

  // And insert something like this instead:
  var favs = getFavs(res);
  
});

module.exports = router;
