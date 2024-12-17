const accountId = 12324;
let accountEmail = "user@gmail.com";
var accountPassword = "22222";

accountCity = "jaipur";

// accountId =2222 //not allowed

console.log(accountId);

accountEmail = "user243@gmail.com";
accountPassword = "37777773";
accountCity = "chomu";
let accountState;

console.table([
  accountId,
  accountEmail,
  accountPassword,
  accountCity,
  accountState,
]);

/*
Prefer not to use var
because of issue in block scope and functional scope
*/

// node 01_basics/01_variables.js
