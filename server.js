const express = require('express')
const graphqlHTTP = require('express-graphql')
const schema = require('./schema')
const app = express()
const cors = require('cors')
const path = require('path')

const PORT = process.env.PORT || 5000 

app.use(cors())

app.use('/graphql', graphqlHTTP({
    schema,
    graphiql: true
}))

app.use(express.static('public'))

app.get('*', (req, res) => {
    res.sendFile(path.resolve(__dirname, 'public', 'index.html'))
})

app.listen(PORT, () => {
    console.log(`Running on PORT: ${PORT}`)
})