var quotes = ["You keep using that word.  I do not think it means what you think it means.", "Anybody want a peanut?", "As you wish!",
					"Rodents of Unusual Size?  I don't think they exist.", " It's not my fault being the biggest and the strongest. I don't even exercise.",
					"Hello, my name is Inigo Montoya. You killed my father. Prepare to die.",  "Inconceivable!", "I'm not a witch, I'm you're wife!", 
					"There's a shortage of perfect breasts in this world. It would be a pity to damage yours.", "Is this a kissing book?",
					"Turns out he's only mostly dead.", "I'm going to do him left-handed.", "Give us the gate key.", "My way isn't very sportsmanlike.", 
					"You're trying to kidnap what I've rightfully stolen.", "You seem a decent fellow. I hate to kill you. You seem a decent fellow. I hate to die.",
					" Life is pain, Highness! Anyone who says differently is selling something.", "Death cannot stop true love. All it can do is delay it for a while.",
					"Never go in against a Sicilian when death is on the line!", "You mean... You'll put down your rock, I'll put down my sword, and... Try and kill each other like civilized people?",
					"I'll explain, and I'll use small words so that you'll be sure to understand, you warthog-faced buffoon."
]
function randomQuote() {
	return  (quotes[Math.floor(Math.random() * quotes.length) ]);
} ;

//setup express
var express = require('express'); 
var app = express();

//  forward the content in the public folder to our users when they visit our root domain "example.com"
app.use(express.static(__dirname + '/public'))

//send the info
app.get('/api/onequote', function(req, res) {
	res.send(randomQuote());
});
app.get('/api/quotes', function(req, res) {
	res.send(quotes);
});

//create the server
var server = app.listen(3000, function () {
  var port = server.address().port;
  console.log('Example app listening at http://localhost:%s', port);
});

