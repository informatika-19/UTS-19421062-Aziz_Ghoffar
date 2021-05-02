const express = require('express')
const app = express()
const bodyParser = require('body-parser')
const mongoose = require('mongoose')


mongoose.connect('mongodb://localhost:27017/uts_gopar', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  useFindAndModify: false,
  useCreateIndex: true
}).then(() => {
  console.log('Berhasil Terkoneksi Ke Database')
}).catch((e) => {
  console.log(e)
  console.log('Gagal Terkoneksi Ke Database')
})

app.use(bodyParser.json({
  extended: true,
  limit:'20mb'
}))

app.use(bodyParser.urlencoded({
  extended: true,
  limit:'20mb'
}))


app.use('/barang', require('./route/barang'))
app.use('/user', require('./route/user'))

app.listen(3000, ()=> {
    console.log('server on port 3000')
})