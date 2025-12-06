require('dotenv').config()

const http = require('http')
const app = require('./app')

const port = process.env.PORT || 8080; // Capital PORT is standard
const host = process.env.host


const server = http.createServer(app)

server.listen(port,()=>{
    console.log(`Server started as ${host}:${port} , Players Server`);
})
