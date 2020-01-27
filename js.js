'use strict';

let btn = document.querySelector ('#btn'),
    total = document.querySelector ('.total');
      
btn.addEventListener('click', function() {
  let burger = new Burger ('size', 'stuffing', 'extra');
  console.log(burger);
});

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
};

// showTotal () {
//   this.total.innerText = `Итого: ${this.price} рублей и ${this.calories} калорий`;
// };