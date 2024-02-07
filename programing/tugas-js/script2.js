//let mahasiswa = { 
 //   nama : "rizky herdiansyah",
   // nrp : "098989",
    //mail : "rizkyherdiansyah31@gmail.com"
//}
//console.log(JSON.stringifystringify(mahasiswa))


/*let xhr = new XMLHttpRequest ();
xhr.onreadystatechange = function () {
    if(xhr.readyState == 4 && xhr.status == 200) {
        let mahasiswa = JSON.parse(this.responseText);
        console.log(mahasiswa)
    }
}
xhr.open('GET', 'coba.json', true );
xhr.send();*/
/*$.getJSON('coba.json', function (data) {
    console.log(data)
})*/

$.getJSON('pizza.json', function(data) {
    let menu = data.menu;
    $.each(menu, function(i, data){
        $('#daftar-menu').append('<div class="row" id="daftar-menu"><div class="col-md-2 "><div class="card mb-3"><img src="img/pizza/' + data.gambar +'" alt=""><div class="card-body"><h5 class="card-title">'+ data.nama +'</h5><p class="card-text">'+ data.deskripsi +'</p><h5 class="card-title">'+ data.harga +'</h5><a href="" class="btn btn-primary">pesan sekarang</a></div></div></div></div>')
    });
});