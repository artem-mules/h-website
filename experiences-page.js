let allExpCards = document.querySelectorAll('.cl-i__filtered-content');


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

setInterval(() => {
    checkCatNames();
}, 1000);

