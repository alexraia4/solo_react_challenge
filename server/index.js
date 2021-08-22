const express = require('express');
const app = express();


const path = require('path');


//has to be after routes
app.use(express.static(__dirname + '/../build'))
app.get('*', (req, res) => {
     res.sendFile(path.join(__dirname, '../build/index.html')) 
})

app.listen(3101, () => {
      console.log(`Listening on port 3101`)
})