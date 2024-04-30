const express = require('express');
const request = require('request');
const bodyParser = require('body-parser');
const path = require('path');
const {error}=require('console');
const app = express();
app.use(express.json());

// // Bodyparser Middleware
app.use(bodyParser.urlencoded({ extended: false }));

// // Static folder
app.use(express.static(path.join(__dirname, 'public')));

// // Signup Route
app.post('/index', (req, res) => {
    const { email,js  } = req.body;
    let message;
    console.log(req.body);
    const data = {
        members: [
            { email_address: email, status: 'subscribed' }
        ]
    }

    const postData = JSON.stringify(data);

    const options = {
        url: 'https://us21.api.mailchimp.com/3.0/lists/e0b748b00d', // Il faut changer e0b748b00d par rapport à votre compte mailchimp
        method: 'POST',
        headers: {
            Authorization: 'auth 7375fdc2acc192f0eb375f065efab5dd-us21' // Il faut changer auth par rapport à votre compte mailchimp
        },
        body: postData
    }

    if (email) {
        request(options, (err, response, body) => {
            if (err) { res.json({error: err}); }
            else { 
                if (js) { res.sendStatus(200); } 
                else { res.redirect('/index.html'); }
            }
        });
    } else {
        res.status(404).send({message: 'Failed'});
    }
});

const PORT = process.env.PORT || 8080; // Il est sur le port 8080

app.listen(PORT, () => console.log(`Server started on ${PORT}`));