const
  bodyParser = require('body-parser'),
  cards = require('./mock/cards.json'),
  rp = require('request-promise'),
  express = require('express');

var app = express();
app.set('port', process.env.PORT || 3000);
app.set('view engine', 'ejs');
app.use(bodyParser.urlencoded({ extended: false}));
app.use(bodyParser.json());
app.use(express.static('public'));
app.use("/static", express.static(__dirname + '/static'));

// Server frontpage
app.get('/', function(req, res) {
    res.render('index');
});

app.get('/:id', function(req, res) {
  var cardId = req.params.id;  
  res.render("index", {card: cards[cardId]});
});

app.listen(app.get('port'), function() {
  console.log('Odisea 2020 web running on port ', app.get('port'));
});

module.exports = app;
