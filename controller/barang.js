const barangModel = require('../model/barang')
const objectId = require('mongoose').Types.ObjectId


exports.tambah = (data)  =>
new Promise((resolve, reject)=> {
    barangModel.create(data)
      .then(()=> resolve({
        status : true,
        pesan : 'Berhasil Input Data Barang'
      })).catch(()=> ({
        status : false,
        pesan : 'Gagal Input Data Barang'
      }))
  })

  exports.menampilkanSemuaData = () =>
    new Promise((resolve, reject) => {
        barangModel.find()
        .then(result => {
          resolve({
            status: true,
            pesan: 'Berhasil Menampilkan Data Barang',
            data: result
          })
        }).catch(() => reject({
            status: false,
            pesan: 'Gagal Menapilkan Data Barang',
            data: []
        }))
    })

    exports.melihatDataBedasarkanId = (id) =>
    new Promise((resolve, reject) => {
        barangModel.findOne({
        _id: objectId(id)
    }).then(result => {
      resolve({
        status: true,
        pesan: 'Berhasil Menampilkan Data Barang',
        data: result
      })
    }).catch(() => reject({
      status: false,
      pesan: 'Gagal Menapilkan Data Barang',
      data: null
  }))
})

exports.ubah = (id, data) => 
  new Promise ((resolve, reject) => {
    barangModel.updateOne({
      _id: objectId(id)
    }, data).then(() => resolve({
        status: true,
        pesan: 'Berhasil Mengubah Data Barang'
    })).catch(() => reject({
        status: false,
        pesan: 'Gagal Mengubah Data Barang'
    }))
})

exports.hapus = (id) =>
  new Promise((resolve, reject) => {
    barangModel.deleteOne({
      _id: objectId(id)
    }).then(() => resolve ({
      status: true,
      pesan : 'Berhasil Menghapus Data Barang'
    })).catch(() => reject({
      status: false,
      pesan: 'Gagal Menghapus Data Barang'
  }))
})