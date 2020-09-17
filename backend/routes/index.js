var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
    res.render('index', { title: 'Express~~' });
});
router.get('/explore', function(req, res, next) {
    res.render('explore');
})
module.exports = router;