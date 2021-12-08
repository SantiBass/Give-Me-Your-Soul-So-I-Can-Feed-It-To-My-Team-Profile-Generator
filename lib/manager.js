const Employee = require('./Employee')
class Manager extends Employee{

    constructor(name, id, email, officeNumber){
        super(name, id, email)
        this.officeNumber = officeNumber;
    }

    getOfficeNumber(){
        return this.officeNumber;
    }
   
    getRole(){
        return "Manager"
    };

}

let man = new Manager("billy", 7, "somehting@enail.com", "672-217-2323")
console.table(man.id)
module.exports = Manager;