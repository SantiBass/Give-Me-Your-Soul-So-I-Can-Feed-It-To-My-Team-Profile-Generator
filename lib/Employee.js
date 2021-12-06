class Employee {

    constructor(id, name, email){
        this.id = id;
        this.name = name;
        this.email = email;
        this.jobTitle = this.jobTitle;
    }
    getjobTitle(){
        return this.jobTitle;
    };
    gettingId(){
        return this.id;
    };
    gettiingName(){
        return this.name;
    };
    gettingEmail(){
        return this.email;
    };

}
module.exports = Employee;