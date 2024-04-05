function img(){
  $(document).ready(function(){
    $('.carousel').carousel();
  });

}   
var video = document.getElementById("myVideo");

var playButton = document.querySelector('.vid');

playButton.addEventListener('click', function() {
  if(video.paused){
    video.play();
  } else{
    video.pause();
  }
});
var audio = document.getElementById("bell");
var playAudio = document.getElementById("relax")
var playAudion = document.getElementById("relax2")

audio.addEventListener("click", function(){
  if(playAudio.paused){
    playAudio.play();
  }else{
    playAudio.pause();
  }
  if(playAudion.paused){
    playAudion.play();
  }else{
    playAudion.pause();
  }

});