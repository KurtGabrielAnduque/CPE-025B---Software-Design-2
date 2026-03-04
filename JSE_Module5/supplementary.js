// Create the contacts
contacts = [{
    name : "Linus Torvalds",
    role : "System Admin",
    skills : ["Linux", "Git", "Kernels"],
    availability: true
},{
    name : "Ada Lovelace",
    role : "Logic Analyst",
    skills : ["Algorithms","Math","Analytics"],
    availability: false
},{
    name : "Alan Turing",
    role : "Cryptographer",
    skills : ["Logic","Enigma","Security"],
    availability: true
}]


/** 
show: Ask the user for an index number. If the index is valid, display the name, role, and the first skill from that contact's skills array.
all: Use a loop to display the name of every contact in the list.
add: Prompt the user for a Name, Role, and a single Skill. Validation Requirement: Use an if statement to ensure none of the fields are empty. Only if all data is present should you push the new object into the array.
search: Prompt the user for a Name. Use a loop to find the contact. If found, display their Role and whether they are currently "Available" or "Busy" based on their boolean value.
 */

//show
let show = function(contactList, index){


    if (index < contactList.length && index >= 0){
        return `Contact Information \n Name: ${contactList[index].name} \n Role: ${contactList[index].role} \n First Skill: ${contactList[index].skills[0]} \n `
    } 
    // error catcher
    else {
        alert(`Index out of bounds. Please enter a number between 0 and ${contactList.length - 1}`);
    }

}


// all: Use a loop to display the name of every contact in the list.
let all = function(contactList){

    list_names = "";

    for(let i = 0; i <= contactList.length - 1; i++){
        list_names += `${contactList[i].name}\n`;
    }

    return list_names;
}

// add
let add = function(contactList, name, role, skill){

    // check if the array is given
    if (!contactList instanceof Array){
        alert("Please provide a valid contact list array.");
        return;
    }
    
    // push the informations
    if (name && role && skill) {
        contactList.push({
            name: name,
            role: role,
            skills: [skill]
        });
        
        // alert the user
        alert(`New contact Added! \n Name: ${name} \n Role:${role} \n First Skill: ${skill}`);

    // error catcher
    } else {
        alert("Please fill in all fields.");
    }
}

//search
let search = function(contactList, name){
    found = false;
    string = "";

    for (let i= 0; i <= contactList.length - 1; i++){
        if (contactList[i].name.toLowerCase() === name.toLowerCase()){
            
            // use ternary operator to check the availability
            let availability = contactList[i].availability ? "Available" : "Busy";
            string += `Contact found! \n Role: ${contactList[i].role} \n Availability: ${availability}`;
            found = true;
            return string;
        }
    }

    if (!found){
        return "Contact not found";
    }
}   


// Create the infinite loop

while(true){
    let selection = prompt("Please select an option by typing the corresponding function name: \n 'show' display first, \n 'all' display all, \n 'add' add new, \n 'search' search for a contact, \n 'quit' to exit \n Enter the function name of your selection here: ");

    // call the show function
    if  (selection.toLowerCase() === 'show'){
        let index = prompt(`The current size of the contacts is ${contacts.length - 1}.\n Please enter an index number to display the contact at that index: `);
        alert(show(contacts, index));
        
    } else if (selection.toLowerCase() === 'all'){
        // call the all function
        window.alert(all(contacts));

    } else if (selection.toLowerCase() === 'add'){
        // call the add function
        let name = prompt("Enter the name of the new contact:");
        let role = prompt("Enter the role of the new contact:");
        let skill = prompt("Enter a skill of the new contact:");
        add(contacts, name, role, skill);

    } else if (selection.toLowerCase() === 'search'){
        // call the search function
        let name = prompt("Enter the name of the contact you want to search for:");
        alert(search(contacts, name));

    }else if (selection.toLowerCase() === "quit"){
        alert("GOODBYE!!!!");
        break;

    } else {
        alert("Invalid selection. Please enter 'show', 'all', 'add', 'search', or 'quit'.");
    }
}