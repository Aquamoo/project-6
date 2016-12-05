//got this code from MY codepen assignment

var SpongeX = 250;
var SpongeY = 20;
var foodEaten = 0;

function randomNumber(min,max)
{
 return Math.floor(Math.random()*(max-min+1)+min);
}

document.addEventListener("keydown", function(e) {
  if(e.keyCode == 37){
    SpongeX -=15;
 document.getElementById("sponge").setAttribute("x", SpongeX)

  }
  else if(e.keyCode == 39){
        SpongeX +=15;
 document.getElementById("sponge").setAttribute("x", SpongeX)
  }
  if(e.keyCode == 38){
    SpongeY -=15;
 document.getElementById("sponge").setAttribute("y", SpongeY)

  }
  else if(e.keyCode == 40){
        SpongeY +=15;
 document.getElementById("sponge").setAttribute("y", SpongeY)
  }

/*
function randomNumber(min,max)
{
 return Math.floor(Math.random()*(max-min+1)+min);
}
*/

var end = 0;


 Food1Y = Number(document.getElementById("food1").getAttribute("y"))
 Food1X = Number(document.getElementById("food1").getAttribute("x"))

 SpongeY = Number(document.getElementById("sponge").getAttribute("y"))
 SpongeX = Number(document.getElementById("sponge").getAttribute("x"))

   if (SpongeX > Food1X && SpongeX < Food1X + 50 && SpongeY > Food1Y && SpongeY < Food1Y + 50) {
      var randx = randomNumber(0, 350)
      document.getElementById("food1").setAttribute("y", randx)
      console.log("test");
      end++;
  }


  if(SpongeX > Food1X && SpongeX < Food1X + 50 && SpongeY > Food1Y && SpongeY < Food1Y + 50) {
     foodEaten=foodEaten+1
   document.getElementById("score").textContent = foodEaten;
  }

if (end > 11) {
  document.getElementById("screen").pauseAnimations()
}

})
