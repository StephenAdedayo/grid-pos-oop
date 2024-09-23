// var myDeveloper = "Stephen"
// var myAge = 17
// var myMarStatus = true
// var myAccBalance = undefined 
// var myDebt = null

// const myFirstName = "Stephen"
// myFirstName = 13

// console.log(myFirstName);


// const a = 5;
// const b = 10;
// console.log(5-b);

// const steven = true 
// const olamide = "true"

// console.log(steven === olamide);

// ||
// const cm = 35
// const oreva = 35
// console.log(3 + "lee");


// const gmc = "software development"
// Boolean(gmc)
// console.log(Boolean(gmc));

// const debtProfile = undefined
// console.log(Boolean(debtProfile));


// const atiku = undefined
// const tinubu = false
// const obi = true 

// console.log(tinubu && obi);
// console.log(atiku && tinubu);


const firstName = "stephen"
const lastName = "Ayomitan"
const course = "software dev"
const school = "gomycode"
const job = "software engineer"
// const sentence = "my name is " + firstName  +" "+ lastName + " i am currently studying " +  course + " at " +  school + " and i want to become a " + job
const sentence2 = `My name is ${firstName} ${lastName} i am currently studying ${course} at ${school} and i want to become a ${job}`

console.log(sentence2);


// class user {
//     constructor(email, name){
//         this.name = name
//         this.email = email
//         this.score = 0
//     }

//     login(){
//         console.log(`${this.email} is now logged in`);
//         return this
//     }

//     logOut(){
//         console.log(`${this.name} is now logged out`);
//         return this
//     }

//     upDateScore(){
//         this.score++
//         console.log(`${this.name} score is now ${this.score}`);
//         return this
//     }
// }

// class Admin extends user{
//     deleteUser(user){
//        users = users.filter(use => {
//       return  use.email != user.email
//     })
//     }
// }

// var userOne= new user("alu@gmail.com", "stephen")
// var userTwo = new user("ay@gmail.com", "ay")
// var admin = new Admin("you@gmail.com", "you")

// var users = [userOne, userTwo, admin]


// admin.deleteUser(userTwo)

// console.log(users);
// users.upDateScore()

// users.logOut()
// users.upDateScore()


// users.login().logOut().upDateScore()


const User = function (email, name){
    this.email = email
    this.name = name
    this.online = false
    // this.login = function(){console.log(this.email, 'is logged in');}
}
User.prototype.login = function(){
    this.online = true
    console.log(this.email, 'has logged in');
}

User.prototype.logOut = function(){
    this.online = false
    console.log(this.email, 'has logged out');
}

const Admin = function(...args)  {
     User.apply(this, args)
     this.super = "super"
}

Admin.prototype = Object.create(User.prototype)

Admin.prototype.deleteUser = function(user) {
    users = users.filter(u => {
        return u.email != user.email
    })
}

let User1 = new User("Devil", "Jesus")
let User2 = new User("God", "Holy spirit")
let admin = new Admin("mr", "mr")

let users = [User1, User2, admin]


User2.login()
User1.logOut()
admin.login()

admin.deleteUser(users[2])
console.log(users);



// const sorted = (sor) => {
//    const me = sor.sort()
//    return me
// }

// const them = ["2", "1", "3"]
// console.log(sorted(them));

// const replace = (srt) => {
//    let meaning = srt.replace("am", "was")
//    return meaning
// }

// const tot = "i am the one"
// console.log(replace(tot));



// const even = () => {
//     let even = []
//     let sum = 0
//     let i = 2

//     while(even.length < 20){
//         sum += i
//         even.push(i)
//         i += 2
//     }

//     return `${sum}  ${even}`
// }

// console.log(even());




// const checkEvenNumber = (even) => {
    //   if (even === 0 ){
    //     return false
    //   }
        //  let i = 2
    //   for (i = 2; i <= Math.sqrt(even); i++ ){
        // if ( even % i !== 0 ) {
            // return false
        // } else 
        // return true
    //   }
// }

// console.log(checkEvenNumber(42));

const steve = {
    firstName : "stephen",
    lastName : "Ayo",
    login(){console.log(`${firstName} is a billionaire`);}
}

console.log(steve.firstName);
console.log(steve);
steve.login()



const ay = new Object()
    ay.firstName = "stephen"
    ay.lastName = "ayo"
    ay.login = function(){console.log(`you`);}

    console.log(ay.login());


    const factorial = (n) => {
        if(n === 1){
            return 1
        }

        else{
            return n * factorial(n-1)
        }
    }

    console.log(factorial(5));


    const month = () => {
        const splicing = ['jan', 'feb', 'april']
        splicing.splice(2, 1, "march")
        return splicing
        
    }

    console.log(month());


    const length = (arr) => {
         const len = arr.length
         return len
    }
    const nam = "stephen"
    console.log(length(nam));


    const summation = (arr) => {
        let sum = 0
        let i = 0

        while(i < arr.length){
            sum *= arr[i]
            i++
        }
         return sum   
    }


    const num = [1, 2, 3, 4, 5]
    console.log(summation(num));


    