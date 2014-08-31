'use strict';

angular.module('FormGeneration.directives', [])
  .directive('fbFieldset', function () {
      return {
          templateUrl: './src/common/directives/FormGeneration/fieldset.html',
          restrict: 'AE',
          transclude: true,
          scope: {
              legend: "="
          }
      };
  })
  .directive('fbButtons', function () {
      return {
          templateUrl: './src/common/directives/FormGeneration/buttons.html',
          restrict: 'AE'
      };
  })
    .directive('fbField', function ($http, $compile) {

        var fieldTemplate = {
            getControlName: function (field) {

                return (field.type === 'textarea' || field.type === 'selectlist') ? field.type : 'input';
            },
            get: function (field) {
                if (fieldTemplate[field.type]) {
                    return fieldTemplate[field.type](field);
                }
                return "";
            },
            textarea: function (field) {
                return '<textarea type="text" id="{{field.id}}" name="myField" class="form-control"  ng-model="field.value"></textarea>';
            },
            textfield: function (field) {
                return '<input type="text" id="{{field.id}}" name="myField" class="form-control"  ng-model="field.value">';
            },
            date: function (field) {
                return '<input type="date" id="{{field.id}}" name="myField" class="form-control"  ng-model="field.value">';
            },
            selectlist: function (field) {
                var required = (field.required) ? "required" : "";
                var selectOne = (field.value.length == 0) ? '<option value="">Select One</option>' : '';
                return '<select ' + required + ' name="myField" ng-model="field.value" ng-options="option.id as option.title for option in field.options">' + selectOne + '</select>';
            },
            outer: '<div class="form-group" ng-class="{ \'has-error\' : innerForm.myField.$invalid && !innerForm.myField.$pristine }">' +
                '    <label class="col-sm-2 control-label" ng-required="field.required" ng-cloak>' +
                '        <span ng-bind="field.title"></span><span ng-show="field.required">*</span></label>' +
                '    <div></div>' +
                '    <div class="col-sm-10" >' +
                '        <ng-form name="innerForm">' +
                '            --replace--' +
                '            <div id="messages"></div>' +
                '        </ng-form>' +
                '    </div>' +
                '</div>',
            html: function (field) {
                return this.outer.replace('--replace--', this.get(field))
            },
            setValidations: function (myElement, myField) {
                var myInput = myElement.find(this.getControlName(myField));

                var validations = myField.validations ? myField.validations : [];
                for (var i = 0; i < validations.length; i++) {

                    var validation = validations[i];
                    var attrName = validation.func;
                    var attrVal = validation.value;
                    myInput.attr(attrName, attrVal);
                    var messages = myElement.find('#messages');
                    messages.append("<p class='help-block' ng-show='!innerForm.myField.$pristine && innerForm.myField.$error." + validation.rule + "'>" + validation.message + "  </p>");
                }
            }
        };
        var linker = function (scope, element) {

            element.html(fieldTemplate.html(scope.field));

            fieldTemplate.setValidations(element, scope.field);

            $compile(element.contents())(scope);

            return;
        };
        return {
            template: '<div>{{field}}</div>',
            restrict: 'AE',
            scope: {
                field: '='
            },
            link: linker
        };
    });
