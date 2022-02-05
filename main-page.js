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
    // killMarq = setInterval(() => {
    //     currentSpeed = currentSpeed + 2;
    //     clearTimeout(liveMarq);
    //     startMarq();
    // }, 50);
});

setInterval(() => {
    if (currentSpeed > 125) {
        clearTimeout(liveMarq);
        clearTimeout(killMarq);
    }
}, 10);

marqRow.addEventListener('mouseleave', function () {
    // clearTimeout(liveMarq);
    // clearTimeout(killMarq);
    // currentSpeed = speed;
    // startMarq();
});



startMarq();



//–––––––––––––––––––––––––
let menuTrigger = document.querySelector('.menu-trigger');
let menuButton = document.querySelector('.button--menu--1');
let menuCheckEl = document.querySelector('.el-checker');

function menuCheck() {
    let distanceData = Math.round(menuTrigger.getBoundingClientRect().y);
    if (distanceData < 0) {
        if (menuCheckEl.style.display == 'block') {
            menuButton.click();
        }
    } else {
        if (menuCheckEl.style.display == 'none') {
            menuButton.click();
        }
    }
}

window.addEventListener('scroll', function () {
    menuCheck();
})


menuCheck();