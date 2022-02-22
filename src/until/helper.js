//Module 2

//Prints date
function printDate() {
    let today = new Date()
    let date = today.getDate()+'-'+(today.getMonth() + 1)+'-'+today.getFullYear()
    console.log('Current date is: ', date)
}

//Prints month
function printMonth() {
    let today = new Date()
    let month = today.getMonth() + 1
    console.log('Current month is: ', month)
}

//Prints batch
function getBatchInfo() {
    console.log('Thorium, we learn today api and postman.')
}

module.exports.printCurrentDate = printDate
module.exports.printCurrentMonth = printMonth
module.exports.printBatchInfo = getBatchInfo