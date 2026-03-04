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

// write your code here

// get the button
const button = document.getElementById('toggleButton')






button.onclick = function(){
    // add new contacts to the array
    let name = window.prompt("Enter your name here:");
    let phone = window.prompt('Enter your phone number here:');
    let email = window.prompt('Enter your email here:');

    let new_contact = {
        name: name,
        phone: phone,
        email: email
    }

    contacts.push(new_contact);

    
    let last_index = contacts.length - 1;
    window.alert(`First contact Name: ${contacts[last_index].name} Phone Number : ${contacts[last_index].phone} Email: ${contacts[last_index].email}`)
    console.log(`${contacts[0].name} / ${contacts[0].phone} / ${contacts[0].email}`);
    console.log(`${contacts[last_index].name} / ${contacts[last_index].phone} / ${contacts[last_index].email}`);
    return last_index;
}
