// Purpose: A simple banking system that allows for the creation of Savings and Fixed Deposit accounts
// Author: Anthony V. Claverie
// Last Modified: 2024-19-02
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
        console.log("".concat(acctName, " account created successfully"));
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
        var found = false;
        registeredUsers.forEach(function (user) {
            if (user.acctNumber == acctNumber) {
                found = true;
            }
        });
        return found;
    };
    // Method to deposit into the account
    Account.prototype.withdraw = function (amount) {
        this.acctBalance -= amount;
        console.log("Success! New account balance: ".concat(this.acctBalance));
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
        return _super.call(this, acctName, acctBalance, AccountType.Savings) || this;
    }
    // Overriding the deposit method  
    SavingsAccount.prototype.deposit = function (amount) {
        this.acctBalance += amount;
        console.log("Success! New account balance: ".concat(this.acctBalance));
    };
    return SavingsAccount;
}(Account));
// Fixed Deposit Account class that extends Account class and implements Ideposit interface
// Fixed Deposit Account can only be created with a minimum of 1000
// Fixed Deposit Account can only be deposited with a minimum of 1000
var FixedAccount = /** @class */ (function (_super) {
    __extends(FixedAccount, _super);
    function FixedAccount(acctName, acctBalance) {
        return _super.call(this, acctName, acctBalance, AccountType.FixedDeposit) || this;
    }
    // Overriding the deposit method
    FixedAccount.prototype.deposit = function (amount) {
        if (amount >= 1000) {
            this.acctBalance += amount;
            console.log("Success! New account balance: ".concat(this.acctBalance));
        }
        else {
            console.log("You cannot deposit less than 1000.");
        }
    };
    return FixedAccount;
}(Account));
// Creating an instance of Savings Account
var savingsAcct = new SavingsAccount('John', 1000);
// Adding the created account to the global account registered users
globalRegisteredAccounts.push(savingsAcct);
var savingsAcct2 = new SavingsAccount('Jane M', 2000);
globalRegisteredAccounts.push(savingsAcct2);
var savingsAcct3 = new SavingsAccount('Jude L', 3000);
globalRegisteredAccounts.push(savingsAcct3);
var savingsAcct4 = new SavingsAccount('Jude M', 3000);
globalRegisteredAccounts.push(savingsAcct4);
// Creating an instance of Fixed Deposit Account
var fixedAcct = new FixedAccount('Jane M', 2000);
// Adding the created account to the global account registered users
globalRegisteredAccounts.push(fixedAcct);
// Depositing and Withdrawing from the created accounts
savingsAcct.deposit(200);
savingsAcct.withdraw(100);
fixedAcct.deposit(200);
fixedAcct.deposit(1000);
// Displaying the account details
var balance = savingsAcct.getBalance();
console.log("".concat(savingsAcct.acctName, " account Balance: ").concat(balance));
// Looping through the global account registered users to display the account details
globalRegisteredAccounts.forEach(function (account) {
    // Variable to hold the account type
    var acctType = "";
    // Checking the account type and assigning the appropriate value to acctType
    switch (account.acctType) {
        case 0:
        case 1:
            acctType = AccountType[account.acctType].toString();
            break;
        default:
            acctType = "Invalid Account Type";
            break;
    }
    // Displaying the account details
    console.log("\n  Account Number: ".concat(account.acctNumber, " \t \n  Account Name: ").concat(account.acctName, " \t \n  Account Balance: ").concat(account.acctBalance, " \t \n  Account Type: ").concat(acctType));
});
