function menuToggle(){
	var x = document.getElementById('myNavtoggle');
	if(x.className === 'navtoggle'){
		x.className += ' responsive';
	} else{
		x.className = 'navtoggle';
	}
}

var mybutton = document.getElementById("myBtn");

window.onscroll = function() {
	scrollFunction();
}

function scrollFunction() {
	if (document.body.scrollTop > 1400 || document.documentElement.scrollTop > 1400) {
		mybutton.style.display = "block";
	} else {
		mybutton.style.display = "none";
	}
}

function topFunction () {
	document.body.scrollTop = 0;
	document.documentElement.scrollTop = 0;
}



 