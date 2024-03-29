/*
let texts = ['text1', 'text2', 'text3'];

let slider = document.querySelector('#slider');

let i = 0;

setInterval(() => {
    slider.textContent = texts[i];
    i++;
    console.log(i)
}, 1000)
*/

/*
const url1 = '<img class="image" src="http://wallpapers-image.ru/2560x1600/cars/wallpapers/wallpapers-cars-019.jpg">';
const url2 = '<img class="image" src="http://wallpapers-image.ru/2560x1600/cars/wallpapers/wallpapers-cars-023.jpg">';
const url3 = '<img class="image" src="http://wallpapers-image.ru/2560x1600/cars/wallpapers/wallpapers-cars-09.jpg">';
*/

const url1 = 'img/cat1.jpg';
const url2 = 'img/cat2.jpg';
const url3 = 'img/cat3.jpg';

const img = document.createElement('img');
img.style.display = "none";
img.height = 200;
img.src = url1;
img.classList.add('image');
document.body.append(img);

const img2 = document.createElement('img');
img2.style.display = "none";
img2.height = 200;
img2.src = url2;
img2.classList.add('image');
document.body.append(img2);

const img3 = document.createElement('img');
img3.style.display = "none";
img3.height = 200;
img3.src = url3;
img3.classList.add('image');
document.body.append(img3);



let images = [img, img2, img3];

let slider = document.querySelector('#slider');

let i = 2;

setInterval(() => {
    i++;
    console.log(i);
    /*
    img.style.display = "none";
    img2.style.display = "none";
    img3.style.display = "none";
    */
    for (let image of images) {
        image.style.display = "none";
    }
    if ((i + 3) % 3 == 0) {
        img.style.display = "block";
        console.log('first picture');
    } else if ((i + 3) % 3 == 1) {
        img2.style.display = "block";
        console.log('second picture');
    } else if ((i + 3) % 3 == 2) {
        img3.style.display = "block";
        console.log('third picture');
    }
    /*
    slider.innerHTML = images[i];
    images[i].style.display = "block";
    i++;
    console.log(i)
    */
}, 2000)

