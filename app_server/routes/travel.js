var fs = require('fs');
var trips = JSON.parse(fs.readFileSync('./data/trips.json', 'utf8'));

/* GET travel view */
const travel = (req, res) => {
    res.render('travel', { title: 'Travlr Getaways', trips });
};

module.exports = {
    travel
};




var express = require('express');
var router = express.Router();
var controller = require('../controllers/travel');

// GET travel page 
router.get('/', controller.travel);

module.exports = router;
