let allCollectionDayItems = document.querySelectorAll('.cl-i__day-slider-content');

allCollectionDayItems.forEach(dayItem => {
    let currentRichData = dayItem.querySelector('.day-data');
    let clonableRow = dayItem.querySelector('.schedule__item');
    let clonablePhoto = dayItem.querySelector('.w-embed img.day-slider-content-illustration.day-slider-content-illustration--active');
    let appendWaiterRow = dayItem.querySelector('.day-slider-content-schedule');
    let appendWaiterPhoto = dayItem.querySelector('.day-slider-content-illustration-wrapper');

    let scheduleArray = new Array();
    let schedulePhotosArray = new Array();

    let allRichPhotoFigures = currentRichData.querySelectorAll('.w-richtext-figure-type-image');

    allRichPhotoFigures.forEach(figure => {
        let currentImgUrl = figure.querySelector('img').getAttribute('src');
        let currentScheduleData = {
            time: figure.querySelector('figcaption').textContent.split('/')[0],
            description: figure.querySelector('figcaption').textContent.split('/')[1]
        }

        schedulePhotosArray.push(currentImgUrl);
        scheduleArray.push(currentScheduleData);
    });

    scheduleArray.forEach(scheduleData => {
        cloneOfRow = clonableRow.cloneNode(true);
        cloneOfRow.querySelector('.schedule__item-time').textContent = scheduleData.time;
        cloneOfRow.querySelector('.schedule__item-description').textContent = scheduleData.description;
        cloneOfRow.classList.remove('hidden-element');
        cloneOfRow.classList.remove('schedule__item--focused');
        cloneOfRow.classList.add('schedule__item--rendered');
        appendWaiterRow.append(cloneOfRow);
    });

    schedulePhotosArray.forEach(photoSrcData => {
        cloneOfPhoto = clonablePhoto.cloneNode(true);
        cloneOfPhoto.setAttribute('src', photoSrcData);
        cloneOfPhoto.classList.remove('hidden-element');
        cloneOfPhoto.classList.remove('day-slider-content-illustration--active');
        cloneOfPhoto.classList.add('day-slider-content-illustration--rendered');
        appendWaiterPhoto.append(cloneOfPhoto);
    });
});

//делаю все первые пункты расписания активными
allCollectionDayItems.forEach(dayItemFilled => {
    dayItemFilled.querySelectorAll('.schedule__item--rendered')[0].classList.add('schedule__item--focused');
    dayItemFilled.querySelectorAll('.day-slider-content-illustration--rendered')[0].classList.add('day-slider-content-illustration--active');

    //теперь возьмём все сформированные блоки
    let allRenderedRows = dayItemFilled.querySelectorAll('.schedule__item--rendered');
    let allRenderedPhotos = dayItemFilled.querySelectorAll('.day-slider-content-illustration--rendered');

    allRenderedRows.forEach((renderedRow, rowId) => {
        renderedRow.addEventListener('mouseenter', function() {
            allRenderedRows.forEach(el => {
                el.classList.remove('schedule__item--focused');
            });
            allRenderedPhotos.forEach(el => {
                el.classList.remove('day-slider-content-illustration--active');
            });
            renderedRow.classList.add('schedule__item--focused');
            setTimeout(() => {
                allRenderedPhotos[rowId].classList.add('day-slider-content-illustration--active');
            }, 200);
        });
    });


});
