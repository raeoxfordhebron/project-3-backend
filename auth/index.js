require("dotenv").config()
const {SECRET} = process.env
const jwt = require("jsonwebtoken")

const auth = async (req, res, next) => {
    try {
    // Authorization: "bearer {token}"
    if(req.headers.authorization){
        const token = req.headers.authorization.split(" ")[1]
        console.log(token)
        const payload = await jwt.verify(token, SECRET)
        console.log(payload)
        if(payload){
            req.payload = payload
            next()
        } else {
            res.status(400).json({error: "Verification Failed"})
        }
    } else {
        res.status(400).json({error: "No Authorization Header"})
    }} catch (error){
        res.status(400).json({error})
    }
}

module.exports = auth