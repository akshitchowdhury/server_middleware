import express from 'express'

import bodyParser from 'body-parser'
import {dirname} from 'path'
import {fileURLToPath} from 'url'

const app = express()
const _dirname = dirname(fileURLToPath(import.meta.url))
const port = 3000;
app.get("/", (req,res)=>{
    res.sendFile(_dirname+"/public/index.html")
})

app.use(bodyParser.urlencoded({extended:true}))

app.listen(port, ()=>{
    console.log(`listening to port ${3000}`)
})

app.post("/submit", (req,res)=>{
    console.log(req.body)
})