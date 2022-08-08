const express = require('express');
const bodyParser = require('body-parser');

const server = express();
const users = [];


server.use(bodyParser.json())
server.get('/users',(req,res,next) =>{
    return res.send(users);
} )


server.post('/users',(req,res,nest)=>{
    const user = req.body
    user.id = users.length + 1;
    users.push(user)
    return res.send(user)
})
server.listen(3000,()=> console.log('Server runnig on port 3000'));
