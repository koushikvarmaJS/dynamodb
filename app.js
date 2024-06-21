const express = require('express')
const app = express()
const createDynamoDbService = require('./services')
const route = require('./route')
const dynamoDbService = createDynamoDbService()

app.use(express.json())
app.use('/api',route)

app.get('/', (req,res) => {
    res.send("Home");
})

app.listen(3000, () => {
    console.log('Server is running on port 3000 lad')
})