	// time script
function showTime() {
    const timeNow = new Date().toLocaleTimeString("en-US");
    document.getElementById('clock').textContent = timeNow;
}

setInterval(showTime, 1000);
function showTime2() {
    const timeBK = new Date().toLocaleTimeString("en-US",{timeZone:"Asia/Bangkok"});
    document.getElementById('clock2').textContent = timeBK;
}

setInterval(showTime2, 1000);