let response = await fetch("https://jsonplaceholder.typicode.com/users");
const data = await response.json();

let users = [];

for(let i = 0; i < data.length; i++) {
    
    let obj = {
        firstName: "",
        lastName: ""
    }

    let fullName = data[i].name.split(' ');
    
    if(!fullName.includes("Mrs.")) {

        obj.firstName = fullName[0];
        obj.lastName = fullName[1];

    } else {
        obj.firstName = fullName[1];
        obj.lastName = fullName[2];
    }
    users.push(obj);
}

console.log(users);