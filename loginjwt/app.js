const express = require('express');
const app = express();
const db = require('./db');
const port = 5000;
const cors = require('cors');
app.use(cors());

const AuthController = require('./controller/authController7');
app.use('/api/auth',AuthController);

app.listen(port,() => {
    console.log(`Running on port ${port}`)
})
console.log("Prabhakar")