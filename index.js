import dotenv from 'dotenv'
dotenv.config()
import express from 'express'
import connection from './db/connectdb.js'
import router from './routes/url.route.js'
const app=express()
const PORT=process.env.PORT || 6000
const uri=process.env.DATABASE_URI
const DB_NAME=process.env.DATABASE_NAME

// db connection
connection(uri)


// middleware---
app.use(express.json())
app.use(express.urlencoded({extended:false}))

// static files

app.use(express.static('public'))

// view engine
app.set('view engine',"ejs")

// load route--
app.use('/',router)

app.listen(PORT,()=>console.log('server runing at'+PORT))