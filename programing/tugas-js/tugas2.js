/*const nama = document.getElementById("username");
const password = document.getElementById("password");

const arrUsername = []
const arrPassword = []

function register() {
    const nama = document.getElementById("username");
    const password = document.getElementById("password");
        if (arrUsername != nama.value && arrPassword != nama.value ){
            if (arrUsername.includes(nama.value)) {
                alert("username sudah ada")
            }else {
                arrPassword.push(password.value);
                arrUsername.push(nama.value);
                alert("berhasil daftar");
                console.log(arrUsername)
            // window.location.replace("tugas2.html")
            }
        } else {
            alert("harap isi data dengan lengkap")
        }
}

function login() {
    const nama = document.getElementById("username");
    const password = document.getElementById("password");
    if (arrUsername.includes(nama.value) ){
        if(arrPassword.includes(password.value)){
            //window.location.replace("tugas2.html")
            alert("Berhasil Login")
        } else {
            alert("password salah")
        }
    } else {
        alert("username belum terdaftar. Harap daftar dahulu")
    }
    console.log(arrUsername)
}

function logout(){
    if (arrUsername.includes(nama.value)){
    arrUsername.length = 0;
    arrPassword.length = 0; 
    alert("anda telah Logout")
    } else {
        alert("anda belum login")
    }
}

function pindah(){
    window.location.replace("register.html")
}
    

/*function validasi() {
    let nama = document.getElementById("nama").value;
    let email = document.getElementById("email").value;
    let password = document.getElementById("password").value;
    if (username == "rizky" && email == "rizkyherdiansyah31@gmail.com" && password == "rizkyiki00" ) {
        alert("Berhasil daftar")
        return true
    }else{
        alert("harap isi data dengan lengkap")
    }
}
}*/


/*function register(){
    let username = document.getElementById("nama").value;;
    let email = document.getElementById("email").value;
    let password = document.getElementById("password").value;
    if (nama != "" && email!="" && password !="") {
        alert("berhasil daftar")
        return true;
    }else{
        alert('Anda harus mengisi data dengan lengkap !');
    }
}*/

let nama = "";
let password = "";  
let nama_log = simpan_data();

function simpan_data(){
    nama = document.getElementById("username").value;
    password =  document.getElementById("password").value;
}

function hapus_data(){
    nama = "";
    password = "";
}

function register() {
    let register_nama = document.getElementById("username").value;
    let register_password =  document.getElementById("password").value;
    if (nama != "" && password != "") {
        alert("data sudah ada, silahkan login")
    }else {
        if (register_nama == "" || register_password == ""){
            alert("Mohon masukan data")
        }else {
            simpan_data()
            alert("daftar sukses")
        }
    }
    
}

function login(){
    let login_nama = document.getElementById("username").value;
    let login_password =  document.getElementById("password").value;
    if (nama == login_nama && password == login_password){
        if(nama == ""){
            alert("harap isi data")
        } else {
            alert("login sukses")

        }
    }else {
        alert("login gagal anda belum daftar    ")

    }
}

function logout(){
    if(nama == "" && password == ""){
        alert("anda belum login")
    }
    else{
        hapus_data()
        alert("anda telah logout")
    }
}
