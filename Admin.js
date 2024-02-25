"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
var User_1 = require("./User");
var Admin = /** @class */ (function (_super) {
    __extends(Admin, _super);
    function Admin(firstName, lastName, email) {
        var _this = _super.call(this, firstName, lastName, email) || this;
        _this.addRole('Admin');
        return _this;
    }
    Admin.prototype.addRole = function (role) {
        this._role = role;
    };
    return Admin;
}(User_1.default));
var admin1 = new Admin('John', 'Doe', 'admin@xyz.com');
console.log(admin1.fullName);
console.log(admin1._role);
