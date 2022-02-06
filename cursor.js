let cursorEl = document.querySelector('.cursor');
let currentElement = null;

document.addEventListener('mouseover', function (e) {
    currentElement = e.target;
    let attributesArray = new Array();
    attributesArray.push(currentElement.hasAttribute('data-cursor-color'));
    while (currentElement.parentElement != null) {
        currentElement = currentElement.parentElement;
        attributesArray.push(currentElement.hasAttribute('data-cursor-color'));
    }
    
    if (attributesArray.includes(true)) {
        cursorEl.classList.add('cursor--active');
    } else {
        cursorEl.classList.remove('cursor--active');
    }
});