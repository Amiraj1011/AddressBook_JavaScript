const PersonInformation = require("./AddressBook.js"); 
const ContactDetails = require("./ContactDetails.js");
const prompt = require('prompt-sync')();

let contact = new ContactDetails();

contact.firstName = prompt("Enter First Name : ");
contact.lastName = prompt("Enter Last Name : ");
contact.address = prompt("Enter Address : ");
contact.city = prompt("Enter City Name : ");
contact.state = prompt("Enter State Name : ");
contact.zip = prompt("Enter Zip : ");
contact.phoneNumber = prompt("Enter Phone Number : ");
contact.emailId = prompt("Enter Email Id : ");
