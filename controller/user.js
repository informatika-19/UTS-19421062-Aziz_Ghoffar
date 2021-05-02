const usermodel = require('../model/user')
const bcrypt = require('bcrypt')

exports.register = (data) =>
new Promise((resolve, reject) => {
 console.log(data)
// untuk mencari satu data
usermodel.findOne({
    username: data.username
}).then(adauser => {
    if (adauser) {
        resolve({
            status: false,
            pesan: 'Username Sudah Terdaftar'
        })
    }else {
       bcrypt.hash(data.password, 10, (err, hash) => {
           data.password = hash
           // untuk menginput data/ create
           usermodel.create(data)
                .then(() => {
                    // console.log('berhasil')
                    resolve({
                        status: true,
                        pesan: 'Berhasil Registrasi'
                    })
                }).catch((e) => {
                    //console.log(e)
                    // console.log('gagal insert')
                    reject({
                        status: false,
                        pesan: 'Gagal Registrasi'
                    })
                })
       })
    }
})
})


exports.getalldata = () =>
    new Promise((resolve, reject) => {
        usermodel.find()
        .then(result => {
          resolve({
            status: true,
            pesan: 'Berhasil Menampilkan Data User',
            data: result
          })
        }).catch(() => reject({
            status: false,
            pesan: 'Gagal Menampilkan Data User',
            data: []
        }))
    })

exports.login = ( data) =>
new Promise((resolve, reject) =>{
    usermodel.findOne({
        username: data.username
    }).then(user => {
        if (user) {
            if (bcrypt.compareSync(data.password, user.password)){
                resolve({
                    status: true,
                    pesan: 'Berhasil Login Akun'
                })
            }else {
                reject ({
                    status: false,
                    pesan: 'Gagal Login Akun'
                })
            }
        }else {
            reject ({
                status: false,
                pesan: 'Username Tidak Terdaftar'
            })
        }
    })

})