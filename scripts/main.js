let myImage = document.querySelector('img');

myImage.onclick = function() {
    let mySrc = myImage.getAttribute('src');
    if (mySrc === 'images/dp.jpg') {
        myImage.setAttribute('src', 'images/dp2.jpg');
    } else {
        myImage.setAttribute('src', 'images/dp.jpg');
    }
}