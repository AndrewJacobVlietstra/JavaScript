// Part 1
// Make an async function that replicates consuming the promises from coding challenge 2
async function loadNPause() {
    try {
        // Image 1
        let img = await createImg('img/img-1.jpg');
        console.log('Image 1 Loaded');
        await wait(2);
        img.style.display = 'none';

        // Image 2
        img = await createImg('img/img-2.jpg');
        console.log('Image 2 Loaded');
        await wait(2);
        img.style.display = 'none';
    } 
    
    catch (err) {
        console.error(`${err}`);
    }
};
// loadNPause();



// Part 2
// create an async function that takes an array of image paths and loads them
testData = ['img/img-1.jpg', 'img/img-2.jpg', 'img/img-3.jpg'];

async function loadAll(imgArr) {
    const imgs = [...imgArr].map(async value => await createImg(value));
    console.log(imgs);

    const imgsEl = await Promise.all(imgs);
    console.log(imgsEl);
    
    imgsEl.forEach(img => img.classList.add('parallel'));
};
loadAll(testData);