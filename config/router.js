var express = require('express');
var request = require('request');
var _ = require('lodash');
var xmlToJSON = require('xmljson').to_json;

var host = process.env.HOST || 'http://services.my511.org';
var token = process.env.TOKEN || '19368cc0-badd-407a-b2f6-3baecb89a0b4';

var routes = require(global.dir + '/config/routes.js');

function makeRequest(props, queryParams, next, callback) {
  var url = host + props.path + '?token=' + token + '&' + queryParams;

  request(url, function(error, response, body) {
    if(error) return callback(error);
    next(body, callback);
  });
};

module.exports = function(app) {
  _.each(routes, function(props, name) {
    app.get('/' + name, function(req, res) {
      makeRequest(props, req._parsedUrl.query, xmlToJSON, function(error, data) {
        res.send(error || data);
      });
    });
  });

  var fileName = global.dir + '/public'
  app.use(express.static(fileName));
  app.get('/home', function(req, res) {
    res.sendFile('index.html', { root: fileName });
  });
};
