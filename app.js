const express = require('express')
const app = express()
const port = 3000

app.use("/", (req, res) => {
	res.send("Hello world");
})

app.listen(port, () => {
	console.log(`Run at http://localhost:${port}`)
})

module.exports = app