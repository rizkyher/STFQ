//simpan nama di array
const names = ['rizky', 'wapdan','uwan','albab'];

//mengatur nama / memanage nama
const showName = names => {
  //looping nama di array
  for(let i = 0; i < names.length; i++){
    //nama dan names itu beda
    const name = names[i]

    // log name dan indexnya di waktu yang sama 
    console.log(`[${i + 1}] ${name}`)
  }
}

//panggil functionnya
// showName(names)

const filterNames = (names, minimumLength) => {
  let newNames = []
  for(let i = 0; i < names.length; i++) {
    const name = names[i]

    if(name.length >= minimumLength) {
      newNames.push(name)
    }
  }

  //return nama yang difilter
  return newNames
}

//filterednames dan filtername itu beda
const filteredNames = filterNames(names, 5)

// console.log(names)

// console.log(filteredNames)

// showName(filteredNames)

// // Load the full build.
// var _ = require('lodash');
// // Load the core build.
// var _ = require('lodash/core');
// // Load the FP build for immutable auto-curried iteratee-first data-last methods.
// var fp = require('lodash/fp');

// // Load method categories.
// var array = require('lodash/array');
// var object = require('lodash/fp/object');

// // Cherry-pick methods for smaller browserify/rollup/webpack bundles.
// var at = require('lodash/at');
// var curryN = require('lodash/fp/curryN');
// const SuperArray = require('super-array');
// array objek
const myKontak = ([
  {
    id: 1,
    name: 'Rizky Herdiansyah', 
    phone: '+62 851 6355 4496', 
    email: 'rizkyherdiansyah31@gmail.com', 
    favorite: 'true', 
    rating: 9, 
    tags: ['tamvan','berani']
  },
  {
    id: 2,
    name: 'Yukihira Shouma', 
    phone: '+62 851 6544 4511', 
    email: 'shouma@gmail.com'
  },
  {
    id: 3,
    name: 'Takatou Soujiro', 
    phone: '+62 851 5411 8544', 
    email: 'souji@gmail.com'
  },
  {
    id: 4,
    name: 'Sakata Gintoki', 
    phone: '+62 851 8466 8799', 
    email: 'gintama@gmail.com'
  },  {
    id: 5,
    name: 'Monkey D. Luffy', 
    phone: '+62 851 6544 4511', 
    email: 'mugiwara@gmail.com'
  }
])

const showKontaks = kontaks => {
  for(let i = 0; i < kontaks.length; i++) {
    const kontak = kontaks[i]
    console.log(
      `[${kontak.id}] ${kontak.name} (${kontak.phone}) <${kontak.email}>`
    )
  }
}

// showKontaks(myKontak)

const filterKontak = (kontaks, nomor) => {
  let newKontak = []
  for(let i = 0; i < kontaks.length; i++) {
    const kontak = kontaks[i]

    if(kontak.phone === nomor) {
      // alert('masuk')
      newKontak.push(kontak)
    }
  }

  //return nama yang difilter
  return newKontak
}



const kontakFilter = filterKontak(myKontak, '+62 851 6544 4511')

// console.log()
// showKontaks(kontakFilter)



//array sort

const numbers = [1,40,15,2]

const compareNumeric = (a, b) => {
  if (a > b) return 1
  if (a == b) return 0
  if (a < b ) return -1
}

numbers.sort(compareNumeric)

//array map
const characters = ['bilbo', 'Gandalf', 'Sauron']

const charactersCool = characters.map(item => {
  return `${item} is cool`
})
const lengths = characters.map(item => item.length)



//array find
const pengguna = [
  {id:1, name: 'Rizky', umur: '20'},
  {id:2, name: 'lis', umur: '19'},
  {id:3, name: 'Hamdan', umur: '22'}
]

const user = pengguna.find(item => item.id)

const newUser = pengguna.filter(item => item.id)

let baru = pengguna.find((o, i) => {
  if (o.name === 'lis') {
    pengguna[i] = {id:2, name : 'Lisa' , umur : '20'}
    return true
  }
})


let obj = pengguna.find(x => x.name === 'Rizky');
let index = pengguna.indexOf(obj);
pengguna.fill(obj.name='herdians', index, index++);
 console.log(obj)

// console.log(myKontak.get('+62 851 6544 4511'))
// console.log(user)
// console.log(user.name)

// console.log(lengths)
// console.log(charactersCool)
// console.log(numbers)