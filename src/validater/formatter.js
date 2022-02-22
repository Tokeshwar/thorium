//Module 3

function trim() {
    let name = '  Tokeshwar    '
    console.log('Trimmed name: ',name.trim())
}

function changetoLowerCase() {
    let name = 'TOKESHWAR'
    console.log('Name in lowercase: ',name.toLowerCase())
}

function changeToUpperCase() {
    let name = 'tokeshwar'
    console.log('Name in uppercase: ',name.toUpperCase())
}

module.exports.trim = trim
module.exports.changetoLowerCase = changetoLowerCase
module.exports.changeToUpperCase = changeToUpperCase