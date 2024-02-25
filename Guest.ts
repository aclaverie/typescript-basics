import { User } from './User';

//some how the implements not working.
class Guest implements User {
  firstName: string;
  lastName: string;
  email: string;
  role: string;
  private _isSet: boolean;
  createdOn: Date;

  constructor(firstName: string, lastName: string, email: string){
    this.firstName = firstName;
    this.lastName = lastName;
    this.email = this.setEmailCheck(email);
    this.addRole('Guest');
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
  
  addRole(role: string){
    this.role = 'Guest';
  }  
}

const guest1 = new Guest('Jane', 'Doe', 'jane@xyz.com');
console.log(guest1.fullName);
console.log(guest1.role);
