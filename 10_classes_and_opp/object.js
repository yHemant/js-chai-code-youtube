function multiplyby5(num){
    return num*5
}

multiplyby5.power=2

// console.log(multiplyby5(7))
// console.log(multiplyby5.power)
// console.log(multiplyby5.prototype)
// console.log(typeof(multiplyby5.prototype))

function createUser(username, score){
    this.username = username;
    this.score = score;
    console.log(`called by ${this}`)
}

const chai = new createUser("chai", 25)
const tea = new createUser("tea", 30)

createUser.prototype.increment = function(){
    this.score++
}

createUser.prototype.printme = function(){
    console.log(`score is ${this.score}`)
}

chai.printme