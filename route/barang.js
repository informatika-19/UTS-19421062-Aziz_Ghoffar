  
const router = require('express').Router()
const barangController = require('../controller/barang')

router.post('/tambah', (req, res)=> {
    barangController.tambah(req.body)
      .then(result =>res.json(result))
      .catch(err => res.json(err))
})


router.get('/lihat', (req, res)=> {
    barangController.menampilkanSemuaData(req.body)
      .then(result =>res.json(result))
      .catch(err => res.json(err))
})


router.get('/lihat/:id', (req, res)=> {
    barangController.melihatDataBedasarkanId(req.params.id)
      .then(result =>res.json(result))
      .catch(err => res.json(err))
})


router.put('/ubah/:id', (req, res)=> {
    barangController.ubah(req.params.id, req.body)
      .then(result =>res.json(result))
      .catch(err => res.json(err))
})

router.delete('/hapus/:id', (req, res)=> {
    barangController.hapus(req.params.id)
      .then(result =>res.json(result))
      .catch(err => res.json(err))
})

module.exports = router