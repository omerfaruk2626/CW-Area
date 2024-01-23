let month = prompt('Bir ay girin: ');
month = month.toLowerCase(); // Case-insensitive karşılaştırma için küçük harfe çeviriyoruz

if (month === 'january' || month === 'ocak' || month === '1') {
    result = 'Season/Mevsim: Winter/Kış';
} else if (month === 'february' || month === 'şubat' || month === '2') {
    result = 'Season/Mevsim: Winter/Kış';
} else if (month === 'march' || month === 'mart' || month === '3') {
    result = 'Season/Mevsim: Spring/Ilkbahar';
} else if (month === 'april' || month === 'nisan' || month === '4') {
    result = 'Season/Mevsim: Spring/Ilkbahar';
} else if (month === 'may' || month === 'mayıs' || month === '5') {
    result = 'Season/Mevsim: Spring/Ilkbahar';
} else if (month === 'june' || month === 'haziran' || month === '6') {
    result = 'Seasons/Mevsim: Summer/Yaz';
} else if (month === 'july' || month === 'temmuz' || month === '7') {
    result = 'Seasons/Mevsim: Summer/Yaz';
} else if (month === 'august' || month === 'ağustos' || month === '8') {
    result = 'Seasons/Mevsim: Summer/Yaz';
} else if (month === 'september' || month === 'eylül' || month === '9') {
    result = 'Seasons/Mevsim: Autumn/Sonbahar';
} else if (month === 'october' || month === 'ekim' || month === '10') {
    result = ('Seasons/Mevsim: Autumn/Sonbahar');
} else if (month === 'november' || month === 'kasım' || month === '11') {
    result = 'Seasons/Mevsim: Autumn/Sonbahar';
} else if (month === 'december' || month === 'aralık' || month === '12') {
    result = 'Season/Mevsim: Winter/Kış';
} else {
    result = 'Geçersiz ay';
}



console.log(alert(result));