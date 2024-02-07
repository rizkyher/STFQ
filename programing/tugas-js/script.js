let total_in_day = 0;
let total_in_room = 0;
let antrian = 0;
const hour_start = 8;
const hour_end = 18;

function update_total_in_day(){
    total_in_day = total_in_day + 1
}

function update_total_in_room(){
    total_in_room = total_in_room + 1
}
function update_exit_in_room(){
    if (total_in_room <= 5){
        total_in_room = total_in_room - 1
    }
    
}

// update antrian
/*
function update_queue(queue){
    if (queue=="out"){
        if (antrian > 0 ){
            antrian = antrian - 1;
            
            if (antrian  > 0 ){
                update_exit_in_room()
                console.log("pasien kosong")
            }
        } else {
        }
    } else if (queue=="in"){
        antrian = antrian + 1
    } 
}

function exit_room() {
    if (total_in_room > 0){
    antrian = antrian - 1 
    update_queue("out")
}
}

*/
function cek_antrian() {
    if (antrian <= 0){
        console.log("antrian kosong")
    }
    else{
        console.log("ada antrian   " + antrian)
    }
}
//update antrian
function update_queue(queue){
    if (queue == "out"){
        if (antrian > 0) {
            update_total_in_room();
        }
    }else if (queue == "in"){
        antrian = antrian + 1
    }
}
//exit room
function exit_room(){
    if (total_in_room > 0 ){
        total_in_room = total_in_room - 1
    }
    if (antrian >= 1){
        antrian = antrian - 1
    
    }
        update_queue("out")
    cek_antrian()
    console.log("sisa pasien "+total_in_room)
    alert("Semoga lekas sembuh")
}

function hour_in(hour){
    //cek apakah klinik buka atau tutup
    if (hour >= 8 && hour <=18) {
    alert("silahkan masuk klinik")
    
    //cek apakah kuota harian masih ada atau penuh
    if (total_in_day < 100){
            update_total_in_day()
            alert("silahkan menuju ruangan pemeriksaan")
            cek_antrian()  

                //cek apakah ruangan sudah penuh atau belum
                if (total_in_room < 5){
                    update_total_in_room()
                    alert("silahkan masuk")
                    
                } else {
                    console.log("Ruangan melebihi kapasitas harap menunggu")
                    //update antrian
                    update_queue("in")
                    
                    
                }

        } else {
            alert("Maaf Klinik telah mencapai batas maksimal pasien harian")
            cek_antrian()
            console.log("sisa pasien "+total_in_room)
        }
    } else {    
        alert("Klinik Tutup")
    }
}
