const express = require('express');
const cors = require('cors');
const app = express();
const port = 3000;

app.use(cors());

app.get('/cards/:difficulty/:theme', (request, response) => {
    if (request.params !== null) {
        if (request.params.difficulty !== null && request.params.type !== null) {
            const difficulty = request.params.difficulty;
            const type = request.params.difficulty.type;
            console.log(difficulty);
        }
    }

    response.send(cards);
});

app.get('/scores', (request, response) => {
    console.log(request);
    console.log(request);
    response.send('Scores list');
});

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`);
});

var cards = `
{
    "cards": [
        {
            "isDiscovered": false,
            "icon": "🥜",
            "id": 49
        },
        {
            "isDiscovered": false,
            "icon": "🍏",
            "id": 0
        },
        {
            "isDiscovered": false,
            "icon": "🥝",
            "id": 16
        },
        {
            "isDiscovered": false,
            "icon": "🥝",
            "id": 16
        },
        {
            "isDiscovered": false,
            "icon": "🥭",
            "id": 13
        },
        {
            "isDiscovered": false,
            "icon": "🥭",
            "id": 13
        },
        {
            "isDiscovered": false,
            "icon": "🍉",
            "id": 6
        },
        {
            "isDiscovered": false,
            "icon": "🥒",
            "id": 22
        },
        {
            "isDiscovered": false,
            "icon": "🍹",
            "id": 56
        },
        {
            "isDiscovered": false,
            "icon": "🥜",
            "id": 49
        },
        {
            "isDiscovered": false,
            "icon": "🍹",
            "id": 56
        },
        {
            "isDiscovered": false,
            "icon": "🍏",
            "id": 0
        },
        {
            "isDiscovered": false,
            "icon": "🥎",
            "id": 53
        },
        {
            "isDiscovered": false,
            "icon": "🍉",
            "id": 6
        },
        {
            "isDiscovered": false,
            "icon": "🥎",
            "id": 53
        },
        {
            "isDiscovered": false,
            "icon": "🥒",
            "id": 22
        }
    ]
}
`