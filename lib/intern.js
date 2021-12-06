const Employee = require('./employee')
class Intern {

    constructor(id, name, email, school){
        this.id = id;
        this.name = name;
        this.email = email;
        this.school = school
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
    getSchool(){
        return this.school
    };

}
module.exports = Intern;