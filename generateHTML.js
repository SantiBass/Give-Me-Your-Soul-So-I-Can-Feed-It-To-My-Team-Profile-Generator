 function genrateTeamHtml(data){

    function managerCard(){
        return`
        <div class="container d-flex justify-content-between ">
  
        <div class="card" style="width: 18rem;">
          
          <div class=" bg-primary card-body text-white"> ${"dskjfhaskdjhfaklsjdfhlakjdhs"}
            <h4 id="Manager">Jared</h4>
            <h4 class=" bg-primary text-white"><i class="fas fa-mug-hot  "></i>  
                Manager</h4>
            <p class="card-text"></p>
          </div>
          <ul class="list-group list-group-flush">
            <li class="list-group-item  ID" >ID number:</li>
            <li class="list-group-item email" > Email:</li>
            <li class="list-group-item " id="oficeNumber">Office number:  </li>
          </ul>
         
        </div>
        
        `
    };

    
    
    // function engineerCard(){};
    
    


    // function internCard(){};
 }
//  funtion to genereta the markdown

function generateHtml(){

    managerCard();


    
}
module.exports = {genrateTeamHtml}