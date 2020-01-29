'use strict';

let uForm = document.querySelector('#uForm'),
    btn = document.querySelector ('#btn'),
    total = document.querySelector ('.total');

uForm.addEventListener('change', updateOrder);
btn.addEventListener('click', updateOrder);

class Burger {
    constructor (price, calories, size, stuffing, extra) {
      this.price = 0;
      this.calories = 0;
      this.size = this._getSize(size);
      this.stuffing = this._getStuffing(stuffing);
      this.extra = this._getExtra(extra);
    }

    _getPrice(attrName) {
      let obj = {};
      obj = uForm.querySelector (`input[name=${attrName}]:checked`);      
      return obj;
    }

    _getCalories(attrName) {
      let obj = {};
      obj = uForm.querySelector (`input[name=${attrName}]:checked`);      
      return obj;
    }

    _getSize(attrName) {
      let obj = {};
      obj = uForm.querySelector (`input[name=${attrName}]:checked`);
      return obj.dataset;      
    }

    _getStuffing(attrName) {
      let obj = {};
      obj = uForm.querySelector (`input[name=${attrName}]:checked`);      
      return obj.dataset;
    }

    _getExtra (attrName) {
      let objArr = [...uForm.querySelectorAll (`input[name=${attrName}]:checked`)];
      let arr = [];
      objArr.forEach (i => {
          arr.push ([i.dataset.price, i.dataset.calories]);
      });
      return arr;
    }

    calculateOrder() {		
      this.price = +this.size.price + +this.stuffing.price;
      this.calories = +this.size.calories + +this.stuffing.calories;
      this.extra.forEach (i => {
        this.price += +(i[0]);
        this.calories += +(i[1]);
      });
    }

    showTotal () {		
      this.calculateOrder();
        total.innerText = `Итого: ${this.price} рублей / rub, ${this.calories} калорий / calories`;
    }
}

function updateOrder() {
  let burger = new Burger ('price', 'calories', 'size', 'stuffing', 'extra');
  burger.showTotal();
}