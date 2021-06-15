// CODING CHALLENGE 2
console.log('CODING CHALLENGE 2');

const imgContainer = document.querySelector('.images');

function createImg(imgPath) {
    return new Promise(function(resolve, reject) {
        const newImg = document.createElement('img');
        newImg.src = imgPath;

        newImg.addEventListener('load', function() {
            imgContainer.insertAdjacentElement('afterbegin', newImg);
            resolve(newImg);
        });

        newImg.addEventListener('error', function() {
            reject(new Error('Image not found!'));
        });
        
    });
};
let currentImg;

createImg('img/img-1.jpg')
    .then(newImg => {
        console.log('Image 1 Loaded');
        currentImg = newImg;
        return wait(2);
    })
    .then(() => {
        currentImg.style.display = 'none';
        return createImg('img/img-2.jpg');
    })
    .then(newImg => {
        console.log('Image 2 Loaded');
        currentImg = newImg;
        return wait(2);
    })
    .then(() => currentImg.style.display = 'none')
    .catch(err => console.error(`${err.message}`))