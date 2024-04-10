import express from "express"

const app = express()
app.use(express.json())

app.get("/",(req,res)=>{
    res.send("Hola mundo")
})

app.listen(3001, ()=>{
    console.log("Running on port: ", 30001)
})