const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];

const ul = document.querySelector('#ingredients')
for (let i = ingredients.length-1; i >= 0; i --) {
  if (ul) {
    const firstItem = document.createElement('li');
    firstItem.textContent = ingredients[i];
    firstItem.className = 'item'
    ul.prepend(firstItem);
  } else {
    console.error('No matching ul element found.');
  }
}

console.log(ul)

