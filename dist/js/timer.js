var isPaused = true;
var isShotclockPaused = true;
// var mil= parseInt(document.getElementById('mil').innerText);
var mil = 0; 
var milLab=document.getElementById('mil');
var secLab=document.getElementById('sec');
var minLab=document.getElementById('min');
var shotclock=24;
var scLab = document.getElementById('shotclock');

var timeintValID;
var shotclockintValID;

function startTime(){ 
  timeintValID = setInterval(function () { 
    if(isPaused == false) {
      if (parseInt(minLab.innerText) == 0 && parseInt(secLab.innerText) == 0) {  
            // document.getElementById("timer").classList.add("blink_me");  
      }else{
        
       secLab.innerText--;
        if (parseInt(secLab.innerText) < 10 && parseInt(secLab.innerText) >= 0 ) {
          secLab.innerText = "0"+ secLab.innerText;
        } 

        if (parseInt(secLab.innerText) < 0 ) {
          minLab.innerText--;
          if (parseInt(minLab.innerText) < 10 && parseInt(minLab.innerText) >= 0 ) {
            minLab.innerText = "0"+ minLab.innerText;
          }
          secLab.innerText = 59;
        } 
      }
    }  

  }, 1000); 
} 
function stopTime() {
  clearInterval(timeintValID);
  
}
function startShotclock(){
  shotclockintValID = setInterval(function () {
    if(isShotclockPaused == false) {
      if(shotclock!=0){
        shotclock--;
        if(shotclock<10){
          scLab.innerText='0'+shotclock;
        }else{
          scLab.innerText=shotclock;
        }  
      }
    }
  }, 1000);

}
function stopShotclock() { 
  clearInterval(shotclockintValID);
}


function set_pause() { 
  if (shotclock == 0) {
    shotclockm = 24;
    document.getElementById('shotclock').innerText = "24";
    stopTime();
    stopShotclock();
  }
  // mil= parseInt(document.getElementById('mil').innerText);
  sec=parseInt(document.getElementById('sec').innerText);
  min=parseInt(document.getElementById('min').innerText);
  if (isPaused == false) {
    
    isPaused = true;
    isShotclockPaused = true;
    // stopTime();
    // stopShotclock();
    starttime.innerHTML = '<svg xmlns="http://www.w3.org/2000/svg" class="icon icon-md" width="24" height="24" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round"><path stroke="none" d="M0 0h24v24H0z" fill="none"></path><path d="M7 4v16l13 -8z"></path></svg> PLAY';
    console.log('Paused');
  }else{
    
    isPaused = false;
    isShotclockPaused = false;
    starttime.innerHTML = '<svg xmlns="http://www.w3.org/2000/svg" class="icon icon-md" width="24" height="24" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round"><path stroke="none" d="M0 0h24v24H0z" fill="none"></path><rect x="6" y="5" width="4" height="14" rx="1"></rect><rect x="14" y="5" width="4" height="14" rx="1"></rect></svg> PAUSE';
    console.log('Resume');
  }
}

startTime();
startShotclock();

// Run the code once the DOM is created, think jquery $(function(){}); but HTML5
document.addEventListener("DOMContentLoaded", function () {
    const commandlineDiv = document.getElementById('shotclock');
    function mutationCallback(mutationsList, observer) {
        // console.log(mutationsList);
        // console.log(observer);
        for (const mutation of mutationsList) {
            shotclock = parseInt(commandlineDiv.innerText);
            if (shotclock == 0) {
              console.log('timeout');
              isPaused = true;
              isShotclockPaused = true;
              starttime.innerHTML = '<svg xmlns="http://www.w3.org/2000/svg" class="icon icon-md" width="24" height="24" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round"><path stroke="none" d="M0 0h24v24H0z" fill="none"></path><path d="M7 4v16l13 -8z"></path></svg> PLAY';
            } 
        }
    }
    // Create an observer instance linked to the callback function
    const observer = new MutationObserver(mutationCallback);
    // What to observe
    const mutationConfig = { attributes: true, childList: true, subtree: true, characterData: true };
    observer.observe(commandlineDiv, mutationConfig);
}) 
 
