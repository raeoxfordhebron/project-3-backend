///////////////////////////////
// DEPENDENCIES
////////////////////////////////
require("dotenv").config()
const express = require("express")
const mongoose = require("./connection/db")
const PORT = process.env.PORT
const DATABASE_URL = process.env.DATABASE_URL
const cors = require("cors")
const morgan = require("morgan")
const bcrypt = require('bcryptjs')
const AuthRouter = require("./controllers/user")
const auth = require("./auth/index")

const app = express()

///////////////////////////////
// MiddleWare
////////////////////////////////
app.use(cors())
app.use(morgan("dev"))
app.use(express.json())


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
//
app.use("/auth", AuthRouter)

app.get("/", auth, (req, res) => {
  res.json(req.payload)
})

// Index Route
app.get("/places", async (req, res) => {
  try {
    res.json(await Places.find({}))
  } catch (error) {
    res.status(400).json(error)
  }
})

// Delete Route
app.delete("/places/:id", auth, async (req, res) => {
  try {
    res.json(await Places.findByIdAndRemove(req.params.id))
  } catch (error) {
    res.status(400).json(error)
  }
})

// Update Route
app.put("/places/:id", auth, async (req, res) => {
  res.json(await Places.findByIdAndUpdate(req.params.id, req.body, { new: true }))
})

// Create Route
app.post("/places", auth, async (req, res) => {
  try {
    res.json(await Places.create(req.body))
  } catch (error) {
    res.status(400).json(error)
  }
})

// Show Route
app.get("/places/:id", auth, async (req, res) => {
  try {
    res.json(await Places.findById(req.params.id))
  } catch (error) {
    res.status(400).json(error)
  }
})

///////////////////////////////
// User Routes
////////////////////////////////



///////////////////////////////
// LISTENER
////////////////////////////////

app.listen(PORT, () => console.log(`listening on PORT ${PORT}`))
