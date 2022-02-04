let hiddenInput = document.querySelector('.package-input');
let dateInput = document.querySelector('#booking__dates');
let currentPackage = localStorage.getItem('storageSelectedPackage')
let allPackCards = document.querySelectorAll('.cl-i__packages-item');

allPackCards.forEach(packCard => {
    packCard.addEventListener('click', function() {
        allPackCards.forEach(cards => {
            cards.classList.remove('cl-i__packages-item--active');
            cards.classList.add('cl-i__packages-item--disable');
        });

        let currentCardPackageName = packCard.querySelector('.package-data').getAttribute('data-package-name');
        localStorage.setItem('storageSelectedPackage', currentCardPackageName);
        hiddenInput.value = currentCardPackageName;
        packCard.classList.add('cl-i__packages-item--active');
        packCard.classList.remove('cl-i__packages-item--disable');
    });
});



let allLinksToAnc = document.querySelectorAll('.cards-anc');

allLinksToAnc.forEach(link => {
    let currentSectionId = link.querySelector('.data-id-of-anc').getAttribute('id');
    link.setAttribute('href', ('#'+currentSectionId));
});

function makeCardActive() {
    allPackCards.forEach(packCard => {
        let currentCardPackageName = packCard.querySelector('.package-data').getAttribute('data-package-name');
        if (currentCardPackageName == currentPackage) {
            packCard.click();
        }
   }); 
}

function goToCurrentCard() {
    allLinksToAnc.forEach(link => {
        let currentSectionId = link.querySelector('.data-id-of-anc').getAttribute('id');
        if (currentPackage == currentSectionId) {
            link.click();
        }
    });
}






if (currentPackage != null) {
    setTimeout(() => {
        makeCardActive();
        dateInput.value = 'Dates';
        setTimeout(() => {
            goToCurrentCard();
        }, 500);
    }, 500);
}





