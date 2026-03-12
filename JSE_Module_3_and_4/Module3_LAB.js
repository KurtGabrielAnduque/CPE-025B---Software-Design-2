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



/**
let randomize = function randomizer (length){
    let array_number = [];
    for (let i = 0; i < length; i++){
        array_number.push(Math.floor((Math.random()*100)+ 1));
    }
    return array_number;
}


arrays = randomize(100);
console.log(arrays);


sorted = arrays.sort((a,b) => a - b);
console.log(sorted);

let first = randomize(50);
let second = randomize(50);

let multiplyer = first.map((value, index) => value * second[index])

console.log(multiplyer);


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


function showContact(contacts, toDisplay){
    if (typeof toDisplay !== "number"){
        return `Input is not a number`;
    }

    if (toDisplay > contacts.length - 1){
        return `value is larger than the length of array ${contacts.length - 1}`;
    }

    return `Name: ${contacts[toDisplay].name} \n phone: ${contacts[toDisplay].phone} \n email: ${contacts[toDisplay].email}`;
}

function showAll(contacts){
    string = ''
    for(let i = 0; i<=contacts.length - 1; i++){
        string += `Name: ${contacts[i].name} \n phone: ${contacts[i].phone} \n email: ${contacts[i].email} \n`;
    }

    return string;
}


function addContact(contacts, name, phone, email){
    if (!(contacts instanceof Array)){
        return `array now found`
    }
    let contactsToAdd = {
        name : name,
        phone: phone,
        email: email
    };

    contacts.push(contactsToAdd);
}


function sortByName(contacts){
    arranged = contacts.sort((a,b) => a.name.localeCompare(b.name));
    return showAll(arranged);
}


function sortByPhone(contacts){
    arranged = contacts.sort((a,b) => a.phone.localeCompare(b.phone));
    return showAll(arranged);
}

function sortByEmail(contacts){
    arranged = contacts.sort((a,b) => a.email.localeCompare(b.email));
    return showAll(arranged);
}

let show = showContact(contacts, 2);
console.log(show);
console.log(addContact(contacts, 'Kurt', '09687929730', 'qkgaanduque@tip.edu.ph'));
console.log(showAll(contacts));
console.log(sortByName(contacts));
console.log(sortByPhone(contacts));
console.log(sortByEmail(contacts));
*/
