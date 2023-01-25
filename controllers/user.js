const User = require("../models/user")
const {Router} = require("express")
const router = Router()
const bcrypt = require("bcryptjs")

router.post("/signup", async (req, res) => {
    req.body.password = await bcrypt.hash(req.body.password, 10)
    const newUser = await User.create(req.body)
    res.json(newUser)
})



module.exports = router