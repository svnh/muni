var app = require('express')();
require(__dirname + '/config/router.js')(app);

var port = process.env.PORT || 3001;
app.listen(port, function() {
  console.log('Server listening on port ' + port);
});
