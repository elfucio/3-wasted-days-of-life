'use strict';

let btn = document.querySelector ('#btn'),
    total = document.querySelector ('.total');
      
btn.addEventListener('click', function() {
  let burger = new Burger ('price', 'calories','size', 'stuffing', 'extra');
  console.log(burger);
});

class Burger {
    constructor (price, calories, size, stuffing, extra) {
      this.price = this.getPrice;
      this.calories = 0;
       this.size = this._getSize(size);
      this.stuffing = this._getStuffing(stuffing);
      this.extra = this._getExtra(extra);
    };

    getPrice(attrName) {
      let obj = document.querySelector(`input[data=${attrName}]:checked`);
      console.log(obj);
      return obj.getAttribute('data-price');
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
    // _getCalories (attrName) {
    //   let obj = document.querySelector (`input[name=${attrName}]:checked`);
    //   return obj.dataset['cal'];
    // };    
    
};



// showTotal () {
//   this.total.innerText = `Итого: ${this.price} рублей и ${this.calories} калорий`;
// };