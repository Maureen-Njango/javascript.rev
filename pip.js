//create a program that ask a user to input a temperature in celcius .
//Your program should convert the temperature to farhret and then print the coverted temp
function convertTemp(temperature) {
    return temperature * (9/5) + 32
}
console.log(convertTemp(32))

//write a program for managing bank accounts .The program should require the users account number and output the balance and transaction hstory 
//of the user .Automatically the user should be allowed to deposit and withdraw

class Bank{
    constructor(){
        this.balance = 8000000
    }
    checkbalance(accountNo) {
        console.log(`${accountNo} current balance in your account is ${this.balance}`)
    }
    deposit(amount) {
        const depositedAmount = this.balance + amount
        console.log(`You have withdrawn${amount} and the current balance is ${depositedAmount}`)

    }
    withdraw(amount) {
        if (this.balance >= amount){
            const withdrawnAmount = this.balance - amount;
            console.log(`You have withdrawn ${amount} and the current balance is ${withdrawnAmount}`);

           


        } 
        else{
            console.log(`You have insuficient balance .please TOP UP`)
        }
    }
}
const adam = new Bank()
adam.checkbalance("40494848")
adam.deposit(2000)
adam.withdraw(10800)

//Design a simple authentication system for a command- line application.the system should allow the user to register with a user name and password and then log in usin their credentials.
//store the user credentials in a dictonery and ensure that the passwords are checked securely without storing them in pure text.
class UserAuthentication{
    constructor(){
        this.UserAuthentication = []

    }
    reigster(name , password){
        let alphaNumeric = ['a'-'z',0-9]
        const credentials = {useName:userName , password:password}
        if(credentials.password.match(alphaNumeric)) {
         this.UserAuthentication.push(credentials) 
         console.log("credentials added successfully")       
        }
        else{
            console.log("The password should include both numbers and letters")
        }

    }
}
const userAuthentication = new UserAuthentication()
const userName = "morin"
const password = "mao123"
userAuthentication.reigster(userName,password)



class Doctor{
    constructor(name,skill){
        this.name=name,
        this.skill=name,
        this.availability=[]
    }
    addAvailability(time,date){
     const available ={date:date,time:time}
     this.availability.push(available)
    }
}
class Patient{
    constructor(name,condition,preference,age){
        this.name=name,
        this.condition=condition,
        this.preference=preference,
        this.age=age
    }
}
class Appointment{
    constructor(doctor,patient,date){
        this.doctor=doctor,
        this.patient=patient,
        this.date=date
    }
}
function bookAppointment(doctor,patient) {
 const availableDoc =doctor.availability.filter(date =>patient.condition.include(date))
 if(availableDoc.length>0){
 const appointmentDate= appointmentDate[0]
 const appointment = new Appointment(doctor,patient,appointmentDate)
 console.log(`appointment for ${patient.name}with ${doctor.name}at ${appointmentDate}`);
 return appointment
 } else {
    console.log("no appointment at this time");
 }
}
const drAgnes = new Doctor("Dr.Morin","gynaecologist"["14-5-2024","16-5-2024","20-5-2024"] )
const patientAjema =new Patient("mbira",["15-5-2024","17-5-2024","21-5-2024"])
const appointment = bookAppointment(drAgnes,patientAjema)



class Book{
    constructor(){
        this.listOfBooks=[]
    }
    addBooks(title,authorName,pubYear){
        const books = {title:title,authorName:authorName,pubYear:pubYear}
        this.listOfBooks.push(books)
    }
    checkBook(authorName){
        if (this.listOfBooks.includes(authorName)){
            console.log(`${title} ${pubYear}`);
        }
        else{
            console.log(`No book by ${authorName}`)
        }
    }
}
const ajema = new Book()
ajema.addBooks("born to suffer","Leila",2020)
console.log(ajema);
ajema.checkBook("yvonne")