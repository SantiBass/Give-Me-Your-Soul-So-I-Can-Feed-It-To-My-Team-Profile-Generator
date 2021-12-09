//making global functions...
const inquirer = require('inquirer');
function managerCard(data) {
    var html = ""
    for (var entry of data) {
        html += `<div class="card" style="width: 18rem;">
            
                <div class=" bg-primary card-body text-white">
                <h4 >${entry.getName()}</h4>
                <h4 class=" bg-primary text-white"><i class="fas fa-mug-hot  "></i>  
                ${entry.getRole()}</h4>
                <p class="card-text"></p>
                </div>
                <ul class="list-group list-group-flush">
                <li class="list-group-item  ID" >ID number: ${entry.getId()}</li>
                <li class="list-group-item email" > Email:  <a href="mailto:${entry.getEmail()}">${entry.getEmail()}</li>
                <li class="list-group-item " >Office number:  ${entry.getOfficeNumber()}</li>
                </ul>
            </div>`
    }
    return html;
}
function engineerCard(data) {
    var html = "";
    for (var entry of data) {
        html += `<div class="card" style="width: 18rem;">
                <div class=" bg-primary card-body text-white">
                <h4>${entry.getName()} </h4>
                <h4 class="card-title text-white"><i class="fas fa-glasses"></i> ${entry.getRole()}</h4>
                </div>
                <ul class="list-group list-group-flush">
                <li class="list-group-item  ID" >ID number: ${entry.getId()}</li>
                <li class="list-group-item email" > Email:   <a href="mailto:${entry.getEmail()}">${entry.getEmail()}</a></li>
                <li class="list-group-item">GitHub:  <a href="https://github.com/${entry.getGitHub()}</a></li>
                </ul>
            </div>`
            console.log(entry.getEmail())
    }
    return html;


};
function internCard(data) {
    var html = "";

    for (var entry of data) {
        html += `<div class="card" style="width: 18rem;">
       <div class="bg-primary card-body text-white">
       <h4 > ${entry.getName()} </h4>
       <h4 class="card-title text-white"><i class="fas fa-user-graduate"></i>    Intern</h4>
      </div>
            <ul class="list-group list-group-flush">
             <li class="list-group-item  ID" >ID number: ${entry.getId()}</li>
             <li class="list-group-item email" > Email: <a href="mailto:">${entry.getEmail()}</li>
             <li class="list-group-item" id="school">School:  ${entry.getSchool()}</li>
            </ul>
     </div>`
    }
    return html;


}

function genrateTeamHtml(data) {
    var managers = data.filter(item => item.getRole() == "Manager")
    var engenreers = data.filter(item => item.getRole() == "Engeneer")
    var interns = data.filter(item => item.getRole() == "Intern")

   //console.log(managers)
    return `
            <!DOCTYPE html>
            <html lang="en">
            <head>
                <meta charset="UTF-8">
                <meta http-equiv="X-UA-Compatible" content="IE=edge">
                <meta name="viewport" content="width=device-width, initial-scale=1.0">
                <title>Document</title>
            
            <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-1BmE4kWBq78iYhFldvKuhfTAU6auU8tT94WrHftjDbrCEXSU1oBoqyl2QvZ6jIW3" crossorigin="anonymous">
            <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap-icons@1.6.1/font/bootstrap-icons.css">
            <link rel="stylesheet" href="./dist/style.css">
            <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap-icons@1.6.1/font/bootstrap-icons.css">
            <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/twitter-bootstrap/4.6.0/css/bootstrap.min.css">
            <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.4/css/all.min.css">
            </head>
            <body>
            <header>
            <div class = "jumbotron bg-danger text-center text-blue">
                <h1 class="text-white text-decoration-underline"><i class="bi bi-folder-plus"></i>    Team   <i class="bi bi-building"></i> </h1>
            </div>
            </header>
            
            <div class="container d-flex justify-content-between bg-white">
           
            ${managerCard(managers)}
            ${engineerCard(engenreers)}
            ${internCard(interns)}
            </div>




            <script src="https://cdn.jsdelivr.net/npm/@popperjs/core@2.10.2/dist/umd/popper.min.js" integrity="sha384-7+zCNj/IqJ95wo16oMtfsKbZ9ccEh31eOz1HGyDuCQ6wgnyJNSYdrPa03rtR1zdB" crossorigin="anonymous"></script>
            <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/js/bootstrap.min.js" integrity="sha384-QJHtvGhmr9XOIpI6YVutG+2QOK9T+ZnN4kzFN1RtK3zEFEIsxhlmWl5/YESvpZ13" crossorigin="anonymous"></script>
            <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.5.1/jquery.min.js"></script>
            <script src="https://use.fontawesome.com/releases/v5.15.4/js/all.js" data-auto-replace-svg="nest"></script>
            </body>
            </html>
            `
}

module.exports = { genrateTeamHtml }