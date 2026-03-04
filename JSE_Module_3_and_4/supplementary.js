let contacts = [{
    name: "Maxwell Wright",
    phone: "(0191) 719 6495",
    email: "Curabitur.egestas.nunc@nonummyac.co.uk"
}, {
    name: "Raja Villarreal",
    phone: "0866 398 2895",
    email: "posuere.vulputate@sed.com"
}, {
    name: "Helen Richards",
    phone: "0800 1111",
    email: "libero@convallis.edu"
}];

/**
- show: Display a specific contact. If the user chooses this, ask for an index number. If the index exists, show that contact; otherwise, show an error message. 
- all: Display all contacts in the list, one by one. 
- add: Add a new contact. You must prompt for Name, Phone, and Email separately.  Crucial: Only add the contact if all three fields are filled (not empty). 
- search: Ask the user for a Name. Use a loop to check if that name exists in your  contacts. If found, display their phone and email. If not found, alert "Contact not found". 
- type quit to exit the program.
 */

while (true) {
    let selection = prompt("Please select an option by typing the corresponding function name: \n 'show' display first, \n 'all' display all, \n 'add' add new, \n 'search' search for a contact, \n 'quit' to exit \n Enter the function name of your selection here: ");

    if (selection.toLowerCase() === 'show') {
        //show current index
        let index = contacts.length - 1;
        let get_index = prompt(`The current size of the contacts is ${index}.\n Please enter an index number to display the contact at that index: `);

        // error catching if miss the inuput
        if (get_index < contacts.length && get_index >= 0){
            alert(`Contact Name: ${contacts[get_index].name} Phone Number: ${contacts[get_index].phone} Email: ${contacts[get_index].email}`);
        }   else {
            alert(`Index out of bounds. Please enter a number between 0 and ${index}`);
        }


    } else if (selection.toLowerCase() === "all"){
        let all_contacts = "";
        for ( let i = 0; i <= contacts.length - 1; i++){
            all_contacts += `Contact ${i + 1} Name: ${contacts[i].name} Phone Number: ${contacts[i].phone} Email: ${contacts[i].email}\n`;
        }
        alert(all_contacts);

    } else if (selection.toLowerCase() === "add"){
        let name = prompt("Enter your name here:");
        let phone = prompt('Enter your phone number here:');
        let email = prompt('Enter your email here:');

        // check if all fields are not empty before adding the contact
        if(name === '' || phone === '' || email === ''){
            //quit the add if there are missing fields any
            alert("Please fill out all the fields before submitting.")
            continue;
        }

        let new_contact ={
            name: name,
            phone: phone,
            email: email
        }

        contacts.push(new_contact);
        last_index = contacts.length - 1;
        alert(`New contact added! Name: ${contacts[last_index].name} Phone Number: ${contacts[last_index].phone} Email: ${contacts[last_index].email}`);

    } else if (selection.toLowerCase() === "search"){
        let name = prompt("Enter the name that you want to find:");
        //set the found variable to false before the loop
        let found = false;

        for (let i = 0; i <= contacts.length - 1; i++){
            if (contacts[i].name.toLowerCase() === name.toLowerCase()){
                found = true;
                alert(`Contact found! Name: ${contacts[i].name} Phone Number: ${contacts[i].phone} Email: ${contacts[i].email}`);
            }
        }
        // if after the loop, the found variable is still false, then alert contact not found
        if (!found){
            alert("Contact not found");
        }

    }else if (selection.toLowerCase() === "quit"){
        break;
    }else{
        alert("Invalid selection. Please enter a number between 1 and 5.");
    }

}
