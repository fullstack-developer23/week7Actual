const express = require("express");

const app = express();

app.use("/movies", express.static("movies"));

app.listen(5001, () =>{
    console.log("Server listening on port 5001");
})