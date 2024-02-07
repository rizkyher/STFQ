

const nama = document.getElementById("username");
const password = document.getElementById("password");

const arrUsername = []
const arrPassword = []
const arrUserlogin = []
const arrPasslogin = []

function register() {
    const nama = document.getElementById("username");
    const password = document.getElementById("password");
        if (arrUsername != nama.value && arrPassword != nama.value ){
            arrUsername.push(nama.value);
            arrPassword.push(password.value);
            alert("berhasil daftar");
            console.log(arrUsername)
            // window.location.replace("tugas2.html")
            
        } else {
            if (arrUsername.includes(nama.value)) {
                alert("username sudah ada")
            } else{
                alert("harap isi data dengan lengkap")

            }
        }
}

function login() {
    const nama = document.getElementById("username");
    const password = document.getElementById("password");
    if (arrUsername.includes(nama.value) ){
        if(arrPassword.includes(password.value)){
            if (arrUserlogin != nama.value && arrPasslogin != password.value){
                arrUserlogin.push(nama.value);
                arrPasslogin.push(password.value)
                alert("Berhasil Login")
                
            }else {
                if (arrUserlogin.includes(nama.value)){
                    alert("anda sudah login")
                }
            }

        } else {
            alert("password salah")
        }
    } else {
        alert("username belum terdaftar. Harap daftar dahulu")
    }
    console.log(arrUsername)
    console.log(arrUserlogin)
}

function logout(){

    const out = arrUserlogin.indexOf(nama.value)

    if (arrUserlogin.includes(nama.value)){
        arrUserlogin.splice(out,1)
        arrPasslogin.splice(out,1)
            alert("anda telah Logout")
            console.log(arrUserlogin)
    } else {
        alert("anda belum login")
    }
}

function pindah(){
    window.location.replace("register.html")
}
    

function hapus(){
    const del = arrUsername.indexOf(nama.value)
    if (arrUsername.includes(nama.value)){
        arrUsername.splice(del,1) ;
        arrPassword.splice(del,1); 
        alert("Akun Anda telah dihapus");
        console.log(arrUsername)
    }else {
        alert("anda belum punya akun")
    }
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