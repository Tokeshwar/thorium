const firsttest = async function (req, res){
    let data = req
    console.log(data)
    res.send ({msg:"First response set successfully"})
}

const  secondtest= async function (req, res){
    res.send ({msg:"second response set successfully"})
}

const thirdtest = async function (req, res){
    res.send ({msg:"Third response set successfully"})
}

const fourthtest = async function (req, res){
    res.send ({msg:"Fourth response set successfully"})
}

module.exports.firsttest = firsttest
module.exports.secondtest = secondtest
module.exports.thirdtest = thirdtest
module.exports.fourthtest = fourthtest

