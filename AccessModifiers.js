var MyClass = /** @class */ (function () {
    function MyClass(privateProperty, publicProperty) {
        this.myPrivateProperty = privateProperty;
        this.myPublicProperty = publicProperty;
    }
    MyClass.prototype.myPrivateMethod = function () {
        console.log("This is a private method.");
    };
    MyClass.prototype.myPublicMethod = function () {
        console.log("This is a public method.");
        this.myPrivateMethod();
    };
    return MyClass;
}());
var myObject = new MyClass("private value", 123);
console.log(myObject.myPublicProperty); // Output: 123
myObject.myPublicMethod(); // Output: "This is a public method." followed by "This is a private method."
