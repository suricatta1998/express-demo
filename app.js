const express = require('express')

const app = express()
const port = process.env.PORT || 3000
const host = process.env.HOST || ''
app.get('/', (req, res) => {
	res.send('Hello World!')
})

app.listen(port, () => console.log(`Server is running in port ${port}`))