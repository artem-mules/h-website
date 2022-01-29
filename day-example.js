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
        appendWaiterRow.append(cloneOfRow);
    });

    schedulePhotosArray.forEach(photoSrcData => {
        cloneOfPhoto = clonablePhoto.cloneNode(true);
        cloneOfPhoto.setAttribute('src', photoSrcData);
        appendWaiterPhoto.append(cloneOfPhoto);
    });
});