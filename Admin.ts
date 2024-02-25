import { User } from './User';

class Admin extends User {
  role: string;

  constructor(firstName: string, lastName: string, email: string){
    super(firstName, lastName, email);
    this.addRole('Admin');
  }
  
  addRole(role: string){
    this.role = 'Admin';
  }  
}

const admin1 = new Admin('John', 'Doe', 'admin@xyz.com');
console.log(admin1.fullName);
console.log(admin1.role);