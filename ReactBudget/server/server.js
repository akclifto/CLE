/* very basic server setup with express, author choosing not to go into a lot of detail. node/express is a deep topic */
const path = require('path');
const express = require('express');
const app = express();
const publicPath = path.join(__dirname, '..', 'public');

//middleware:  some code that runs for each request. set it up with app.use();
app.use(express.static(publicPath));

app.get('*', (req, res) => {
    res.sendFile(path.join(publicPath, 'index.html'));
});

// start the server
app.listen(3000, () => {
    console.log('server is working and up');
});
