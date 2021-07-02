let register = function () {
    let usera = [
        {
            "ID": 1234,
            "Fullname": "AAA BBBB",
            "Curriculum": "IT"
        }
    ]

    let userb = {
        "ID": 1234,
        "Fullname": "AAA BBBB",
        "Curriculum": "IT"
    }

    let userc = {
        "ID": 1234,
        "Fullname": "AAA BBBB",
        "Curriculum": "IT"
    }

    let userd = {
        "ID": 1234,
        "Fullname": "AAA BBBB",
        "Curriculum": "IT"
    }

    let usere = {
        "ID": 1234,
        "Fullname": "AAA BBBB",
        "Curriculum": "IT"
    }
    user.push(userb)
    user.push(userc)
    user.push(userd)
    user.push(usere)

    delete user.splice(3, 2)

    for (let index = 0; index < user.length; index++) {
        console.log('{ ID: ' + user[index].ID + ' Fullname ' + user[index].Fullname + ' Curriculum ' + user[index].Curriculum + ' }')

    }
}
module.exports = register;