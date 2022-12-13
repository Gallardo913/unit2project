//import
require("dotenv").config()
const express = require("express")
const morgan = require("morgan")
const methodOverride = require("method-override")
const mongoose = require("mongoose")
const ejs = require("ejs");

//create express app
const app = express()

//establish mongo connection 
mongoose.connect(process.env.MONGO)

//mongoose connection events
mongoose.connection.on("open", () => console.log("Connected to Mongo"))
mongoose.connection.on("close", () => console.log("Disconnected to Mongo"))
mongoose.connection.on("error", (error) => console.log(error))

//register my middleware
app.use(morgan("dev"))
app.use("/static", express.static("public"))
app.use(express.urlencoded({extended: true}))
app.use(methodOverride("_method"))
// // app.use(
// //     session({
// //         secret : process.env.SECRET,
// //         store: MongoStore.create({ mongoUrl: process.env.MONGO }),
// //         saveUninitialized: true,
// //         resave: false,
// //     })
// );

// Routes and Routers
app.get("/", (req, res) => {
    res.send("<h1>Server is working</h1>")
})


const PORT = process.env.PORT || 3000
app.listen(PORT, () => console.log(`LOL, what's up ${PORT}`))