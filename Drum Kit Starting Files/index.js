 for(i=0;i<document.querySelectorAll(".drum").length;i++){
  document.querySelectorAll(".drum")[i] .addEventListener("click", function(){
    var buttoninner=this.innerHTML;
    makesound(buttoninner);
    buttonanimation(buttoninner);
  });
}

document.addEventListener("keydown",function(event){
  makesound(event.key);
  buttonanimation(event.key);
});

function makesound(key){
  switch (key) {
    case "w":
      var tom1=new Audio("sounds/tom-1.mp3");
      tom1.play();
      break;
    case "a":
      var tom2=new Audio("sounds/tom-2.mp3");
      tom2.play();
      break;
    case "s":
      var tom3=new Audio("sounds/tom-3.mp3");
      tom3.play();
      break;
    case "d":
      var tom4=new Audio("sounds/tom-4.mp3");
      tom4.play();
      break;
    case "j":
      var snare=new Audio("sounds/snare.mp3");
      snare.play();
      break;
    case "k":
      var kick=new Audio("sounds/kick-bass.mp3");
      kick.play();
      break;
    case "l":
      var crash=new Audio("sounds/crash.mp3");
      crash.play();
      break;
    default:console.log(buttoninner)

  }
}

function buttonanimation(currentkey){
  var active=document.querySelector("."+currentkey)
  active.classList.add("pressed");
  setTimeout(function(){
    active.classList.remove("pressed");
  }, 1000);
}

//var audio=new Audio("sounds/tom-1.mp3");
//audio.play();