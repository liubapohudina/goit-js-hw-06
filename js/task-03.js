const images = [
  {
    url: 'https://images.pexels.com/photos/140134/pexels-photo-140134.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
    alt: 'White and Black Long Fur Cat',
  },
  {
    url: 'https://images.pexels.com/photos/213399/pexels-photo-213399.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
    alt: 'Orange and White Koi Fish Near Yellow Koi Fish',
  },
  {
    url: 'https://images.pexels.com/photos/219943/pexels-photo-219943.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
    alt: 'Group of Horses Running',
  },
];
const ulGallery = document.querySelector('.gallery');
const listImg = images.map((image) => `<li class="img-item"><img  height= "400" src="${image.url}" alt="${image.alt}"></li>`)
  .join('');
ulGallery.insertAdjacentHTML('afterbegin', listImg)
//images.forEach(function (image) {
  //const li = document.createElement('li');
  //const img = document.createElement('img');

  //img.src = image.url;
  //img.alt = image.alt;
  //img.className = 'img-item';

  //li.append(img);
  //ulGallery.append(li);

  //console.log(ulGallery);
//});
console.log(ulGallery)




