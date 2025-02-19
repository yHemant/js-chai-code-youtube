const name1 = "Hemant    "

String.prototype.truelength = function() {
    return this.trim().length
}

console.log(`The true length of ${name1} is ${name1.truelength()}`)
console.log("laliya".truelength())
console.log("Alankrita".truelength())
console.log(name1.__proto__)