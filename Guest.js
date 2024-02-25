"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Guest = /** @class */ (function () {
    function Guest(firstName, lastName, email) {
        this.firstName = firstName;
        this.lastName = lastName;
        this.email = this.setEmailCheck(email);
        this.addRole('Guest');
    }
    Object.defineProperty(Guest.prototype, "isSet", {
        get: function () {
            return this._isSet;
        },
        set: function (value) {
            this.createdOn = new Date();
            this._isSet = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Guest.prototype, "fullName", {
        get: function () {
            return "".concat(this.firstName, " ").concat(this.lastName);
        },
        enumerable: false,
        configurable: true
    });
    Guest.prototype.setEmailCheck = function (email) {
        if (email.includes('@')) {
            this.isSet = true;
            return email;
        }
        else {
            return 'Invalid email';
        }
    };
    Guest.prototype.EmailCompare = function (email) {
        return this.email === email;
    };
    Guest.prototype.addRole = function (role) {
        this.role = 'Guest';
    };
    return Guest;
}());
var guest1 = new Guest('Jane', 'Doe', 'jane@xyz.com');
console.log(guest1.fullName);
console.log(guest1.role);
