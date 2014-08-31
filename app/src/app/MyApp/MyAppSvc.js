angular.module('myAppModule.services', [])
    .factory('myAppDataService', function () {
        return {
            getData: function () {
                return {
                    "id": "1",
                    "name": "My Test Form",
                    "fields": [
                        {
                            "id": "firstName",
                            "title": "First Name",
                            "type": "textfield",
                            "value": "",
                            "required": true
                        },
                        {
                            "id": "lastName",
                            "title": "Last Name",
                            "type": "textfield",
                            "value": "Doe",
                            "required": false,
                            "validations": [
                                { rule: "required", func: "required", value: true, message: "Last Name is required" },
                                { rule: "maxlength", func: "ng-maxlength", value: "5", message: "Last Name maximum length is 5" }
                            ]
                        },
                        {
                            "id": "address",
                            "title": "Address",
                            "type": "textfield",
                            "value": "",
                            "required": false,
                            "validations": [{ rule: "required", func: "required", value: true, message: "Address is required" }]
                        },
                        {
                            "id": "city",
                            "title": "City",
                            "type": "selectlist",
                            "value": "",
                            "required": true,
                            "validations": [{ rule: "required", func: "required", value: true, message: "City is required" }],
                            "options": [
                                { "id": 'Philadelphia', "title": 'Philadelphia' },
                                {"id": 'Chester', "title": 'Chester'},
                                {"id": 'Newtown', "title": 'Newtown'},
                                {"id": 'Camden', "title": 'Camden'}
                            ]
                        },
                        {
                            "id": "state",
                            "title": "State",
                            "type": "selectlist",
                            "value": "PA",
                            "required": true,
                            "validations": [],
                            "options": [
                                { "id": 'DE', "title": 'Delaware' },
                                { "id": 'NJ', "title": 'New Jersey' },
                                { "id": 'NY', "title": 'New York' },
                                { "id": 'PA', "title": 'Pennsylvania' }
                            ]
                        },
                        {
                            "id": "comment",
                            "title": "Comment",
                            "type": "textarea",
                            "value": "",
                            "required": false,
                            "validations": []
                        },

                    {
                            "id": "dob",
                            "title": "Date of Birth",
                            "type": "date",
                            "value": "",
                            "required": true,
                            "validations": []
                        }

                    ]
                };
            }
        };
    });

