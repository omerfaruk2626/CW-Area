var tus = document.getElementsByClassName("sayi") ;
var islem = document.getElementsByClassName("islem") ;
var temizle = document.getElementById("temizle");
var ekran = document.getElementsByClassName("ekran")[0];
var hesapla = document.getElementById("hesapla");
var ilksayi=0;var ikincisayi=0;
var dortislem,hesap,gelensayi ;
console.log(islem);

function tusBul(){
    var rakam = this.getAttribute("data-num");
    ekran.innerHTML += rakam;
}

function islemYap(){
    var yislem = this.getAttribute("data-islem");
    ilksayi = parseInt(ekran.innerHTML);
    ekran.innerHTML = "" ;
    switch(yislem){
        case "+" :
            dortislem = "+" ;
            break ;
        case "-" :
            dortislem = "-" ;
            break;
        case "*" :
            dortislem = "*" ;
            break ;
        case "/" :
            dortislem = "/" ;
            break;
        default:
            break;

    }
}

function sonucHesapla(){
    ikincisayi = parseInt(ekran.innerHTML);
    switch(dortislem){
        case "+" :
            hesap = ilksayi+ikincisayi ;
            ekran.innerHTML = hesap ;
            break ;
        case "-" :
            hesap = ilksayi-ikincisayi ;
            ekran.innerHTML = hesap ;
            break;
        case "*" :
            hesap = ilksayi*ikincisayi ;
            ekran.innerHTML = hesap ;
            break ;
        case "/" :
            hesap = ilksayi/ikincisayi ;
            ekran.innerHTML = hesap ;
            break;
        default:
            break;

    }
}

function sonucTemizle(){
    ekran.innerHTML = "" ;
    ilksayi = 0 ; ikincisayi = 0 ;
}

    for(var i=0 ; i<tus.length ; i++) {
        tus[i].onclick = tusBul;
    }
    for(var j=0 ; j<islem.length ; j++){
        islem[j].onclick = islemYap ;
    }
    hesapla.onclick = sonucHesapla ;
    temizle.onclick = sonucTemizle ;