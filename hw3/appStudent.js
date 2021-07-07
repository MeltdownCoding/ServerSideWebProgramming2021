let register = require('./register');

let studentArray = []
let student = {
    "ID": 1234,
    "Fullname": "AAA BBBB",
    "Curriculum": "IT"
}

//add an example student for 5 times
studentArray = register.add(studentArray,student);
studentArray = register.add(studentArray,student);
studentArray = register.add(studentArray,student);
studentArray = register.add(studentArray,student);
studentArray = register.add(studentArray,student);

//delete last student for 2 times
studentArray = register.del(studentArray);
studentArray = register.del(studentArray);
console.log(studentArray);
