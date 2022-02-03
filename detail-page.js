let allExpCards = document.querySelectorAll('.cat-wrapper');


//create coma after catrgories names
function checkCatNames() {
    allExpCards.forEach(expCard => {
        let allCurrentCatNames = expCard.querySelectorAll('.experiences-card__meta-info-text--categories-data');
        let placeholderElement = expCard.querySelector('.experiences-card__meta-info-text--categories');
        let placeholderData = '';
        allCurrentCatNames.forEach((catName, id) => {
            if (id != (allCurrentCatNames.length - 1)) {
                placeholderData = (placeholderData + catName.textContent + ', ');
            }
            if (id == (allCurrentCatNames.length - 1)) {
                placeholderData = (placeholderData + catName.textContent);
                placeholderElement.textContent = placeholderData;
            }
        });
    });
}

checkCatNames();


//hide slider if 0 slides

let allSlides = document.querySelectorAll('.cl-i__main-page-slider');
let sliderSection = document.querySelector('.section--detail-page-slider');
if (allSlides.length == 0) {
    sliderSection.classList.add('hide');
}