const express = require('express');

const routes = express.Router();


app.get('/', (req, res)=>{
  return res.json({msg: "hello World"});
})

module.exports = routes;