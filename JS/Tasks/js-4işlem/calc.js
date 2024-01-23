let a = +prompt("birinci sayıyı giriniz")
let b = prompt("işlem türünü giriniz + - * /")
let c = +prompt("ikinci sayıyı giriniz")


if (b == "+") {
    sonuc = (a + c);
} else if (b == "-") {
    sonuc = (a - c);
} else if (b == "*") {
    sonuc = (a * c);
} else if (b == "/") {
    sonuc = (a / c);
}
else{
    sonuc = alert("hatalı giris yapıldı");
}

console.log(alert("sonuc :"+ sonuc));
