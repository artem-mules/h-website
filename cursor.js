let cursorEl = document.querySelector('.cursor');
let currentElement = null;

document.addEventListener('mouseover', function (e) {
    currentElement = e.target;
    let attributesArray = new Array();
    attributesArray.push(currentElement.hasAttribute('data-cursor'));
    while (currentElement.parentElement != null) {
        currentElement = currentElement.parentElement;
        attributesArray.push(currentElement.hasAttribute('data-cursor'));
    }
    
    if (attributesArray.includes(true)) {
        cursorEl.classList.add('cursor--active');
    } else {
        cursorEl.classList.remove('cursor--active');
    }
});