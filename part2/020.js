var cart = [
    { name: '옷', price: 20000},
    { name: '가방', price: 100000}
];

var numOfItems = `카트에 ${cart.length}개의 아이템이 있습니다.`;
var cartTable = 
    `<ul>
        <li>품목 : ${cart[0].name}, 가격 : ${cart[0].price}</li>
        <li>품목 : ${cart[1].name}, 가격 : ${cart[1].price}</li>
    </ul>`
console.log(numOfItems);
console.log(cartTable);

var personName = 'harin';
var helloString = 'hello ' + personName;
var helloTemplateString = `hello ${personName}`;
console.log(helloString === helloTemplateString); //true 똑같은 타입.
console.log(typeof helloTemplateString); //String 타입