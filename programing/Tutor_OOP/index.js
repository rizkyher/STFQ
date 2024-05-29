class program {
	constructor(frontend = 'tidak diketahui', backend = 'tidak diketahui'){
		this.frontend = frontend;
		this.backend = backend
	}


	run() {
		console.log(`Yang bertugas sebagai Frontend ialah ${this.frontend} dan yang bertugas menjadi Backend ialah ${this.backend}`)
	}
	getAnggota(){
		return this.frontend
	}
	getAnggota(){
		return this.backend
	}
};


class data extends program {
	constructor({frontend, backend,kantor,waktu}){
		super(frontend, backend)
		this.kantor = kantor
		this.waktu = waktu
	}

	getNama() {
		return this.frontend, this.backend
	}

	getAlamat(){
		return `saya tinggal di ${this.kantor}`
	}

	getTanggal(){
		return `saya ${this.frontend} bergabung pada tanggal ${this.waktu}`
	}

}
class master {
	constructor(nama , ilmu, penguasaan ){
		this.nama = nama
		this.ilmu = ilmu
		this.penguasaan = penguasaan
	}

	runn() {
		return `namanya ${this.nama} seorang yang sedang mempelajari ${this.ilmu}`
	}

	cek() {
		return `saat ini penguasaanya terhadap ${this.ilmu} ialah ${this.penguasaan}`
	}

}

const anggota = new program('rizky','lisa')

let number1 = new master('rizky herdiansyah','programing','200')

let baru = new data({
	frontend: 'rizky',
	backend: 'lisa',
	kantor:'Jl. Karasak Lama Cibintinu No 17',
	waktu:'14 Agustus 2004',
}) 
let rei = new data({
	frontend: 'randi',
	backend:'asep',
	kantor:'jl. babakan ciparay 2',
	waktu:'20 april 2023'
	
})

console.log(number1)

// console.log(rei)
// console.log(baru)

// console.log(baru.getTanggal())
// console.log(rei.getAnggota())
// class Car {
// 	constructor(owner = 'Tidak diketahui', name = 'Tidak diketahui') {
// 		this.owner = owner
// 		this.name = name

// 	}

// 	drive() {
// 		return `The ${this.name} car owned by ${this.owner} drives on the road`
// 	}

// 	getOwner() {
// 		return this.owner
// 	}

// 	getOwner() {
// 		return this.name
// 	}
// }

// class SportsCar extends Car {
// 	constructor({owner, name, color, price, engine}) {
// 		super(owner, name)
// 		this.color = color
// 		this.price = price
// 		this.engine = engine
// 	}

// 	getColor() {
// 		return this.color
// 	}
	
// 	getPrice() {
// 		const formattedPrice = new Intl.NumberFormat('en-US', {
// 			style: 'currency',
// 			currency: 'USD',
// 			minimumFractionDigits: 0
// 		}).format(this.price)
		
// 		return formattedPrice
// 	}
// 	getEngine() {
// 		return this.engine
// 	}
// }
// const myCar = new Car('Elon', 'Tesla Model S')

// console.log(myCar)
// // Car { owner: 'Elon', name: 'Tesla Model S' }

// myCar.drive()
// // The Tesla Model S car owned by Elon drives on the road

// console.log(myCar.getOwner())
// // Elon

// const coolCar = new SportsCar({
// 	owner: 'Starman',
// 	name: 'Tesla Roadster',
// 	color: 'Red',
// 	price: '200000', // USD
// 	engine: 'Electric'
//   })
  
//   console.log(coolCar)
//   // SportsCar { ... }
  
//   coolCar.drive()
//   // The Tesla Roadster car owned by Starman drives on the road
  
//   console.log(coolCar.getColor())
//   // Red
  
//   console.log(coolCar.getPrice())
//   // $200,000

                   



// console.log(rei.getTanggal())