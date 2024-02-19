// Purpose: A simple banking system that allows for the creation of Savings and Fixed Deposit accounts
// Author: Anthony V. Claverie
// Last Modified: 2021-08-10

// Global variable to hold the registered Account users
var globalRegisteredAccounts:Account[] = [];

enum AccountType {
  Savings = 0,
  FixedDeposit = 1
}
class Account {
  // Properties of the Account class
  acctNumber: number;
  acctName: string;
  acctBalance: number;
  acctType: number // 0 for Savings, 1 for Fixed Deposit
  
  // Constructor to initialize the account details
  constructor(acctName: string, acctBalance: number, acctType: number){
    this.acctNumber = this.getAcctNumber();
    this.acctName = acctName;
    this.acctBalance = acctBalance;
    this.acctType = acctType;
    console.log(acctName + " account created successfully");
  }

  // Method to generate account number
  getAcctNumber(): number{
    let aNum = Math.floor(Math.random() * 1000) + 1;
    if(this.acctNumberCheck(aNum, globalRegisteredAccounts)){
      return this.getAcctNumber();  
    } else {        
      return aNum;
    }
  }

  // Method to check if the account number already exists
  acctNumberCheck(acctNumber: number, registeredUsers: any[]){
    for(let i = 0; i < registeredUsers.length; i++){
      if(acctNumber == registeredUsers[i]){
          return true;
      }
    }
    return false;
  }
  
  // Method to deposit into the account
  withdraw(amount: number){
    this.acctBalance -= amount;
  }

  // Method to get the account balance
  getBalance(){
    return this.acctBalance;
  }    
}

// Ideposit interface
// This interface has a deposit method
interface Ideposit {
  deposit(amount: number);
}

// Savings Account class that extends Account class and implements Ideposit interface
// Savings Account can only be created with any amount
class SavingsAccount extends Account implements Ideposit{
  constructor(acctName: string, acctBalance: number){
    super(acctName, acctBalance, 0);
  }

  // Overriding the deposit method  
  deposit(amount: number){
    this.acctBalance += amount;
  }    
}

// Fixed Deposit Account class that extends Account class and implements Ideposit interface
// Fixed Deposit Account can only be created with a minimum of 1000
// Fixed Deposit Account can only be deposited with a minimum of 1000
class FixedAccount extends Account implements Ideposit{
  constructor(acctName: string, acctBalance: number){
    super(acctName, acctBalance, 1);
  }

  // Overriding the deposit method
  deposit(amount: number){
    if(amount >= 1000){
      this.acctBalance += amount;
    } else {
      console.log("You cannot deposit less than 1000");
    }      
  }    
}


// Creating an instance of Savings Account
var savingsAcct = new SavingsAccount('John', 1000);

// Adding the created account to the global account registered users
globalRegisteredAccounts.push(savingsAcct);
var savingsAcct2 = new SavingsAccount('Jane', 2000);
globalRegisteredAccounts.push(savingsAcct2);
var savingsAcct3 = new SavingsAccount('Jude', 3000);
globalRegisteredAccounts.push(savingsAcct3);
var savingsAcct4 = new SavingsAccount('Jude', 3000);
globalRegisteredAccounts.push(savingsAcct4);

// Creating an instance of Fixed Deposit Account
var fixedAcct = new FixedAccount('Jane', 2000);

// Adding the created account to the global account registered users
globalRegisteredAccounts.push(fixedAcct);

// Depositing and Withdrawing from the created accounts
savingsAcct.deposit(200);
savingsAcct.withdraw(100);
fixedAcct.deposit(200);
fixedAcct.deposit(1000);

// Displaying the account details
console.log(savingsAcct.acctName + " account Balance: " + savingsAcct.getBalance());

// Looping through the global account registered users to display the account details
for(let i = 0; i < globalRegisteredAccounts.length; i++){
  
  // Variable to hold the account type
  let acctType:string = "";

  // Checking the account type and assigning the appropriate value to acctType
  switch(globalRegisteredAccounts[i].acctType){    
    case 0: acctType = AccountType[globalRegisteredAccounts[i].acctType].toString();
    break;
    case 1: acctType = AccountType[globalRegisteredAccounts[i].acctType].toString();
    break;
    default: acctType = "Invalid Account Type";
    break;
  }

  // Displaying the account details
  console.log(
    "Account Number: " + globalRegisteredAccounts[i].acctNumber + " \t " + 
    "Account Name: " + globalRegisteredAccounts[i].acctName + " \t " + 
    "Account Balance: " + globalRegisteredAccounts[i].acctBalance + " \t " + 
    "Account Type: " +  acctType);
}
