const body = document.body
const elemList = body.querySelectorAll('.item')
console.log('Number of categories: ' + elemList.length)
let sum = 0;
elemList.forEach(element => {
    const firstChild = element.firstElementChild;
     const headerContent = firstChild.textContent;
    console.log(`Category: ` + headerContent);
    const elemItem = element.querySelectorAll('li');
console.log(`Elements: ` + elemItem.length);
});

