//CommonJS modules
const express = require('express')
const app = express()
const cors = require('cors')
const MongoClient = require('mongodb').MongoClient
require('dotenv').config()

let dbName = "eso-lore", dbConnectionString = process.env.DB_STRING
let db

//function call to connect to database
connectDB()

//Middlewares
app.set('view engine', 'ejs')
app.use(cors())
app.use(express.static('public'))
app.use(express.json())
app.use(express.urlencoded({ extended: true }))

//=======
//Routes
//=======

// send index.html on root request
app.get('/', (req, res) => {
    res.sendFile(__dirname + '/index.html')
})

// send entire db on /lorebook request
app.get('/lorebook', async (req, res) => {
    try {
        let books = await db.collection(dbName).find().toArray()
        res.json(books)
    } catch (err) {
        console.error(err)
    }

})

//send books of category when requested by category name
app.get('/lorebook/category/:category', async (req, res) => {
    try {
        let categoryReq = req.params.category
        let books = await db.collection(dbName).findOne().toArray
        books = books.filter(book => book.category === categoryReq)
        res.json(books)
    } catch (err) {
        console.error(err)
    }
})

//send the requested book when requested by book name
app.get('/lorebook/book/:bookName', async (req, res) => {
    try {
        let reqName = req.params.bookName
        let book = await db.collection(dbName).findOne({ name: reqName })
        res.json(book)
    } catch (err) {
        console.error(err)
    }
})

//page to add or remove data from database
app.get('/addremove', async (req, res) => {
    try {
        let bookCollection = await db.collection(dbName).find().toArray()
        res.render('index.ejs', { books: bookCollection })
    } catch (err) {
        console.error(err)
    }
})

//POST request to add a book
app.post('/addbook', async (req, res) => {
    try {
        let obj = req.body
        for (key in obj) {
            obj[key] = obj[key].toLowerCase().trim()
        }
        let response = await db.collection(dbName).insertOne(obj)
        console.log(response)
        res.redirect('/addremove')
    } catch (err) {
        console.error(err)
    }

})

//DELETE request to delete a book
app.delete('/deletebook', async (req, res) => {
    try {
        let response = await db.collection(dbName).deleteOne(req.body)
        res.json('Book Deleted')
    } catch (err) {
        console.error(err)
    }
})

//PUT request to update missing entries
app.put('/updatedetails', async (req, res) => {
    try {
        let response
        let obj = req.body

        //update author if author isn't an empty string
        if (obj.author !== '') {
            response = await db.collection(dbName).updateOne({
                name: obj.name
            }, {
                $set: {
                    author: obj.author
                }
            })
            console.log(response)
        }
        //update location if location isn't an empty string
        if (obj.location !== '') {
            response = await db.collection(dbName).updateOne({
                name: obj.name
            }, {
                $set: {
                    location: obj.location
                }
            })
            console.log(response)
        }
        //update category if category isn't an empty string
        if (obj.category !== '') {
            response = await db.collection(dbName).updateOne({
                name: obj.name
            }, {
                $set: {
                    category: obj.category
                }
            })
            console.log(response)
        }
        res.json('Update Complete!')
    } catch (err) {
        console.error(err)
    }

})

// Connecting to DATABASE
async function connectDB() {
    try {
        const client = await MongoClient.connect(dbConnectionString, { useUnifiedTopology: true })
        console.log('Connected to database')
        db = client.db(dbName)
    } catch (err) {
        console.error(err)
    }
}

const PORT = 8000
//listening to requests on PORT
app.listen(process.env.PORT || PORT, () => {
    console.log(`Listening on port: ${PORT}`)
})