const express = require('express');

const port = 3000 || process.env.PORT;
const app = express();

// use ejs javascript templating to render data.
app.engine('html', require('ejs').renderFile);

// render html on the server
app.set('view engine', 'html');
app.set('views', 'dist');

app.use('/', express.static('dist', { index: false }));

app.get('/*', (req, res) => {
   res.render('./index', {req, res});
});

app.listen(port, () => {
   console.log(`Listening on: http://localhost:${port}`);
});