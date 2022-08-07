const express = require('express');
const path = require('path');

const app = express();
app.use(express.static(path.join(__dirname, 'storybook-static')));
app.set('port', process.env.PORT || 8079);

var server = app.listen(app.get('port'), function() {
  console.log(`listening on port http://localhost:${server.address().port}`);
});