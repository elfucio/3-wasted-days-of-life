'use strict';

let btn = document.querySelector ('#btn'),
    uForm = document.querySelector('#uForm'),
    total = document.querySelector ('.total');
      
btn.addEventListener('click', function() {
  let burger = new Burger ('price', 'calories', 'size', 'stuffing', 'extra');
  console.log(burger);
});

class Burger {
    constructor (price, calories, size, stuffing, extra) {
      this.price = this.getPrice(price);
      this.calories = this.getCalories(calories);
      this.size = this._getSize(size);
      this.stuffing = this._getStuffing(stuffing);
      this.extra = this._getExtra(extra);
    };

    getPrice(attrName) {
      let obj = {};
      obj = uForm.querySelector (`input[name=${attrName}]:checked`);      
      return obj;
    };

    getCalories(attrName) {
      let obj = {};
      obj = uForm.querySelector (`input[name=${attrName}]:checked`);      
      return obj;
    };

    _getSize(attrName) {
      let obj = {};
      obj = uForm.querySelector (`input[name=${attrName}]:checked`);
      console.log(obj.dataset.price);
      console.log(obj.dataset.calories);
      return obj.dataset;      
    };

    _getStuffing(attrName) {
      let obj = {};
      obj = uForm.querySelector (`input[name=${attrName}]:checked`);     
      console.log(obj.dataset.price);
      console.log(obj.dataset.calories); 
      return obj.dataset;
    };

    _getExtra (attrName) {
      let objects = uForm.querySelectorAll (`input[name=${attrName}]:checked`);
      console.log(objects.dataset);
      
      // let arr = [];
      // objArr.forEach (el => {
      //     arr.push ([el.dataset("data-price"), el.dataset("data-cal")]);
      // });
      // return arr;
    };
    
};



// showTotal () {
//   this.total.innerText = `Итого: ${this.price} рублей и ${this.calories} калорий`;
// };