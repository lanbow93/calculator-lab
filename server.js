require('dotenv').config();
const express = require ("express")
const app = express();

app.get("/calc/:num1/:num2", (request, response) => {
    response.send(`The sum is: ${parseInt(request.params.num1) + parseInt(request.params.num2)}`)
})

app.get("/calcquery/:num1/:num2", (request, response) => {
    let toCompare = request.query.operation
    let num1 = parseInt(request.params.num1);
    let num2 = parseInt(request.params.num2);

    if (toCompare === "add") {
        response.send(`The value after adding is: ${num1 + num2}`)
    } else if (toCompare === "multiply") {
        response.send(`The value after multiplying is: ${num1 * num2}`)
    } else if (toCompare === "subtract"){ 
        response.send(`The value after subtracting is: ${num1 - num2}`)
    } else if (toCompare === "divide"){
        response.send(`The value after dividing is: ${num1 / num2}`)
    } else if (toCompare === "toThePower") {
        response.send(`The value after raising to the power of ${num2} is: ${num1 ** num2}`)
    } else {
        response.send("Invalid/No Operation")
    }
})

app.listen(process.env.PORT, (request, response) => {
    console.log(`Express is listening on port: `, process.env.PORT);
});

