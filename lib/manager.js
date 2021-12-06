const Employee = require('./employee')
class Manager {

    constructor(officeNumber, id, name, email, jobTitle){
        this.officeNumber = officeNumber;
        this.id = id;
        this.name = name;
        this.email = email;
        this.jobTitle = jobTitle;

    }
    
    gettingId(){
        return this.id;
    };
    gettiingName(){
        return this.name;
    };
    gettingEmail(){
        return this.email;
    };
    getJobTitle(){
        return this.jobTitle
    };

}
module.exports = Manager;