// let cursorEl = document.querySelector('.cursor');
// let currentElement = null;

// document.addEventListener('mouseover', function (e) {
//     currentElement = e.target;
//     let attributesArray = new Array();
//     attributesArray.push(currentElement.hasAttribute('data-cursor'));
//     while (currentElement.parentElement != null) {
//         currentElement = currentElement.parentElement;
//         attributesArray.push(currentElement.hasAttribute('data-cursor'));
//     }
    
//     if (attributesArray.includes(true)) {
//         cursorEl.classList.add('cursor--active');
//     } else {
//         cursorEl.classList.remove('cursor--active');
//     }
// });

let cursorEl = document.querySelector('.cursor');
let cursorElText = document.querySelector('.cursor-text');
let currentElement = null;
let counterElSlider = document.querySelector('.cursor-text-counter');

document.addEventListener('mouseover', function (e) {
    currentElement = e.target;
    let elementsArray = new Array();
    let attributesArray = new Array();
    //первичное добавление данных в аттрибут
    elementsArray.push(currentElement);
    attributesArray.push(currentElement.hasAttribute('data-cursor'));

    //вторичное добавление данных в аттрибут
    while (currentElement.parentElement != null) {
        currentElement = currentElement.parentElement;
        elementsArray.push(currentElement);
        attributesArray.push(currentElement.hasAttribute('data-cursor'));
    }

    elementsArray.forEach(elHovered => {
        if (elHovered.hasAttribute('data-cursor')) {
            if (elHovered.hasAttribute('data-cursor-widget')) {
                cursorEl.classList.remove('cursor--active--simple');
                cursorEl.classList.add('cursor--active');
                cursorEl.style.backgroundColor = elHovered.getAttribute('data-cursor-color');
                cursorEl.style.borderColor = elHovered.getAttribute('data-cursor-color-border');
                cursorElText.style.color = elHovered.getAttribute('data-cursor-color-text');
                cursorElText.textContent = elHovered.getAttribute('data-cursor-text');
                cursorElText.classList.add('cursor-text--active');

                if (elHovered.hasAttribute('data-cursor-slider')) {
                    counterElSlider.classList.add('cursor-text--active');
                    cursorElText.classList.remove('cursor-text--active');
                } else {
                    counterElSlider.classList.remove('cursor-text--active');
                }

            } else {
                cursorEl.classList.add('cursor--active--simple');
                cursorEl.classList.remove('cursor--active');
                cursorElText.textContent = '';
                cursorElText.classList.remove('cursor-text--active');
                cursorEl.style.backgroundColor = '#3E67B0';
                cursorElText.style.color = '#FFFCFB';
                cursorEl.style.borderColor = '#FFFCFB';
            }
        }
    });

    if (attributesArray.includes(true) == false) {
        cursorEl.classList.remove('cursor--active--simple');
        cursorEl.classList.remove('cursor--active');
        cursorElText.textContent = '';
        cursorElText.classList.remove('cursor-text--active');
        cursorEl.style.backgroundColor = '#3E67B0';
        cursorElText.style.color = '#FFFCFB';
        cursorEl.style.borderColor = '#FFFCFB';
        counterElSlider.classList.remove('cursor-text--active');
    }
    

});

console.log('hey hey');