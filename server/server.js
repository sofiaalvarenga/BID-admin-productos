require('dotenv').config()
const express = require('express');
const app = express();
const cors = require('cors');
const port = process.env.PORT; 

require('./config/mongoose.config');

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
require('./routes/product.routes')(app);

app.listen(port, () => {
    console.log(`Listening at Port ${port}`)
});