const endDate = new Date("14 Feb, 2025 22:55:10").getTime();
const startDate = new Date().getTime();

let x  = setInterval(function updateTimer() {
    const now = new Date().getTime();

    const distanceCovered = now - startDate;
    const distancePending = endDate - now;

    const onedayInMillis = (24 * 60 * 60 * 1000);
    const oneHourInMillis = (60 * 60 * 1000);
    const oneMinInMillis = (60 * 1000);
    const oneSecInMillis = (1000);

    const days = Math.floor(distancePending / onedayInMillis);
    const hours = Math.floor((distancePending % onedayInMillis) / oneHourInMillis);
    const min = Math.floor((distancePending % oneHourInMillis) / oneMinInMillis);
    const sec = Math.floor((distancePending % (oneMinInMillis)) / oneSecInMillis);

    document.getElementById("days").innerHTML = days;
    document.getElementById("hours").innerHTML = hours;
    document.getElementById("minutes").innerHTML = min;
    document.getElementById("second").innerHTML = sec;

    const totalDistance = endDate - startDate;
    const distancePercentage = (distanceCovered/totalDistance) * 100;

    document.getElementById("progress-bar").style.width = distancePercentage + "%";

    if(distancePending < 0){
        clearInterval(x);
        document.getElementById("countdown").innerHTML = "EXPIRED";
        document.getElementById("progress-bar").style.width = "100%";
    }

}, 1000);