let cursorEl = document.querySelector('.cursor');
var currentElement = null;

document.addEventListener('mouseover', function (e) {
    currentElement = e.target;
    let parentFind = currentElement.parentElement;
    while (parentFind != null) {
        if (parentFind.hasAttribute('data-cursor-text') || currentElement.hasAttribute('data-cursor-text')) {
            console.log('это виджет, нужно изменить курсор');
            cursorEl.classList.add('cursor--active');
            console.log('добавил класс');
        } else {
            cursorEl.classList.remove('cursor--active');
            console.log('удалил класс');
        }
        parentFind = parentFind.parentElement;
    } 
    // console.log(parentFind);
});