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

const anggota = new program('rizky','lisa')

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

let number1 = new master ({
	nama: 'rizky herdiansyah',
	ilmu: 'programing',
	penguasaan: '200',
})

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
// console.log(rei.getTanggal())