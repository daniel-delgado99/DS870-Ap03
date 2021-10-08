const express = require("express");
const app = express();

app.use(express.json());
app.use(express.urlencoded({extended: true}));

app.listen(process.env.SYSTEM_PORT, () => {
    console.log('listening on port', process.env.SYSTEM_PORT)
})

