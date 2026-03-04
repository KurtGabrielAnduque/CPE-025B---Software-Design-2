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

let AddContact = document.getElementById('submitinfo');
let SpecificContact = document.getElementById('specificContact');
let ShowAll = document.getElementById('Showall');
let contactlist = document.getElementById('display-contact');

// Show all contact function
ShowAllContact = function(contactList){
    if (!(contactList instanceof Array)){
        return "Please provide an array of contacts.";
    }

    let p = document.createElement('p');

    for (let i = 0; i < contactList.length; i++){
        let p = document.createElement('p');
        p.textContent = `Contact ${i + 1} Name: ${contactList[i].name} Phone Number: ${contactList[i].phone} Email: ${contactList[i].email}`;
        contactlist.appendChild(p);
    }

}

showSpecificContact = function(contactList, index){
    if (!(contactList instanceof Array)){
        return "Please provide an array of contacts.";
    }

    if (index < contactList.length && index >= 0){
        return `Contact Name: ${contactList[index].name} Phone Number: ${contactList[index].phone} Email: ${contactList[index].email}`;
    }   else {
        return `Index out of bounds. Please enter a number between 0 and ${contactList.length - 1}`;
    }   
}

ADD = function(contactList, name, phone, email){
    if (!(contactList instanceof Array)){
        return "Please provide an array of contacts.";
    }
    if (name === '' || phone === '' || email === ''){
        return "Please fill out all the fields before submitting.";
    }
    let new_contact = {
        name: name,
        phone: phone,
        email: email
    }   
    contactList.push(new_contact);
    return contactList;
}


AddContact.onclick = function(){
    let name = document.getElementById('Name').value;
    let phone = document.getElementById('Number').value;
    let email = document.getElementById('email').value;
    ADD(contacts, name, phone, email);

}



ShowAll.onclick = function(){
    ShowAllContact(contacts);
}

SpecificContact.onclick = function(){
    let index = document.getElementById('arrayIndex').value;
    let current_index = document.getElementById('totalIndex');
    let last_index = contacts.length - 1;

    current_index.textContent = `Current Index: ${last_index}`;
    let p = document.createElement('p');
    p.textContent = showSpecificContact(contacts, index);
    contactlist.appendChild(p);

}

