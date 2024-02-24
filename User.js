var User = /** @class */ (function () {
    function User(firstName, lastName, email) {
        this.firstName = firstName;
        this.lastName = lastName;
        this.email = this.setEmailCheck(email);
    }
    Object.defineProperty(User.prototype, "isSet", {
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
    Object.defineProperty(User.prototype, "fullName", {
        get: function () {
            return "".concat(this.firstName, " ").concat(this.lastName);
        },
        enumerable: false,
        configurable: true
    });
    User.prototype.setEmailCheck = function (email) {
        if (email.includes('@')) {
            this.isSet = true;
            return email;
        }
        else {
            return 'Invalid email';
        }
    };
    User.prototype.EmailCompare = function (email) {
        return this.email === email;
    };
    return User;
}());
var user1 = new User('John', 'Doe', 'john@xyz.com');
var user2 = new User('Jane', 'Doe', 'jane.cloud.com');
console.log(user1.fullName);
console.log(user2.fullName);
console.log(user1.email);
console.log(user2.email);
console.log(user1.isSet);
console.log(user2.isSet);
console.log(user1.createdOn);
console.log(user2.createdOn);
console.log(user1.EmailCompare('jon@xyz.com'));
console.log(user2.EmailCompare('jane.cloud.com'));
