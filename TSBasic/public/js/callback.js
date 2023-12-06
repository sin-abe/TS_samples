"use strict";
function handleRandom(count) {
    const randomNum = Math.round(Math.random() * 100);
    const message = `${count}: ${randomNum}`;
    console.log(message);
}
function start(callback) {
    var count = 0;
    const timer = setInterval(() => {
        count++;
        if (count >= 8)
            clearInterval(timer);
        callback(count);
    }, 1000);
}
start(handleRandom);
