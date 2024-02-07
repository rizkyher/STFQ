const tambah = document.querySelector("#tambah");
const simpan = document.querySelector("#simpan");
const hapus = document.querySelector("#hapus");
const hasil = document.querySelector("#hasil");

if (localStorage.getItem('data') = null ) {
    localStorage.setItem('data', '[]');
}

simpan.onclick = () => {

    if (tambah.value == '') return tambah.focus();

    let penyimpanan = JSON.parse(localStorage.getItem('data'));
    penyimpanan.push(' ${tambah.value}');

    localStorage.setItem('data', JSON.stringify(penyimpanan));

    hasil.innerHTML = JSON.parse(localStorage.getItem('data'));
    tambah.value = '';
    tambah.focus();
}

hapus.onclick = 