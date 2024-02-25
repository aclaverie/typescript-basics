import User from './User';

class Admin extends User {
  _role: string;

  constructor(firstName: string, lastName: string, email: string){
    super(firstName, lastName, email);
    this.addRole('Admin');
  }
  
  addRole(role: string){
    this._role = role;
  }  
}

const admin1 = new Admin('John', 'Doe', 'admin@xyz.com');
console.log(admin1.fullName);
console.log(admin1._role);