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
display the first contact (first)
display the last contact (last)
display all contacts (all)
add a new contact (new)
exit the program (quit)
 */

while (true) {
    let selection = prompt("Please select an option: \n [1] display first, \n [2] display last, \n [3] display all, \n [4] add new, \n [5] quit \n Enter the number of your selection here: ");

    if (selection === '1') {
        alert(`First contact Name: ${contacts[0].name} Phone Number : ${contacts[0].phone} Email: ${contacts[0].email}`);

    } else if (selection === "2"){
        let last_index = contacts.length - 1;
        alert(`last contact Name: ${contacts[last_index].name} Phone Number: ${contacts[last_index].phone} Email: ${contacts[last_index].email}`);

    } else if (selection === "3"){
        let all_contacts = "";
        for ( let i = 0; i <= contacts.length - 1; i++){
            all_contacts += `Contact ${i + 1} Name: ${contacts[i].name} Phone Number: ${contacts[i].phone} Email: ${contacts[i].email}\n`;
        }
        alert(all_contacts);

    } else if (selection === "4"){
        let name = prompt("Enter your name here:");
        let phone = prompt('Enter your phone number here:');
        let email = prompt('Enter your email here:');

        // check if all fields are filled out
        if(name === '' && phone === '' && email === ''){
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

    }else if (selection === "5" ){
        break;
    }else{
        alert("Invalid selection. Please enter a number between 1 and 5.");
    }

}
