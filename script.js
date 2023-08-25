let hour = document.getElementById("hr");
let minute = document.getElementById("min");
let second = document.getElementById("sec");


function clock() {
    let h = new Date().getHours();
    let m = new Date().getMinutes();
    let s = new Date().getSeconds();


    if (h > 12) {
        h = h - 12;
    }
    else {
        h;
    }
    if (h < 10) {
        h = "0" + h;
    }
    else {
        h
    }
    if (m < 10) {
        m = "0" + m;
    }
    else {
        m
    }
    if (s < 10) {
        s = "0" + s;
    }
    else {
        s
    }


    hour.innerHTML = h
    minute.innerHTML = m;
    second.innerHTML = s;

    setInterval(clock, 1000);
}

clock();