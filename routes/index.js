var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', exampleController.displayUsers);

module.exports = router;
