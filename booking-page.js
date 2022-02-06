let allAddons = document.querySelectorAll('.check-row');

allAddons.forEach(checkRow => {
    let currentCheckBox = checkRow.querySelector('[type="checkbox"]');
    let currentNameFromCms = checkRow.querySelector('[check-row-data]').getAttribute('check-row-data');

    currentCheckBox.setAttribute('id', currentNameFromCms);
    currentCheckBox.setAttribute('name', currentNameFromCms);
    currentCheckBox.setAttribute('data-name', currentNameFromCms);

    console.log(currentCheckBox);
});