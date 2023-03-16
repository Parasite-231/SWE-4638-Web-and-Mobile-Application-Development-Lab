

const express = require('express');
const mysql = require('mysql');
const bodyParser = require('body-parser');
const cors = require('cors');
const app = express()
app.use(cors())
app.use(express.json())

app.use(bodyParser.urlencoded({extended:true}))



const db = mysql.createPool({

  host: "localhost",
  user: "root",
  password: '',
  database : 'CRUDDatabase'

})


app.get("/bookList",(req,res)=>{

  const sqlRetrieve = "SELECT * FROM LIBRARY "
  db.query(sqlRetrieve,(err,result)=>{
    console.log(result)
    res.send(result)

  })


})


app.post("/insert",(req,res)=>{

  const name = req.body.name
  const author = req.body.author
  const genre = req.body.genre

  const sqlInsert = "INSERT INTO LIBRARY (name,author,genre) VALUES (?,?,?)"
  db.query(sqlInsert,[name,author,genre],(err,result)=>{
    console.log(err)
  })

})

app.delete("/delete/:name",(req,res)=>{

  const name = req.params.name
 
  const sqlDelete = "DELETE FROM LIBRARY WHERE name = ?"

  db.query(sqlDelete,name,(err,result)=>{

    if(err){
    console.log(err)
    }
  })

})

// app.put("/update",(req,res)=>{

//   const name = req.body.name
//   const author = req.body.author
//   const genre = req.body.genre
 
//   const sqlUpdate = "UPDATE SET LIBRARY name = ? , author = ?, genre = ? WHERE name = ?"

//   db.query(sqlUpdate,[name,author,genre],(err,result)=>{

//     if(err){
//     console.log(err)
//     }
//   })

// })

app.listen(3001,()=>{

  console.log("App listening to port : 3001")

})