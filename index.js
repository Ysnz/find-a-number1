let nr_game;
let counter = 0;

let number = Math.floor((Math.random() * 100) + 1);

document.getElementById("check_it").addEventListener("click", function(){
    
  check_number();
  });

document.getElementById("nr_game").addEventListener("keyup", function(event){
  if(event.which === 13){
    check_number();
    
  }
});

  function check_number(){
    counter++;
  document.getElementById("count_it").innerHTML= "This is your test number:" +counter;
 
    nr_game = document.getElementById("nr_game").value;
  if(nr_game == number){
 
    alert("You are the winner :D. "+"You guest after"+ (counter--) +" times!");
   
    var next_game = confirm("You wanna play again?");
      if (next_game == true){
     number = Math.floor((Math.random() * 100) + 1);
      counter=0;    document.getElementById("answer").innerHTML="";
         document.getElementById("count_it").innerHTML="";
      }
    else {
 document.getElementById("count_it").innerHTML=""; 
      document.getElementById("answer").innerHTML="Thanks for game!";
     
    }
  }
    /* CHECK IF VALUE IS A NUMBER */
  else if(nr_game==""){
     document.getElementById("answer").innerHTML="Weite the number";
  }
  else if(nr_game.indexOf(',') != -1 || nr_game.indexOf('.') != -1){
     document.getElementById("answer").innerHTML="This is NOT a natural number";
  }
 
  else if(nr_game > number){
    document.getElementById("answer").innerHTML="I am thinking about lower number";
  }
  else if(nr_game < number) { 
    document.getElementById("answer").innerHTML="I am thinking about higher number";
  }
  else if(isNaN(nr_game)){
    document.getElementById("answer").innerHTML="Are you sure that this is a number?";
  }
 
document.getElementById("nr_game").value='';
document.getElementById("nr_game").focus();
  }