document.onkeydown = checkKeycode
function checkKeycode(e) {
var keycode;
  if (window.event){
    keycode = window.event.keyCode;
  }else if (e){
    keycode = e.which;
  }
  console.log(keycode);
  switch (keycode) {
    case 18:
      set_shotclock(24);
      break;
    case 37:
      minus_score('score-left');
      break;
    case 38:
      add_score('score-left');
      break;
    case 39:
      add_score('score-right');
      break;
    case 40:
      minus_score('score-right');
      break;
    case 32:
      set_pause();
      break;
    default:
      // statements_def
      break;
  } 
}
function add_score(id, val=0){
  let team = document.getElementById(id);
  let int_sc = parseInt(team.innerText);  
  let score = int_sc + val;
  if (score <= 9) {
    team.innerText = score;
    team.innerText = "0" + team.innerText;
  }else{
   team.innerText = int_sc + val;
  } 
}
function minus_score(id){ 
  let team = document.getElementById(id);
  let int_sc = parseInt(team.innerText); 
  if (int_sc == 0) {

  }else{
    if (int_sc < 11) {
      team.innerText--;
      team.innerText = "0" + team.innerText;
    }else{
     team.innerText--;
    }
  } 
}
// Add Score on Click
document.getElementById('score-left').addEventListener('click', ()=>{ 
  add_score('score-left');
});
// Add Score on Click
document.getElementById('score-right').addEventListener('click', ()=>{
   add_score('score-right');
});

// document.getElementById('shotclock').addEventListener('click', () => {
//   let ss = document.getElementById('shotclock').innerText;
//   ss++;
// })
// Set time
document.getElementById('setTime').addEventListener('click', () => {
  var Min = document.getElementById('setMin').value;
  var Sec = document.getElementById('setSec').value;
  var minLabel = document.getElementById('min');
  var secLabel = document.getElementById('sec'); 
  if (Min != 0) {
    if (Min < 10) {
      minLabel.innerText = "0" + Min.toString();
    }else {
      minLabel.innerText = Min;
    } 
  } else{
    minLabel.innerText = "00";
  }

  if (Sec != 0) {
    if (Sec < 10) {
      secLabel.innerText = "0" + Sec.toString();
    }else {
      secLabel.innerText = Sec;
    } 
  } else{
    secLabel.innerText = "00";
  } 
});

function add_Quarter(element){
  let q = parseInt(element.innerText);
  if (q != 4) { 
    element.innerText++;
  }
} 

function set_reset(){ 
  window.location = '';
}

function set_shotclock(sc){
  if (isPaused == false) {
     stopShotclock();
  console.log(sc);
  shotclock=sc;
  document.getElementById('shotclock').innerText = sc;
  setTimeout(startShotclock(), 1000);
}else{
  shotclock=sc;
  document.getElementById('shotclock').innerText = sc;
}
 
}

function setSettings(){
  var teamA = document.getElementById('teamA').value;
  var teamB = document.getElementById('teamB').value;
  document.getElementById('label-team-A').innerHTML = teamA;
  document.getElementById('label-team-B').innerHTML = teamB;
}



let button = document.querySelector('#quarter');
button.addEventListener('mouseup', (e) => {
   
  switch (e.button) { 
    case 2:
      console.log('Right button clicked.');
      let quarter = parseInt(button.innerText); 
      if (quarter == 0) { 
      }else{
        button.innerText--; 
      }
      break;
    default:
      console.log(`Unknown button code: ${e.button}`);
  }
});

let sc_button = document.querySelector('#shotclock');
sc_button.addEventListener('mouseup', (e) => {
  if (sc_button.innerText < 24) {
    switch (e.button) { 
    case 2:
      console.log('Right button clicked.');
      let sc = parseInt(sc_button.innerText); 
      if (sc == 0) {
      }else{
        sc_button.innerText--; 
      }
      break;
    default:
      if (sc_button.innerText == 24) {

      }else{
        sc_button.innerText++; 
      }
      console.log(`Unknown button code: ${e.button}`);
    }
  }
  
});

document.addEventListener('contextmenu', e => {
  e.preventDefault(); 
});




 