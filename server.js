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
// ROUTES
////////////////////////////////

app.get("/", (req, res) => {
    res.send("Hello World")
})

// Index Route


// Delete Route


// Update Route


// Create Route


// Show Route


///////////////////////////////
// LISTENER
////////////////////////////////

app.listen(PORT, () => console.log(`listening on PORT ${PORT}`))
