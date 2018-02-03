(function () {
'use strict';
//Declare `ng-app` either on the `html` or the `body` element.
//Name your app `ShoppingListCheckOff`.

angular.module('ShoppingListCheckOff', [])

//Go back to `index.html` and declare 2 controllers using `controller as` syntax. One controller should be called `ToBuyShoppingController` and the other called `AlreadyBoughtShoppingController`.
//You are *required* to have 2 controllers for this assignment.
//

.controller('ToBuyShoppingController',ToBuyShoppingController)
.controller('AlreadyBoughtShoppingController',AlreadyBoughtShoppingController)

//You will obviously need to share data between these controllers.
//Go back to `app.js` and implement this data sharing using the *singleton* approach with the `.service` declaration.
//Call the service `ShoppingListCheckOffService`.

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
     {name: 'bananas', quantity: 4},
     {name: 'honey', quantity: 1},
     {name: 'apples', quantity: 2},
     {name: 'coffee', quantity: 1},
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
