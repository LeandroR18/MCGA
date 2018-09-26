var express = require('express');
var data = require('../../data/products');
var router = express.Router();
var lodash = require('lodash');
var id = null;

router.get('/', function (req, res) {
  res.json(data);
});

router.get('/id', function (req, res) {
  id = req.params.id;
  var filterProd = lodash.filter(data.list, filteredById);
  res.send(filterProd);
};

var filteredById = function (filterProd) {
  return filterProd.id == id;
}

module.exports = router;
