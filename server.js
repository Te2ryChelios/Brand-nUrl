const express = require('express')
const mongoose = require('mongoose')
const app = express() 
const ShortUrl = require('./models/shortUrl')
const cors = require('cors')
const validUrl = require('valid-url')

mongoose.connect('mongodb://localhost/urlShortener', {
    useNewUrlParser: true, useUnifiedTopology: true
})

app.set('view engine', 'ejs')
app.use(cors())
app.use(express.json())
app.use(express.urlencoded({extended: true}))



app.get('/', async (req, res) => {
    try{
        const urls = await ShortUrl.find().limit(10).sort({date: -1})
        res.json(urls)
    }catch(err){
        res.json({err:err})
    }
})

app.post('/shortUrl', async (req, res) => {
    try{
        const fullUrl = req.body.fullUrl
        if(validUrl.isUri(fullUrl)){
            const url = await ShortUrl.create({full: req.body.fullUrl})
            res.json(url)
        }else{
            res.json({err: 'Link required'})
        }
    }catch(err){
        res.json({err:err})
    }
})

app.get('/:shortUrl', async(req, res) => {
    const shortUrl = await ShortUrl.findOne({short: req.params.shortUrl })
    if(shortUrl == null) return res.sendStatus(404)
    shortUrl.clicks++
    shortUrl.save()

    res.redirect(shortUrl.full)
})

app.listen(process.env.PORT ||5000);  