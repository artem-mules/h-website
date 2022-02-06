function changeCounter() {
    let allNavNums = document.querySelectorAll('.w-slider-dot');
    let counterTextEl = document.querySelector('.main-page-slider__counter__text');
    let cursorCounterTextEl = document.querySelector('.cursor-text-counter');
    let allCli = document.querySelectorAll('.cl-i__main-page-slider');

    allNavNums.forEach(dot => {
        if (dot.classList.contains('w-active')) {
            counterTextEl.textContent = (dot.textContent + '/' + allCli.length);
            cursorCounterTextEl.textContent = (dot.textContent + '/' + allCli.length);
        }
    });
}

//start tracking the container with the paginator, it is important for us to understand when it changes
const targetNode = document.querySelector(".main-page-slider");
const observerOptions = {
    childList: true,
    attributes: true,
    subtree: true
}
//Here we specify the function that will be run whenever the tree changes
const observer = new MutationObserver(changeCounter);
observer.observe(targetNode, observerOptions);
//______________________________________________________________________________