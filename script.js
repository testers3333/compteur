let hours = document.getElementById("hour");
let minutes = document.getElementById("minute");
let secondes = document.getElementById("second");

let s = 00
let m = 00
let h = 00
setInterval(() => {
    s++;
    if(s === 60){
        s = 0;
        m++;
    }
    if(m === 60){
        m = 0;
        h++;
    }

    secondes.innerText = ""+(s || 00)+"";
    minutes.innerText = ""+(m || 00)+"";
    hours.innerText = ""+(h || 00)+"";
}, 1000);
