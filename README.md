ng-form-builder
===============

Set of Angularjs directives, and demo app, to build data entry forms w/validation using metadata.  Striving to minimize the amount of markup, while retaining the inherent flexibility and power of Angularjs.

By taking a relatively extreme approach toward the DRY (don't repeat yourself) principle, we can
- enable application developers to take more of a what, rather than how, approach toward markup
- achieve layout and UI behavior consistency through reusable directives
- reduce the specific dependency on a CSS framework (in this case, Bootstrap) by centralizing its use
- minimize errors and increase productivity by writing less markup

Given JSON, generally sent down from a server, custom directives consume that data and metadata to build an HTML5 form.  That data entry form supports declarative validations included in the JSON, but can be extended with custom validation logic in the app's controller.

Given some metadata and data:
```
{
    "id": "lastName",
    "title": "Last Name",
    "type": "textfield",
    "value": "Doe",
    "required": false,
    "validations": [
        { rule: "maxlength", func: "ng-maxlength", value: "5", message: "Last Name maximum length is 5" }
    ]
},
```
The view can render a label/control pair:
```
<div fb-field  field="lastName"></div>
```
Which the directive code generates to:
```
<div class="ng-isolate-scope" field="field" fb-field="">
    <div class="form-group ng-scope"
         ng-class="{ 'has-error' : innerForm.myField.$invalid &amp;&amp;
         !innerForm.myField.$pristine }">
        <label class="col-sm-2 control-label" ng-required="field.required">
            <span class="ng-binding" ng-bind="field.title">Last Name</span>
            <span class="ng-hide" ng-show="field.required">*</span>
        </label>
        <div>
        </div>
        <div class="col-sm-10">
            <ng-form class="ng-pristine ng-valid" name="innerForm">
                <input name="myField" class="form-control ng-pristine ng-valid ng-valid-maxlength ng-valid-required" id="lastName" required="required"
                       type="text" ng-model="field.value" ng-maxlength="5">
                <div id="messages">
                    <p class="help-block ng-hide" ng-show="!innerForm.myField.$pristine &amp;&amp; innerForm.myField.$error.required">Last Name is required  </p>
                    <p class="help-block ng-hide" ng-show="!innerForm.myField.$pristine &amp;&amp; innerForm.myField.$error.maxlength">Last Name maximum length is 5  </p>
                </div>
            </ng-form>
        </div>
    </div>
</div>
```