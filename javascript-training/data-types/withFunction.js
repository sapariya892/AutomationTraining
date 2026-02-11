//Test Case 1: Verify the home page.
console.log("******************TEST CASE 1: VERIFY THE HOME PAGE******************");
//Remove code and make common fuction for the launch browser and make login
lanuchBrowseAndLogin("Chrome");
console.log("Verify the home page is displayed or not");
//Remove code and make common fuction for the logout from the browser and close the browser.
logoutAndCloseBrowser();


// Test Case 2: Verify the account balance
console.log("******************TEST CASE 2: Verify the account balance******************");
//Remove code and make common fuction for the launch browser and make login
lanuchBrowseAndLogin("Firefox");
console.log("Verify the home page is displayed");
console.log("Navigate to the account balance page");
let accountBalance = 100000;
console.log("Verify the account balance is displayed as " + accountBalance);
//Remove code and make common fuction for the logout from the browser and close the browser.
logoutAndCloseBrowser();

// Test Case 3: verify the account statement
console.log("******************TEST CASE 3: Verify the account balance******************");
//Remove code and make common fuction for the launch browser and make login
lanuchBrowseAndLogin("Safari");
console.log("Verify the home page is displayed");
console.log("Navigate to the account statement page");
console.log("Verify the account statement is displayed with the following details:");
//Remove code and make common fuction for the logout from the browser and close the browser.
logoutAndCloseBrowser();


// for the login 
function lanuchBrowseAndLogin(browserName) {
    console.log("Launch the "+ browserName + " Browser");
    console.log("Enter the URL: https://www.icici.com");
    console.log("Enter the username as 'Bhavin' and password as 'Bhavin@123'");
    console.log("Click on the login button");
}
//for user  logout
function logoutAndCloseBrowser() {
    console.log("Logout from the application");
    console.log("Close the browser");
} 

function getAccountDetails() {
    let accountBalance=100000;
    return accountBalance; // if return type is not provided then it should be undfined return.
}

console.log("Account details balance is: "+getAccountDetails());