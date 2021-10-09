(function () {
  "use strict";
  angular
    .module("LunchCheck", [])
    .controller("LunchCheckController", LunchCheckController);

  LunchCheckController.$inject = ["$scope"];
  function LunchCheckController($scope) {
    $scope.dishes = "";
    $scope.isDishInputValid = true;

    $scope.checkIfTooMuch = () => {
      let message = "Please enter data first";

      // Do not consider blanks  or whitespace to be dishes in the count
      const dishesList = $scope.dishes
        .split(",")
        .filter((dish) => dish.trim() !== "");

      $scope.isDishInputValid = true;
      if (dishesList.length >= 1 && dishesList.length <= 3) {
        message = "Enjoy!";
      } else if (dishesList.length > 3) {
        message = "Too much!";
      } else {
        $scope.isDishInputValid = false;
      }
      $scope.message = message;
    };
  }
})();
