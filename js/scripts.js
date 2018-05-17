// Business logic

var p1 ,p2 ;
var rollValue;
var totalScore=0;
function Player (name){
  this.name= name;
  this.score = 0;
}
 Player.prototype.addScore= function(score) {
    return this.score+=score;
 }
 Player.prototype.win=function(score){
   if( totalScore => 100){
     alert(this.name +"has won!");
   }
 }
 function rollVal(){
   rollValue= Math.floor((Math.random()*6)+1);
   if (rollValue== 1){
     totalScore=0;
     alert("Unfortunately you rolled a 1.Your turn is over")
     alert(totalScore)
      return false ;
   }
   else {
     totalScore+=rollValue
     console.log(totalScore)
   }
   return totalScore
 }
 function hold(Player,score){
   Player.addScore(score);
   totalScore=0;
   return true
 }
 function getPlayers(n1,n2){
   p1=new Player(n1);
   p2=new Player(n2);
 }

//User interface
$(document).ready(function(){
  var ph1,ph2;
  $("form").submit(function(event){
     ph1=$("#firstPlayer").val();
     ph2=$("#secondPlayer").val();
    getPlayers(ph1,ph2);
    $("#firstPlayer").val('');
    $("#secondPlayer").val('');
    event.preventDefault();
  });
    $("#throwDice").click(function(){
      rollVal();
    $("#Dice").attr("src", "Dice" +rollValue+".png");
  });
  $(".hold1").click(function(){
      hold(p1,totalScore)
      console.log(p1)
      $("#io").text(p1.score);
  });




    $("#dropDice").click(function(){
      rollVal();
    $("#Die").attr("src", "Dice" +rollValue+".png");
  });
  $(".hold2").click(function(){
      hold(p2,totalScore);
      $("#lo").text(p2.score);
      console.log(p2)
  });
});
