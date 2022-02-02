let allPackagesCards = document.querySelectorAll('.cl-i__packages-item');

allPackagesCards.forEach(card => {
    let actualBulletUrl = card.querySelector('.actual-bullet').style.backgroundImage;
    let allCardsBullet = card.querySelectorAll('li');
    allCardsBullet.forEach(listItem => {
        listItem.style.backgroundImage = actualBulletUrl;
    });
});