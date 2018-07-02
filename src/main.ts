
const message = 'Start of test program';
console.log(message);

let i: number;
i = 0;

setInterval( () => {
    i = i + 1;
    if (i === 10) {
        debugger;
    }
    console.log(i);
}, 1000);
