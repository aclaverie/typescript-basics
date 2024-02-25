import User  from './User';

//some how the implements not working.
class Guest implements User {
  firstName: string;
  lastName: string;
  email: string;
  _role: string;
  _isSet: boolean;
  set isSet(value: boolean) {
    this.createdOn = new Date();
    this._isSet = value;
  }
  get isSet(): boolean {
    return this._isSet; 
  }
    
  createdOn: Date;

  constructor(firstName: string, lastName: string, email: string){
    this.firstName = firstName;
    this.lastName = lastName;
    this.email = this.setEmailCheck(email);    
    this.addRole('Guest');
  }

  get fullName(): string {
    return `${this.firstName} ${this.lastName}`;
  }

  setEmailCheck(email): string {
    if(email.includes('@')){     
      return email;
    } else {
      return 'Invalid email';
    }
  }

  EmailCompare(email: string): boolean {
    return this.email === email;
  }
  
  addRole(role: string){
    this._role = role;
  }  
}

const guest1 = new Guest( 'John', 'Doe', 'jane@xyz.com');
console.log(guest1.fullName);
console.log(guest1._role);
