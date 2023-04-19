var x = setInterval(function() {
    var time = " 00:00:01";
    var year = document.querySelector(".inputdate").value;
    var date =  "Dec 25, " + year + time;

    var countDownDate = new Date(date).getTime();
    var now = new Date().getTime();
    var distance = countDownDate - now;
    
    var days = Math.floor(distance / (1000 * 60 * 60 * 24));
    var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    var seconds = Math.floor((distance % (1000 * 60)) / 1000);
    
    if (distance < 0) {
        document.querySelector(".days").innerText = '00';
        document.querySelector(".hours").innerText = '00';
        document.querySelector(".minutes").innerText = '00';
        document.querySelector(".seconds").innerText = '00';
        document.querySelector(".timeover").innerText = " Merry Christmas! ";
        return;
    }else if(distance > 0){
        document.querySelector(".days").innerText = days;
        document.querySelector(".hours").innerText = hours;
        document.querySelector(".minutes").innerText = minutes;
        document.querySelector(".seconds").innerText = seconds;
        document.querySelector(".timeover").innerText = "";
        return;
    }
    return;
}, 1000);
