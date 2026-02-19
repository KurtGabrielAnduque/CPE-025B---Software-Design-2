const teamDirectory = [{
    Name: "Leo Brooks",
    Role: "Designer",
    Skills: ["UI", "UX", "Figma"],
    Available: true
},{
    Name: "Sasha Ivana",
    Role: "Developer",
    Skills: ["HTML", "CSS", "JS"],
    Available: false
},{
    Name: "Jordan Lee",
    Role: "Manager",
    Skills: ["Planning", "Agile"],
    Available: true}];

newEmployee = {
    Name: "Casey Moore",
    Role: "QA Engineer",
    Skills: ["Testing", "Debugging"],
    Available: true
}

// push the new employee
teamDirectory.push(newEmployee);

// The name and the first skill of the first team member.
console.log(`First skill of the member: ${teamDirectory[0].Skills[0]}`);

// The name and the total number of skills of the last team member in the list (use the.length property).
console.log(`Total number of skills of last member: ${teamDirectory[3].Skills.length}`);

//The total number of people currently in the directory.
console.log(`Total number of employee: ${teamDirectory.length}`);
