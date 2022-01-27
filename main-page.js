let allClw = document.querySelectorAll('.clw__marq-row');
let currentMaqqPosition = 0;

const speed = 10;
let currentSpeed = speed;

let testInterval = setInterval(() => {
    if (currentMaqqPosition <= 0 && currentMaqqPosition >= (-101)) {
        currentMaqqPosition = currentMaqqPosition - .01;

        allClw.forEach(clw => {
            clw.style.transform = ("translateX(" + currentMaqqPosition + "%)");
        });

    }
    if (currentMaqqPosition <= (-100)) {
        console.log('we can play again!');
    }
}, speed);
