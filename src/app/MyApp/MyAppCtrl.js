angular.module('myAppModule.controllers', [])
.controller('myAppCtrl', function ($scope, myAppDataService) {

    var myAppData = myAppDataService.getData();

    $scope.allFields = myAppData.fields;

    for (var i = 0; i < myAppData.fields.length; i++) {
        var id = myAppData.fields[i].id;
        $scope[id] = myAppData.fields[i];
    };

    $scope.firstName.validations = [];
    $scope.firstName.validations[0] = { rule: "required", func: "ng-required", value: "$parent.firstNameRequired ()", message: "First Name is required" };

    $scope.firstNameRequired = function () {
        return true;
    };

    $scope.personSection = "Persons";

});

