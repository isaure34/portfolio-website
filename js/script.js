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


  hbspt.forms.create({
	region: "na1",
	portalId: "20132127",
	formId: "e4533f9b-cc0f-4f43-9a09-8ac28cc7308a"
});