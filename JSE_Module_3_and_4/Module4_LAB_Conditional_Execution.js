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

let name = document.getElementById('Name');
let phone = document.getElementById('Number');
let email = document.getElementById('email');
let button = document.getElementById('submitinfo');
let toshow = document.getElementById('contact-to-display');
let firstButton = document.getElementById('FirstContact');
let lastButton = document.getElementById('LastContact');
let specificButton = document.getElementById('specificContact');
let current_index = document.getElementById('totalIndex');
let size = contacts.length;

button.onclick = function () {
    let new_contact = {
        name: name.value,
        phone: phone.value,
        email: email.value
    }

    if(name.value === '' && phone.value === '' && email.value === ''){
        window.alert("Please fill out all the fields before submitting.")
    } else {
        contacts.push(new_contact);
    }
    size = contacts.length;
    current_index.textContent = `Current Index: ${size - 1}`;
}


firstButton.onclick = function (){
    toshow.textContent = `First contact Name: ${contacts[0].name} Phone Number : ${contacts[0].phone} Email: ${contacts[0].email}`;
}

lastButton.onclick = function(){
    toshow.textContent = `Last contact Name: ${contacts[size - 1].name} Phone Number : ${contacts[size - 1].phone} Email: ${contacts[size - 1].email}`;
}


specificButton.onclick = function(){
    let index = document.getElementById('arrayIndex').value;
    if (index < size && index >= 0){
        toshow.textContent = `Contact Name: ${contacts[index].name} Phone Number: ${contacts[index].phone} Email: ${contacts[index].email}`;
    }   else { 
        toshow.textContent = `Index out of bounds. Please enter a number between 0 and ${size - 1}`;
    }
}