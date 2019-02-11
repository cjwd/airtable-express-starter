var express = require('express');
var router = express.Router();
var exampleController = require('../controllers/exampleController');

/* GET home page. */
router.get('/', exampleController.displayUsers);

module.exports = router;
