
function register(){
    // ambil data dari form
    let username = document.getElementById("username").value;
    let password = document.getElementById("password").value;
    
    let userarr = new Array();
    userarr = JSON.parse(localStorage.getItem("username"))?JSON.parse(localStorage.getItem("username")):[]
    if(userarr.some((v)=>{
        return v.username==username 
    })) {
        alert("data sudah ada")     
    } else{
        if (username != "" && password != ""){
            userarr.push({
        "username" : username,
        "password" : password
    })
    alert("berhasil daftar")
    localStorage.setItem("username", JSON.stringify(userarr))
        } else {
                alert("masukan data dengan benar")
    } 
    }
}


function login(){
    // ambil data dari form
    let username = document.getElementById("username").value;
    let password = document.getElementById("password").value;
    
    let userarr = new Array();
    userarr = JSON.parse(localStorage.getItem("username"))?JSON.parse(localStorage.getItem("username")):[]
    if(userarr.some((v)=>{
        return v.username == username && v.password == password
    })){
        alert("Login sukses")
        let curent_user = userarr.filter((v)=>{
            return v.username == username && v.password == password
        })[0]

        localStorage.setItem("userlogin", JSON.stringify(curent_user));
       //localStorage.setItem("password", curent_user, password);
       //window.location.replace("profile.html")
       
       
    }
    else{
        if ( username == ""){
            alert("masukan data")
        }else{
        alert("data belum ada")
    }
    }
}

function logout() {
    
    //_remove("username")
    // localStorage.removeItem("users")
    localStorage.removeItem("userlogin")
    //localStorage.removeItem("password")
    alert("anda sudah logout")
    
  }
  
  function hapus(){
    let username = document.getElementById("username").value;
   // let password = document.getElementById("password").value;
    let userarr = JSON.parse(localStorage.getItem("username"))
    _.remove(userarr, {username: username});
    localStorage.setItem("username", JSON.stringify(userarr));

   // _.forEach(userarr, function(user) 

    ;
}