'use strict';

let uForm = document.querySelector('#uForm'),
    btn = document.querySelector ('#btn'),
    total = uForm.querySelector ('.total'),
    choice = uForm.querySelector ('.choice');
      
btn.addEventListener('click', function() {
  let burger = new Burger ('price', 'calories', 'size', 'stuffing', 'extra');
  // burger.showOrder();
  console.log(burger);
});

class Burger {
    constructor (price, calories, size, stuffing, extra) {
      this.price = 0;
      this.calories = 0;
      this.size = this._getSize(size);
      this.stuffing = this._getStuffing(stuffing);
      this.extra = this._getExtra(extra);
    };

    _getPrice(attrName) {
      let obj = {};
      obj = uForm.querySelector (`input[name=${attrName}]:checked`);      
      return obj;
    };

    _getCalories(attrName) {
      let obj = {};
      obj = uForm.querySelector (`input[name=${attrName}]:checked`);      
      return obj;
    };

    _getSize(attrName) {
      let obj = {};
      obj = uForm.querySelector (`input[name=${attrName}]:checked`);
      return obj.dataset;      
    };

    _getStuffing(attrName) {
      let obj = {};
      obj = uForm.querySelector (`input[name=${attrName}]:checked`);      
      return obj.dataset;
    };

    _getExtra (attrName) {
      let objArr = [...uForm.querySelectorAll (`input[name=${attrName}]:checked`)];
      let arr = [];
      objArr.forEach (el => {
          arr.push ([el.value, el.dataset.price, el.dataset.calories]);
      });
      return arr;
    };

    calculateOrder() {		
      this.price = +this.size.price + +this.stuffing.price;
      this.calories = +this.size.calories + +this.stuffing.calories;
      // this.extra.forEach (el => {
      //   this.price = this.price + el.dataset.price;
      // )};
    };

};