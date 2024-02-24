class User {
  firstName: string;
  lastName: string;
  email: string;
  private _isSet: boolean;
  createdOn: Date;

  constructor(firstName: string, lastName: string, email: string){
    this.firstName = firstName;
    this.lastName = lastName;
    this.email = this.setEmailCheck(email);
  }

  set isSet(value: boolean){
    this.createdOn = new Date();
    this._isSet = value;
  }

  get isSet(): boolean {
    return this._isSet;
  }

  get fullName(): string {
    return `${this.firstName} ${this.lastName}`;
  }

  setEmailCheck(email): string {
    if(email.includes('@')){ 
      this.isSet = true;     
      return email;
    } else {
      return 'Invalid email';
    }
  }

  EmailCompare(email: string): boolean {
    return this.email === email;
  }
}

const user1 = new User('John', 'Doe', 'john@xyz.com');
const user2 = new User('Jane', 'Doe', 'jane.cloud.com');

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
