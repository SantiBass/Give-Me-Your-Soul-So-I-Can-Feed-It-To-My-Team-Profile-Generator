const Employee = require('./Employee')
class Engeneer {

    constructor(id, name, email, github){
        this.id = id;
        this.name = name;
        this.email = email;
        this.github = github;
        
    }
    
    getId(){
        return this.id;
    };
    getName(){
        return this.name;
    };
    getEmail(){
        return this.email;
    };
    getGitHub(){
        return this.github;
    }
}
module.exports = Engeneer;