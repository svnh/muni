var app = require('express')();
global.dir = __dirname;
require(global.dir + '/config/router.js')(app);

var port = process.env.PORT || 3001;

app.listen(port, function() {
  console.log('Server listening on port ' + port);
});
