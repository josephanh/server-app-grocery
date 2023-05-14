var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express', name: 'Nguyễn Tuấn Anh' });
});

router.get('/tables', function(req, res, next) {
  res.render('tables', { title: 'Express', name: 'Nguyễn Tuấn Anh' });
});

router.get('/addProduct', function(req, res, next) {
  res.render('addProduct', { title: 'Express', name: 'Nguyễn Tuấn Anh' });
});

module.exports = router;
