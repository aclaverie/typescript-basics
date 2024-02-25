class MyClass {
  private myPrivateProperty: string;
  public myPublicProperty: number;

  constructor(privateProperty: string, publicProperty: number) {
    this.myPrivateProperty = privateProperty;
    this.myPublicProperty = publicProperty;
  }

  private myPrivateMethod(): void {
    console.log("This is a private method.");
  }

  public myPublicMethod(): void {
    console.log("This is a public method.");
    this.myPrivateMethod();
  }
}

const myObject = new MyClass("private value", 123);
console.log(myObject.myPublicProperty); // Output: 123
myObject.myPublicMethod(); // Output: "This is a public method." followed by "This is a private method."