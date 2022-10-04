//Iteración 1

//1.1
let myFavoriteHero='Hulk';
console.log(myFavoriteHero);

//1.2
let x=50;
console.log(x);

//1.3
let h=5;
console.log(h);
let y=10;
console.log(y);

//1.4
let z= h + y;
console.log(z);

//Iteración 2

//2.1
const character = {name: 'Jack Sparrow', age: 10};
character.age = 25;
console.log(character);

//2.2
let firstName='Jon';
let lastName='Snow';
let age=24;
console.log('Soy '+firstName+' '+lastName+'. Tengo '+age+' años, y me gustan los lobos.');

//2.3
const toy1 = {name: 'Buss myYear', price: 19};
const toy2 = {name: 'Rallo mcKing', price: 29};

console.log( toy1.price + toy2.price);

//2.4
let globalBasePrice = 10000;
const car1 = {name: 'BMW m&m', basePrice: 50000, finalPrice: 60000};
const car2 = {name: 'Chevrolet Corbina', basePrice: 70000, finalPrice: 80000};

globalBasePrice=25000;
car1.finalPrice= car1.basePrice + globalBasePrice;
car2.finalPrice= car2.basePrice + globalBasePrice;

console.log( car1);
console.log(car2);

//Iteración 3

//3.1
console.log(10*5);

//3.2
console.log(10/2);

//3.3
console.log(15 % 9);

//3.4
z=5;
x=(y+z);
console.log(x);

//3.5
x=(y*z);
console.log(x);