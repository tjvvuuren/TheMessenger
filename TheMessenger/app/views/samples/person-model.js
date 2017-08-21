"use strict";
var observable_1 = require("tns-core-modules/data/observable");
var PersonViewModel = (function (_super) {
    __extends(PersonViewModel, _super);
    function PersonViewModel() {
        _super.call(this);
        this.person = new Person("John", 23, "john@company.com", "New York", "5th Avenue", 11);
    }
    Object.defineProperty(PersonViewModel.prototype, "person", {
        get: function () {
            return this.get("_person");
        },
        set: function (value) {
            this.set("_person", value);
        },
        enumerable: true,
        configurable: true
    });
    return PersonViewModel;
}(observable_1.Observable));
exports.PersonViewModel = PersonViewModel;
var Person = (function () {
    function Person(name, age, email, city, street, streetNumber) {
        this.name = name;
        this.age = age;
        this.email = email;
        this.city = city;
        this.street = street;
        this.streetNumber = streetNumber;
    }
    return Person;
}());
exports.Person = Person;
//# sourceMappingURL=person-model.js.map