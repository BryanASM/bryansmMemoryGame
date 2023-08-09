const express = require('express');
const app = express();
const port = 3000;

app.get('/cards', (request, response) => {
    console.log(request);
    console.log(request);
    response.send('Cards list');
});

app.get('/scores', (request, response) => {
    console.log(request);
    console.log(request);
    response.send('Scores list');
});

app.listen(port, () =>{

    console.log(`Example app listening on port ${port}`)

});
