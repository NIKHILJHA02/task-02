// Event handler for all button
document.getElementById('allBtn').addEventListener('click', function () {
    showImages('all');
});

// Event handler for red button
document.getElementById('redBtn').addEventListener('click', function () {
    showImages('red');
});

// Event handler for green button
document.getElementById('greenBtn').addEventListener('click', function () {
    showImages('green');
});

// Event handler for blue button
document.getElementById('blueBtn').addEventListener('click', function () {
    showImages('blue');
});

// Event handler for color dropdown
document.getElementById('colorDropdown').addEventListener('change', function () {
    var selectedColor = this.value;
    showImages(selectedColor);
});

// Function to show/hide images based on selected color
function showImages(color) {
    var thumbnails = document.getElementsByClassName('thumbnail');
    var featureImage = document.getElementById('featureImage');

    for (var i = 0; i < thumbnails.length; i++) {
        var thumbnail = thumbnails[i];

        if (color === 'all' || thumbnail.style.backgroundColor === color) {
            thumbnail.style.display = 'inline-block';
        } else {
            thumbnail.style.display = 'none';
        }
    }

    // Set the selected color as the background of the feature image
    featureImage.style.backgroundColor = color;
}