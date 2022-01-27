let allClw = document.querySelectorAll('.clw__marq-row');
let marqRow = document.querySelector('.marq-row');
let currentMaqqPosition = 0;
let liveMarq;
let killMarq;
const speed = 10;
let currentSpeed = speed;

function startMarq() {
    liveMarq = setInterval(() => {
        if (currentMaqqPosition <= 0 && currentMaqqPosition >= (-101)) {
            currentMaqqPosition = currentMaqqPosition - .01;

            allClw.forEach(clw => {
                clw.style.transform = ("translateX(" + currentMaqqPosition + "%)");
            });

        }
        if (currentMaqqPosition <= (-100)) {
            currentMaqqPosition = 0;
        }
    }, currentSpeed);
}

marqRow.addEventListener('mouseenter', function() {
    killMarq = setInterval(() => {
        currentSpeed = currentSpeed + 2;
        clearTimeout(liveMarq);
        startMarq();
    }, 50);
});

setInterval(() => {
    if (currentSpeed > 125) {
        clearTimeout(liveMarq);
        clearTimeout(killMarq);
    }
}, 10);

marqRow.addEventListener('mouseleave', function () {
    clearTimeout(liveMarq);
    clearTimeout(killMarq);
    currentSpeed = speed;
    startMarq();
});



startMarq();