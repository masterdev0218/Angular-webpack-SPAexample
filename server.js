const express = require('express');

const port = 3000 || process.env.PORT;
const app = express();

// use ejs javascript templating to render data.
app.engine('html', require('ejs').renderFile);

// render html on the server
app.set('view engine', 'html');
app.set('views', 'dist');

// use express to serve static file 'dist' (index set to false to disable directory indexing to default 'index.html')
app.use('/', express.static('dist', { index: false }));

// retrieve all (*) data from the server to render on the index page
app.get('/*', (req, res) => {
   res.render('./index', {req, res});
});

// app to listen for requests on port defined already
app.listen(port, () => {
   console.log(`Listening on: http://localhost:${port}`);
});