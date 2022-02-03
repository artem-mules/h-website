//create coma after catrgories names
let allExpCards = document.querySelectorAll('.cl-i__filtered-content');

allExpCards.forEach(expCard => {
    let allCategoryNames = expCard.querySelectorAll('.experiences-card__meta-info-text--categories');
    if (allCategoryNames.length > 0) {
        allCategoryNames.forEach((categoryName, id) => {
            if (id != (allCategoryNames.length - 1)) {
                categoryName.textContent = (categoryName.textContent + ', ');
            }
        });
    }
});


//make first filter's button active
setTimeout(() => {
    let filterFirstButton = document.querySelector('.filter__rad-button');
    filterFirstButton.click();
}, 500);