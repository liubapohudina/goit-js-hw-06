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
    const firstItem = document.createElement('li');
    firstItem.textContent = ingredients[i];
    firstItem.className = 'item'
    ul.prepend(firstItem);
}

console.log(ul)

