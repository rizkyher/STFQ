//callback
// function halo(nama) {
//     alert(`halo ${nama}`);
// }
// //syncronus callback
// function tampilkanPesan(callback) {
//     const nama = prompt('Masukan nama : ');
//     callback(nama)
// }



// tampilkanPesan(nama => alert(`halo, ${nama}`))

// const menu =  [
//         {
//             "kategori": "Makanan",
//             "nama": "Indomie Goreng Aceh",
//             "deskripsi": "Indomie goreng rasa mie aceh",
//             "harga": 49500,
//             "gambar": "indomie_goreng-aceh.jpeg"
//         },
//         {
//             "kategori": "Makanan",
//             "nama": "Indomie kari ayam",
//             "deskripsi": "indomie kuah rasa kari ayam enak",
//             "harga": 40000,
//             "gambar": "indomie_matah.jpeg"
//         },
//         {
//             "kategori": "Makanan",
//             "nama": "Indomie Goreng rendang",
//             "deskripsi": "indomie goreng rasa Rendang sapi enak",
//             "harga": 40000,
//             "gambar": "indomie_goreng-rendang.jpeg"
//         }
      
        
//     ]
// console.log('mulai')
// menu.forEach(m => {
//     for(let i = 0 ; i < 100 ; i++) {
//         console.log(m.nama)
//     }
// });
// console.log('selesai')

//asyncronus callback
// //vanilla javascript
// function getDataMenu(url, success, error) {
//     let menu = new XMLHttpRequest();

//     menu.onreadystatechange = function () {
//         if (menu.readyState === 4) {
//             if (menu.status === 200) {
//                 success(menu.response);
//             } else if (menu.status === 400) {
//                 error();
//             }
//         }
//     }
//     menu.open('get', url);
//     menu.send()
// }

// console.log('mulai')
// getDataMenu('warung.json' , result => {
//     const menu = JSON.parse(result);
//     menu.forEach(m => console.log(m.nama))
// })
// console.log('selesai')

//JQuery
console.log('mulai')
$.ajax({
    url: 'warung.json',
    success: (menu) => {
        menu.forEach( m => console.log(m.nama))    
    },
    error: (e) => {
        alert(e.error)
    }
})
console.log('selesai')

// fetch('http://www.omdbapi.com/?apikey=dca61bcc&s=avengers')
//     .then(response => response.json())
//     .then(response => console.log(response))

//promise
// mempresentasikan keberhasilan / kegagalan sebuah event yang asyncronus
//janji (terpenuhi / ingkar)
//states (fullfiled / rejected / pending) 
//callback (resolve / reject / finally)
//aksi (then / catch)

//contoh 1
// let ditepati = true
// const janji1 = new Promise((resolve, reject) => {
//     if (ditepati) {
//         resolve('Janji telah ditepati')
//     } else {
//         reject('ingkar janji')
//     }
// });

// janji1
//     .then(response => console.log('OK! : ' + response))
//     .catch(response => console.log('NOT OK! :' + response))

//contoh 2
// let ditepati = false
// const janji2 = new Promise((resolve, reject) => {
//     if(ditepati) {
//         setTimeout(() => {
//             resolve("ditepati setelah beberapa waktu")
//         }, 2000)
//     } else {
//         setTimeout(() => {
//             resolve("tidak ditepati setelah beberapa waktu")
//         }, 2000)
//     }
// })

// console.log('mulai')
// // console.log(janji2.then(() => console.log(janji2)))

// janji2
//     .finally(() => console.log('selesai menunggu'))
//     .then(response => console.log('OK! : ' + response))
//     .catch(response => console.log('NOT OK! :' + response))

// console.log('selesai')


//promise.all()

// const film = new Promise(resolve => {
//     setTimeout(() => {
//         resolve([{
//             judul: 'the game',
//             sutradara: 'rizky her',
//             aktor: 'herdi, obet'
//         }])
//     },1000)
// });

// const cuaca = new Promise(resolve => {
//     setTimeout(() =>
//     resolve([{
//         kota: 'bandung',
//         temperatur: 26,
//         kondisi: 'cerah'
//     }]))
// }, 500)

// //: http://www.omdbapi.com/?i=tt3896198&apikey=ab703033
// // film.then(response => console.log(response))
// // cuaca.then(response => console.log(response))

// Promise.all([film, cuaca])
//     .then(response => {
//         const [film, cuaca] = response;
//         console.log(film)
//         console.log(cuaca)
//     })
