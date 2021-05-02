const mongoose = require('mongoose')
const Schema = mongoose.Schema

const barangSchema = new Schema({

    namaBarang : {
        type: String
    },
    jenisBarang : {
        type: String
    },
    ukuranBarang : {
        type: String
    },
    warnaBarang : {
        type: String
    },
    stokBarang : {
        type: Number
    },
    hargaBarang : {
        type: Number
    }
})

module.exports = mongoose.model('barang', barangSchema)