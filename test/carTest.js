const chai = require('chai'); // 1
const assert = chai.assert;

const shouldBuyCar = require('../shouldBuyCar.js'); // 2

describe("#shouldBuyCar()", function() { // 3

  it("should return false if it's a hatchback", function() { // 4
    const car = {
      type: "hatchback"
    };
    const shouldBuy = shouldBuyCar(car);
    assert.isFalse(shouldBuy);
  });



  it("should return true if the color is pink", function() {
    const car = {
      color: "pink"
    };
    const shouldBuy = shouldBuyCar(car);
    assert.isTrue(shouldBuy);
  });


  it("should return true when the car has 7 litres/100km and is under or equal to $5,000", function() {
    const car = {
      color: "blue",
      type: "truck",
      price: "5000",
      litresPer100km: "7"
    };
    const shouldBuy = shouldBuyCar(car);
    assert.isTrue(shouldBuy);
  });

  it("should return false when the car has 12 litres/100km and is under or equal to $5,000", function() {
    const car = {
      color: "red",
      type: "truck",
      price: "5000",
      litresPer100km: "12"
    };
    const shouldBuy = shouldBuyCar(car);
    assert.isFalse(shouldBuy);
  });
  
  it("should return false when the car has 6 litres/100km and is over $5,000", function() {
    const car = {
      color: "red",
      type: "truck",
      price: "5000.1",
      litresPer100km: "10"
    };
    const shouldBuy = shouldBuyCar(car);
    assert.isFalse(shouldBuy);
  });
  
  it("should return false when the car is hatchback and pink", function() {
    const car = {
      color: "pink",
      type: "hatchback",
      price: "5",
      litresPer100km: "10"
    };
    const shouldBuy = shouldBuyCar(car);
    assert.isFalse(shouldBuy);
  });

  it("should return true when the car has 11 litres/100km and is under or equal to $5000", function() {
    const car = {
      color: "pink",
      type: "van",
      price: "5",
      litresPer100km: "11"
    };
    const shouldBuy = shouldBuyCar(car);
    assert.isTrue(shouldBuy);
  });
  
  it("should return false when the car has 5 litres/100km and is under or equal to $5,000", function() {
    const car = {
      color: "red",
      type: "truck",
      price: "4999.99",
      litresPer100km: "5"
    };
    const shouldBuy = shouldBuyCar(car);
    assert.isFalse(shouldBuy);
  });
});
