let currentPackage = localStorage.getItem('storageSelectedPackage')
let allPackCards = document.querySelectorAll('.cl-i__packages-item');

function makeCardActive() {
    
}

allPackCards.forEach(packCard => {
    packCard.addEventListener('click', function() {
        allPackCards.forEach(cards => {
            cards.classList.remove('cl-i__packages-item--active');
            cards.classList.add('cl-i__packages-item--disable');
        });

        let currentCardPackageName = packCard.querySelector('.package-data').getAttribute('data-package-name');
        localStorage.setItem('storageSelectedPackage', currentCardPackageName);
        packCard.classList.add('cl-i__packages-item--active');
        packCard.classList.remove('cl-i__packages-item--disable');
    });
});



function makeCardActive() {
    allPackCards.forEach(packCard => {
        let currentCardPackageName = packCard.querySelector('.package-data').getAttribute('data-package-name');
        if (currentCardPackageName == currentPackage) {
            packCard.click();
        }
   }); 
}

if (currentPackage != null) {
    setTimeout(() => {
        makeCardActive();
    }, 500);
}