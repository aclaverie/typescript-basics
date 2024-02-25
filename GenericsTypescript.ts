// Generics allow us to merge old data with new data from legacy systems
// Run: tsc GenericsTypescript.ts
// Output: GenericsTypescript.js
export default class User<T>{
  name: string;
  age: number;
  email: string;
  _role: string;
  // This is where we make use of the generic type which
  // Allows us to use the same class User for different User data
  // Example from an legacy system or alternate one that
  // has user data we want to use in this new system.
  public classicUserData: T;

  public mergeClassicUser(params: T): void {
    const { name, age, email, _role } = this;
    this.classicUserData = {name, age, email, _role, ...params};
  }
}

interface ClassicUser {
  name: {first: string, last: string};
}

interface LegacyUser {
  name: {first: string, middle: string, last: string};
}

const user = new User<ClassicUser>();
user.mergeClassicUser({name: {first: 'John', last: 'Doe'}});
console.log(user.classicUserData.name.first);

const user2 = new User<LegacyUser>();
user2.mergeClassicUser({name: {first: 'John', middle: 'Doe', last: 'Smith'}});
console.log(user2.classicUserData.name.middle);

// Output:
// John
// Doe
