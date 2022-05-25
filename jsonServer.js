// server.js
const express = require('express');
const app = express();
app.use(express.static('public'));
app.listen(3100,() =>{
  console.log("public on port: 3100")
})

const path = require('path')
const jsonServer = require('json-server')
const server = jsonServer.create()
const router = jsonServer.router(path.join(__dirname, 'db.json'))
const middlewares = jsonServer.defaults()

server.use(middlewares)
server.use(router)
server.listen(3000, () => {
  console.log('JSON Server is running: 3000')
})