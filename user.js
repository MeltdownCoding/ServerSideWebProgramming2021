let user = [

    {
        "name": "Naravit",
        "lastname": "NLertratkosum",
        "from": "Thailand"
    }

]

let userb =
{

    "name": "Phuwin Tangsakyuen",
    "lastname": "Tangsakyuen",
    "from": "Thailand"
}


let userc =
{

    "name": "Trai",
    "lastname": "Nimtawat",
    "from": "Thailand"
}

let userd =
{
    "name": "Louis",
    "lastname": "Thanawin",
    "from": "Thailand"
}

let usere =
{
    "name": "Mix",
    "lastname": "Sahaphap",
    "from": "Thailand"
}




user.push(userb)
user.push(userc)
user.push(userd)
user.push(usere)

for (let index = 0; index < user.length; index++) {
    console.log('Name: ' + user[index].name + ' ' + user[index].lastname)

}

delete user.splice(3, 4)

console.log('----del----last 2 people')

for (let index = 0; index < user.length; index++) {
    console.log('Name: ' + user[index].name + ' ' + user[index].lastname)

}