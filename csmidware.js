import express from 'express'


const app = express()
const port = 3000;

function logger (req, res, next) {

console.log("Request url :"+ req.url)
console.log("Request method :"+req.method)
next()
}

app.use(logger)

app.get("/", (req,res)=>{
    req.send("Hello")
})

app.listen(port, ()=>{
    `listening on ${port}`
})