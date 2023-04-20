const express = require('express')
const app = express()
const bodyParser = require('body-parser');
const proxy = require('express-http-proxy')

// Define the URL paths for each microservice
const contactServiceUrl = 'http://localhost:3001';
const userSeviceUrl = 'http://localhost:3002';
// Define the routes for the API Gateway
app.use(bodyParser.json());

// Proxy routes for the contact microservice
app.use('/v1/send-emails', proxy(contactServiceUrl, {
    proxyReqPathResolver: (req) => {
        return `/v1/send-emails`;
    }
}));
app.use('/v1/getAllMails', proxy(contactServiceUrl, {
    proxyReqPathResolver: (req) => {
        return `/v1/getAllMails`;
    }
}));
app.use('/v1/delete/:id', proxy(contactServiceUrl, {
    proxyReqPathResolver: (req) => {
        return `/v1/delete/${req.params.id}`;
    }
}));
app.use('/v1/getUsers', proxy(userSeviceUrl, {
    proxyReqPathResolver: (req) => {
        return `/v1/getUsers`;
    }
}));

module.exports = app
