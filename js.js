'use strict';

let btn = document.querySelector ('#btn'),
    total = document.querySelector ('.total'),
    toppings = [];
      
btn.addEventListener('click', function() {
  let burger = new Burger ('size', 'stuffing', 'extra');
  toppings.push(burger);
});



// class Hamburger {
//     constructor(size, stuffing) { ... }
//     addTopping(topping) {    // Добавить добавку }
//     removeTopping(topping) { // Убрать добавку }
//     getToppings(topping) {   // Получить список добавок }
//     getSize() {              // Узнать размер гамбургера }
//     getStuffing() {          // Узнать начинку гамбургера }
//     calculatePrice() {       // Узнать цену }
//     calculateCalories() {    // Узнать калорийность }
//   };
// };

class Burger {
    constructor (size, stuffing, extra) {
      this.price = 0;
      this.calories = 0;
      this.size = this._getSize(size);
      this.stuffing = this._getStuffing(stuffing);
      this.extra = this._getExtra(extra);
    };

    _getSize(attrName) {
      let obj = document.querySelector (`input[name=${attrName}]:checked`);
      return obj.value;
    };

    _getStuffing(attrName) {
      let obj = document.querySelector (`input[name=${attrName}]:checked`);
      return obj.value;
    };

    _getExtra (attrName) {
      let objArr = [...document.querySelectorAll (`input[name=${attrName}]:checked`)];
      let arr = [];
      objArr.forEach (el => {
          arr.push (el.value);
      });
      return arr;
    };

    showOrder () {
      this.total.innerText = `Итого: ${this.price} и ${this.calories}`;
    }











      
};

// class Human {
//     constructor (nam, ag, gen) {
//         this.name = nam
//         this.age = ag
//         this.gender = gen ? 'male' : 'female'
//         this.married = false
//         this.partner = null
//     }
//     goWork () {
//         console.log (`${this.name} goes work.`)
//     }
//     getMarried (pers) {
//         if (!this.married && !pers.married) {
//             this.married = true
//             this.partner = pers
//             pers.getMarried (this)
//         } else {
//             console.log (`${this.name} is already married with ${this.partner.name}`)
//         }
//     }
// }

// let oleg = new Human ('Oleg', 23, 1)
// let sopha = new Human ('Sophia', 22, 0)

// class NewClass {
//     constructor () {
//         this.prop = 100
//         this.prop2 = 200
//         this.method ()
//     }
//     method () {
//         console.log (123)