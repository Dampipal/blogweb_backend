const express = require('express');

const app = express();

const PORT = 3002

app.get('/',(req,res) =>{
    res.send('Welcome Blogweb Server')
})

app.listen(PORT ,()=>{
    console.log(`Server run on port ${PORT}`);
})