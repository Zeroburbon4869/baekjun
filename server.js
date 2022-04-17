const express = require("express");

const server = express();


server.listen(2000, () => {
    console.log("server start");
});

const users = [
    {
        id:"zeroburbon",
        name:"zero",
        email:"zeroburbon4869@gmail.com"
    },
    {
        id:"andang",
        name:"yujin",
        email:"andang4869@gmail.com"
    }
];

server.get("/api/user", (req,res) =>{
    res.json(users);
});