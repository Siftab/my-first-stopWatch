

let hr = min = sec = msec = 0, timergun;
console.log(min)
const timer = () => {
    timergun = setInterval(() => {
        msec++;
        console.log(msec)
        if(msec<10){document.getElementById('miliSecond').innerText ='0'+msec;}
        else{document.getElementById('miliSecond').innerText =msec;}
        // document.getElementById('second').innerText=sec;
        // document.getElementById('minute').innerText=min;
        // document.getElementById('hour').innerText=hr;
        if (msec == 100) {
            sec++;
            msec = 0;
            if(sec<10){
                document.getElementById('second').innerText ='0'+sec;
            }
            else{document.getElementById('second').innerText = sec;}
        }
        if (sec == 60) {
            min++
            sec = 0;
            if(min<10){document.getElementById('minute').innerText ='0'+min;}
            else{document.getElementById('minute').innerText = min;}

        }
        if (min == 60) {
            hr++;
            min = 0;
            if(hr<10){document.getElementById('hours').innerText ='0'+hr;}
            else{document.getElementById('hours').innerText = hr;}
        }
        

    },15)
}

const stop = () => {
    const stopwatch = clearInterval(timergun);
}

const reset = () => {
    clearInterval(timergun);
    hr = min = sec = msec = "00";
    document.getElementById('miliSecond').innerText = msec;
    document.getElementById('second').innerText = sec;
    document.getElementById('minute').innerText = min;
    document.getElementById('hours').innerText = hr;
}