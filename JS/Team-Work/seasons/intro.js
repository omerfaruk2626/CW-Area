let month = +(prompt("Enter the month (1-12):"));
let day = +(prompt("Enter the day (1-31):"));

if (1 <= month && month <= 12 && 1 <= day && day <= 31) {
    let season;

    if ((month === 2 && day >= 21) || (month > 2 && month < 5) || (month === 5 && day <= 31)) {
        season = "spring";
    } else if ((month === 6 && day >= 1) || (month > 6 && month < 9) || (month === 9 && day <= 21)) {
        season = "summer";
    } else if ((month === 9 && day >= 22) || (month > 9 && month < 12) || (month === 12 && day <= 20)) {
        season = "fall";
    } else {
        season = "winter";
    }

    console.log(alert(`The season for ${month} / ${day} is ${season}.`));
} else {
    console.log(alert("Invalid input for month or day."));
}
