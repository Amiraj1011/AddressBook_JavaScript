const AddressBook = require("./AddressBook.js");
const prompt =require('prompt-sync')();

let addressBook = new AddressBook();
let contactBook = new Array();
flag = true;

while(flag)
{
    console.log(" Select your option ")
    console.log();
    console.log(" 1 : Add Contact \n 2 : Display Contact \n 3 : Edit Contact \n 4 : Delete Contact \n 5 : Count of contacts \n 6 : Search Contact by City Or State \n 7 : Count by City or Stae \n 8 : Sort by First Name \n 0 : Exit ");
    let choice = parseInt(prompt("Enter your Choice : "));

    switch(choice)
    {
        case 1:
            contactBook = addressBook.AddContact(contactBook);
            break;
        case 2:
            console.log(contactBook.toString());
            break;
        case 3:
            contactBook = addressBook.EditContact(contactBook);
            break;
        case 4:
            contactBook = addressBook.DeleteContact(contactBook);
            break;
        case 5:
            console.log("Number of contcts in AddressBook is " +contactBook.length);
            break;
        case 6:
            contactBook = addressBook.SearchContactByCityOrState(contactBook);
            break;
        case 7:
            contactBook = addressBook.CountContactByCityOrState(contactBook);
            break;
        case 8:
                contactBook = addressBook.SortByFirstName(contactBook);
                break;
        case 0:
            flag = false;
            break;
        default:
            console.log("Invalid Input");
            flag = false;
            break;   
        
    }
    
}