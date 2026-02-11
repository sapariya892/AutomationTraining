console.log("======> Assignment 1 – Data Types <=========")
// 1. Temperature of a city in degrees Celsius: 25.5
let tempOfCity: number = 25.5;
console.log("1. Temperature of a city in degrees Celsius: " + tempOfCity);

// 2. Whether a customer has placed an order: true or false
let isPlaceOrder: boolean = true;
console.log("2. Customer has placed an order or not: " + isPlaceOrder);

// 3. Person's phone number: "123-456-7890"
let phoneNumber: string = "123-456-7890";
console.log("3. Customer phone number is: " + phoneNumber);

// 4. Amount of money in a customer's bank account: 1000.50
let accountBalance: number = 1000.50;
console.log("4. Customer account balance is: " + accountBalance);

// 5. Person's email address: "john.doe@example.com"
let emailAddress: string = "john.doe@example.com";
console.log("5. Customer email address is: " + emailAddress);

// 6. Coordinates of a location (latitude, longitude): 37.7749, -122.4194
interface coordinates {
    latitude: number;
    longitude: number;
}
const latLong: coordinates = {
    latitude: 37.7749,
    longitude: -122.4194
}
console.log("6. Coordinates of a location (latitude, longitude:): " + latLong.latitude + ", " + latLong.longitude);

// 7. Person's marital status: true or false
let martialStatus: boolean = true;
console.log("7. Person's marital status is: " + martialStatus);

// 8. Person's occupation: "Software Engineer"
let occupation: string = "Software Engineer";
console.log("8. Person's occupation: " + occupation);

// 9. Person's favourite colour: "Blue"
let favouriteColor: string = "Blue";
console.log("9. Person's favourite colour is: " + favouriteColor);

// 10.Current year: 2023
let currentDates: Date = new Date();
let currentYear: number = currentDates.getFullYear();
console.log("10. Current year is: " + currentYear);

// 11.Number of followers on a social media platform: 1,000,000
let noOfFollowers: number = 1000000;
const formatterDefault: string = noOfFollowers.toLocaleString();
console.log("11. Number of followers on a social media platform: " + formatterDefault);

// 12.Rating of a movie: 7.5
let movingRating: number = 7.5;
console.log("12. Rating of a movie is: " + movingRating);

// 13.Person's blood type: 'A';
let bloodType: string = 'A';
console.log("13. Person's blood type is: " + bloodType);

// 14.Title of a book: "To Kill a Mockingbird"
let titleofBook: string = '`To Kill a Mockingbird`';
console.log("14. Title of a book: is: " + titleofBook);

// 15.Number of employees in a company: 500
let noOfEmployee: number = 500;
console.log("15. Number of employees in a company: " + noOfEmployee);

// 16.Time of an event: 2:30 PM
let timeOfEvent:string="2:30 PM"
console.log("16.Time of an event is: " + timeOfEvent);
/* let eventTime = new Date();
eventTime.setHours(2, 30, 0);
let hours: number = eventTime.getHours();
let minute: number = eventTime.getMinutes();
let ampm: string = 'PM';
const timeOfevent = hours + ':' + minute + ' ' + ampm;
console.log("16. Time of an event is: " + timeOfevent);
 */
// 17.Name of a country: "United States"
let countryName: string = "United States";
console.log("17. Name of a country is: " + countryName);

// 18.Person's eye color: "Brown"
let eyeColor: string = "Brown";
console.log("18. Person's eye color is: " + eyeColor);

// 19.Person's birthplace: "New York City"
let birthPlace: string = "New York City";
console.log("19. Person's birthplace is: " + birthPlace);

// 20. Distance between two cities: 200.5
let distanceOfCities: number = 200.50;
console.log("20. Distance between two cities is: " + distanceOfCities);

export {};
