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
const SECRET = process.env.SECRET
const jwt = require("jsonwebtoken")

const app = express()

///////////////////////////////
// MiddleWare
////////////////////////////////
app.use(cors())
app.use(morgan("dev"))
app.use(express.json())
app.use(express.urlencoded({extended: false}))


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
const User = require("./models/user")

app.post("/signup", async (req, res) => {
  try {
  req.body.password = await bcrypt.hash(req.body.password, 10)
  console.log("password hashed", req.body)
  const newUser = await User.create(req.body)
  console.log(newUser)
  res.status(200).json(newUser)
  } catch (error) {
      res.status(400).json(error)
  }
})

app.post("/login", async (req, res) => {
  try {
  const {username, password} = req.body
  const user = await User.findOne({username})
  if (user) {
      const match = await bcrypt.compare(password, user.password)
      console.log(match)
      if(match){
          const token = await jwt.sign({username}, SECRET)
          res.status(200).json({token})
      } else {
          res.status(400).json({error: "Password Does Not Match"})
      }
  }  else {
      res.status(400).json({error: "User Does Not Exist"})
  }
  } catch(error) {
      res.status(400).json(error)
  }
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
