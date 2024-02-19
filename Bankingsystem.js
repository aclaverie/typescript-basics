// Purpose: A simple banking system that allows for the creation of Savings and Fixed Deposit accounts
// Author: Anthony V. Claverie
// Last Modified: 2021-08-10
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
// Global variable to hold the registered Account users
var globalRegisteredAccounts = [];
var AccountType;
(function (AccountType) {
    AccountType[AccountType["Savings"] = 0] = "Savings";
    AccountType[AccountType["FixedDeposit"] = 1] = "FixedDeposit";
})(AccountType || (AccountType = {}));
var Account = /** @class */ (function () {
    // Constructor to initialize the account details
    function Account(acctName, acctBalance, acctType) {
        this.acctNumber = this.getAcctNumber();
        this.acctName = acctName;
        this.acctBalance = acctBalance;
        this.acctType = acctType;
        console.log(acctName + " account created successfully");
    }
    // Method to generate account number
    Account.prototype.getAcctNumber = function () {
        var aNum = Math.floor(Math.random() * 1000) + 1;
        if (this.acctNumberCheck(aNum, globalRegisteredAccounts)) {
            return this.getAcctNumber();
        }
        else {
            return aNum;
        }
    };
    // Method to check if the account number already exists
    Account.prototype.acctNumberCheck = function (acctNumber, registeredUsers) {
        for (var i = 0; i < registeredUsers.length; i++) {
            if (acctNumber == registeredUsers[i]) {
                return true;
            }
        }
        return false;
    };
    // Method to deposit into the account
    Account.prototype.withdraw = function (amount) {
        this.acctBalance -= amount;
    };
    // Method to get the account balance
    Account.prototype.getBalance = function () {
        return this.acctBalance;
    };
    return Account;
}());
// Savings Account class that extends Account class and implements Ideposit interface
// Savings Account can only be created with any amount
var SavingsAccount = /** @class */ (function (_super) {
    __extends(SavingsAccount, _super);
    function SavingsAccount(acctName, acctBalance) {
        return _super.call(this, acctName, acctBalance, 0) || this;
    }
    // Overriding the deposit method  
    SavingsAccount.prototype.deposit = function (amount) {
        this.acctBalance += amount;
    };
    return SavingsAccount;
}(Account));
// Fixed Deposit Account class that extends Account class and implements Ideposit interface
// Fixed Deposit Account can only be created with a minimum of 1000
// Fixed Deposit Account can only be deposited with a minimum of 1000
var FixedAccount = /** @class */ (function (_super) {
    __extends(FixedAccount, _super);
    function FixedAccount(acctName, acctBalance) {
        return _super.call(this, acctName, acctBalance, 1) || this;
    }
    // Overriding the deposit method
    FixedAccount.prototype.deposit = function (amount) {
        if (amount >= 1000) {
            this.acctBalance += amount;
        }
        else {
            console.log("You cannot deposit less than 1000");
        }
    };
    return FixedAccount;
}(Account));
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
for (var i = 0; i < globalRegisteredAccounts.length; i++) {
    // Variable to hold the account type
    var acctType = "";
    // Checking the account type and assigning the appropriate value to acctType
    switch (globalRegisteredAccounts[i].acctType) {
        case 0:
            acctType = AccountType[globalRegisteredAccounts[i].acctType].toString();
            break;
        case 1:
            acctType = AccountType[globalRegisteredAccounts[i].acctType].toString();
            break;
    }
    // Displaying the account details
    console.log("Account Number: " + globalRegisteredAccounts[i].acctNumber + " \t " +
        "Account Name: " + globalRegisteredAccounts[i].acctName + " \t " +
        "Account Balance: " + globalRegisteredAccounts[i].acctBalance + " \t " +
        "Account Type: " + acctType);
}
