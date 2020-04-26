const express = require('express')
const app = express()
const router = new express.Router()


app.use(express.json())
app.use(router)

const corsConfig = function(req, res, next) {
    res.header('Access-Control-Allow-Origin', 'http://localhost:8080')
    res.header('Access-Control-Allow-Credentials', true)
    res.header('Access-Control-Allow-Methods', 'GET,HEAD,OPTIONS,POST,PUT')
    res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept, Authorization')
    next()
}
app.use(corsConfig);


router.get("/stocks", async (req, res) => {
    return res.status(200).send([])
})

// start listening
app.listen(3003, () => {
    console.log("Server is up on port", 3003)
})