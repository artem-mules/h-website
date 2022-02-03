let allExpCards = document.querySelectorAll('.cl-i__filtered-content');
let expClw = document.querySelector('.clw__filtered-content');

//create redirect with click on exp card
expClw.addEventListener('click', function () {
    allExpCards.forEach(expCard => {
        let currentLink = expCard.querySelector('.hiiden-link');
        expCard.addEventListener('click', function () {
            window.location.href = currentLink;
        });
    });
});


//create coma after catrgories names
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