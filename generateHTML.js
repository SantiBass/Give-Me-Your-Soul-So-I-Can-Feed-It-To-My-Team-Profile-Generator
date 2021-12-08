//making global functions...
// const inquirer = require('inquirer');
function managerCard(role) {
   if(role === "Manager"){
            
            return `
            <div class="card" style="width: 18rem;">
            
                <div class=" bg-primary card-body text-white">
                <h4 >${data.name}</h4>
                <h4 class=" bg-primary text-white"><i class="fas fa-mug-hot  "></i>  
                ${data.role}</h4>
                <p class="card-text"></p>
                </div>
                <ul class="list-group list-group-flush">
                <li class="list-group-item  ID" >ID number: ${data.ID}</li>
                <li class="list-group-item email" > Email: ${data.email}</li>
                <li class="list-group-item " >Office number:  ${data.officeNumber}</li>
                </ul>
            </div>
            `
        }
            else{
         
    
        return "";
    }
}

function engineerCard(role) {
    if(role === "Engeneer"){

    return `
  <div class="card" style="width: 18rem;">
     <div class=" bg-primary card-body text-white">
      <h4>${data.name} </h4>
      <h4 class="card-title text-white"><i class="fas fa-glasses"></i> ${data.role}</h4>
   </div>
    <ul class="list-group list-group-flush">
      <li class="list-group-item  ID" >ID number: ${data.ID}</li>
      <li class="list-group-item email" > Email: ${data.email}</li>
      <li class="list-group-item">GitHub: <a href="https://github.com/">github.com/${data.gitHub}</a></li>
    </ul>
   </div>`
}else {
      return "";
  }

};
function internCard(role) {
   if(role === "Intern"){
    
    return `
    
    <div class="card" style="width: 18rem;">
       <div class="bg-primary card-body text-white">
       <h4 > ${data.name} </h4>
       <h4 class="card-title text-white"><i class="fas fa-user-graduate"></i>    Intern</h4>
      </div>
            <ul class="list-group list-group-flush">
             <li class="list-group-item  ID" >ID number: ${data.ID}</li>
             <li class="list-group-item email" > Email: ${data.email}</li>
             <li class="list-group-item" id="school">School:  ${data.school}</li>
            </ul>
     </div>

    `
   } else{
       return "";
   }

      
    
}

    function genrateTeamHtml(data) {

     
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
                <h1 class="text-white">  Team </h1>
            </div>
            </header>
            
            <div class="container d-flex justify-content-between bg-white">
           
            ${managerCard(data)}
            ${internCard()}
            ${engineerCard()}
            </div>




            <script src="https://cdn.jsdelivr.net/npm/@popperjs/core@2.10.2/dist/umd/popper.min.js" integrity="sha384-7+zCNj/IqJ95wo16oMtfsKbZ9ccEh31eOz1HGyDuCQ6wgnyJNSYdrPa03rtR1zdB" crossorigin="anonymous"></script>
            <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/js/bootstrap.min.js" integrity="sha384-QJHtvGhmr9XOIpI6YVutG+2QOK9T+ZnN4kzFN1RtK3zEFEIsxhlmWl5/YESvpZ13" crossorigin="anonymous"></script>
            <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.5.1/jquery.min.js"></script>
            <script src="https://use.fontawesome.com/releases/v5.15.4/js/all.js" data-auto-replace-svg="nest"></script>
            </body>
            </html>
            `
    }

    module.exports = {genrateTeamHtml }