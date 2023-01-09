let add_left = document.querySelector('.add-left');


function add_score(){
	document.querySelector('#score_left').innerText++;
}

add_left.addEventListener('click', add_score);

function setSettings(){
	let teamA = document.querySelector('#teamA').value;
	alert(teamA);
}