(function () {
'use strict';


angular.module('ShoppingListCheckOff', [])
.controller('ToBuyShoppingController',ToBuyShoppingController)
.controller('AlreadyBoughtShoppingController',AlreadyBoughtShoppingController)
.service('ShoppingListCheckOffService',ShoppingListCheckOffService);

  //1 array
  ToBuyShoppingController.$inject = ['ShoppingListCheckOffService'];
  function ToBuyShoppingController(ShoppingListCheckOffService)
  {
    var toBuy = this;
    toBuy.toBuyFoods = ShoppingListCheckOffService.getToBuyFoods();
    toBuy.removeAndAddtoBought = function (index)
    {
      ShoppingListCheckOffService.removeAndAddtoBought(index);
    }
  }

  //2 array
  AlreadyBoughtShoppingController.$inject = ['ShoppingListCheckOffService'];
  function AlreadyBoughtShoppingController(ShoppingListCheckOffService)
  {
    var bought = this;
    bought.toBoughtFoods = ShoppingListCheckOffService.getToBoughtFoods();

  }

  function ShoppingListCheckOffService()
  {
    var service = this;

    var toBuyFoods =
    [
     {name: 'bananas', quantity: 1},
     {name: 'honey', quantity: 5},
     {name: 'apples', quantity: 9},
     {name: 'coffee', quantity: 2},
     {name: 'grapes', quantity: 3},
     {name: 'potatoes', quantity: 5},
     {name: 'milk', quantity: 3}
    ];

    var toBoughtFoods = [];
    service.removeAndAddtoBought = function (FoodIndex)
    {
      var ItemFoods = toBuyFoods.splice(FoodIndex, 1);
      toBoughtFoods.push(ItemFoods[0]);
    };
    service.getToBuyFoods = function ()
    {
      return toBuyFoods;
    };
    service.getToBoughtFoods = function ()
    {
      return toBoughtFoods;
    };
  }

})();
