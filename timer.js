// setting the date to count down to 
const countDown = new Date("Jan 28, 2024 06:00:00").getTime();

// making the timer update every second
let updateTimer = setInterval(function () {
    // getting today's date
    const todayDate = new Date().getTime();
    let timeLeft = countDown - todayDate;

    // converting the time remaining to weeks, days, hours, minutes, and secs
    let weeks = Math.floor(timeLeft / (1000 * 60 * 60 * 24 * 7));
    let days = Math.floor(timeLeft / (1000 * 60 * 60 * 24));
    let hours = Math.floor((timeLeft % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    let minutes = Math.floor((timeLeft % (1000 * 60 * 60)) / (1000 * 60));
    let seconds = Math.floor(timeLeft % (1000 * 60) / 1000);

    // displaying timer to the HTML page
    let timer = document.getElementById("countdown");
    timer.innerHTML = weeks + " weeks " + days + " days " + hours + " hours " + minutes + " minutes " + seconds + " seconds";

    // conditon for when timer expires
    if (timeLeft < 0) {
        clearInterval(updateTimer);
        document.getElementById("countdown").innerHTML = "Time Up! Go for external defence!!!";
    }
}, 1000);