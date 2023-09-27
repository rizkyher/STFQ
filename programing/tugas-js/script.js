function pengecekan(waktu) {
    let hourIn = waktu;
    let hourStart = 8;
    let hourEnd = 18
    if (hourIn >= hourStart && hourIn <= hourEnd) {
        alert("berhasil masuk");
        document.getElementById("hasil").innerHTML = ("berhasil masuk")
    }
    else {
        alert("maaf klinik tutup")
        document.getElementById("hasil").innerHTML = ("masih tutup")
    }
}
pengecekan(7)