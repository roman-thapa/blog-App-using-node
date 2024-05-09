const express = require('express')
const morgan = require('morgan')
const mongoose = require('mongoose')
const Blog = require('./models/blog')
const blogRoutes = require('./routes/blogRoutes')

// express app
const app = express()

//connect to mongodb
const mdbURL = 'mongodb+srv://roman:qwertyasd@cluster0.ugrsvfq.mongodb.net/'

mongoose.connect(mdbURL)
    .then(result => app.listen(3000))
    .catch(err => console.log(err))

// register view engin
app.set('view engine', 'ejs');

// listen for request



// middleware & static app
app.use(express.static('public'))
app.use(express.urlencoded({ extended : true}))
app.use(morgan('dev'))


// routes
app.get('/', (req, res) => {
    res.redirect('/blogs')
})

app.get('/about', (req, res) => {
    res.render('about', { title: "About" })

})

// blog routes
app.use('/blogs', blogRoutes);

// 404 not found
app.use((req, res) => {
    res.status(404).render('404', { title: "404" })
})