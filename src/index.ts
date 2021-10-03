import express from 'express'
import cors from 'cors'
import urlController from '../src/controllers/URLController'
import MongoConnection from './database/MongoConnection'

const app = express()
app.use(express.json())
app.use(express.urlencoded({ extended: true }))

const database = new MongoConnection()
database.connect()

const PORT = process.env.PORT || 8080

app.use(cors())

app.get('/:title?/:hash', urlController.redirect)
app.post('/shorten', urlController.shorten)

app.listen(PORT, () => console.log(`App running on port http://localhost:${PORT}`))
