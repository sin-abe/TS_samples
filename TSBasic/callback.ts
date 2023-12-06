function handleRandom(count:number) {
    const randomNum = Math.round(Math.random() * 100);
    const message = `${count}: ${randomNum}`;
    console.log(message);
}

function start(callback:(count:number) => void):void {
    var count = 0;
    const timer = setInterval(() => {
        count++;
        if(count >= 8) clearInterval(timer);
        callback(count);
    },1000)
}

start(handleRandom);