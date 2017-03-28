alert("mensaje");


function reproducirM(){
   document.getElementById('empezar').play();

}
function pausarM(){
  document.getElementById('empezar').pause();
}

function volumenM(){
  document.getElementById('empezar').volumen += 0.2;
}
function volumenMin(){
  document.getElementById('empezar').volume -= 0.2;
}
function pararM(){
  document.getElementById('empezar').currentTime=0;
}

function avanzar(){
  document.getElementById('empezar').currentTime -= 0.2;
}
function retroceder(){
document.getElementById('empezar').currentTime -= 0.2;

}

function setVol(value) {
          var vol = video.volume;
          vol += value;
          //  test for range 0 - 1 to avoid exceptions
          if (vol >= 0 && vol <= 1) {
            // if valid value, use it
            video.volume = vol;
          } else {
            // otherwise substitute a 0 or 1
            video.volume = (vol < 0) ? 0 : 1;
          }
        }
