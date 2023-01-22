///////////////////////////////
// DEPENDENCIES
////////////////////////////////
require("dotenv").config()
const express = require("express")
const mongoose = require("mongoose")
const PORT = process.env.PORT
const DATABASE_URL = process.env.DATABASE_URL
const cors = require("cors")
const morgan = require("morgan")

const app = express()

///////////////////////////////
// MiddleWare
////////////////////////////////
app.use(cors())
app.use(morgan("dev"))
app.use(express.json())

///////////////////////////////
// DATABASE CONNECTION
////////////////////////////////
mongoose.connect(DATABASE_URL)

mongoose.connection
  .on("open", () => console.log("You are connected to mongoose."))
  .on("close", () => console.log("You are disconnected from mongoose."))
  .on("error", (error) => console.log(error))

///////////////////////////////
// MODELS
///////////////////////////////

const PlaceSchema = new mongoose.Schema({
  place: String,
  cityState: String,
  address: String,
  url: String,
  image: String,
  notes: String,
})

const Places = mongoose.model("Places", PlaceSchema)

///////////////////////////////
// ROUTES
////////////////////////////////
app.get("/", (req, res) => {
  res.send("Hello World")
})

// Index Route

// Delete Route
app.delete('/places/:id', async (req, res) => {
  try{
    res.json(await Places.findByIdAndRemove(req.params.id))   
  }catch(error){
    res.status(400).json(error)
  }
})


// Update Route
app.put('/places/:id', async (req, res) => {
  res.json(await Places.findByIdAndUpdate(req.params.id, req.body, { new:true}))
})

// Create Route

// Show Route

///////////////////////////////
// LISTENER
////////////////////////////////

app.listen(PORT, () => console.log(`listening on PORT ${PORT}`))
