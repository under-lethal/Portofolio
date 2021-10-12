//create a PACKAGE or RENAME it (in .html)  <script src="app.js"></script> 
const navSlide = () => {
	const burger = document.querySelector('.burger');
	const nav = document.querySelector('.nav-links');
	const navLinks = document.querySelectorAll('.nav-links li');
	
	
	//when we click on the "BURGER" - we want the NAV links - TO GET the class of "NAV ACTIVE".
	//to do that...: "burger.addEventsListener('click',..." AND  - RUN A FUNCTION -> () =>{...});
	burger.addEventListener('click', () => {
		//Toggle Nav
		nav.classList.toggle('nav-active');

		//Animate Links
		//For EACH LINK we gonna run a Function
		//These are the individual links "link" - but we also have acces to INDEX  - which if we console.log is just gonna bring back the "individual/links" - like how many links we have.(4 in our case).
		//Why do we want the INDEX? - CAUSE YOU CAN EASILY animate the DELAY between each.
		navLinks.forEach((link, index) => {
			if(link.style.animation) {
				link.style.animation = '';
			}else{
				link.style.animation = 'navLinkFade 0.5s ease forwards ${index / 7 + 0.3}s'
			}
			//index / 7 it's gonna give us a anice DEELAY between each navlink.
		});	
		//Burger Animation
		burger.classList.toggle("toggle");
	});
}

navSlide();

//--------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------

//Image MODAL
// Get the modal
var modal = document.getElementById('myModal');

// Get the image and insert it inside the modal - use its "alt" text as a caption
var img = document.getElementById('myImg');
var modalImg = document.getElementById("img01");
var captionText = document.getElementById("caption");
img.onclick = function(){
  modal.style.display = "block";
  modalImg.src = this.src;
  captionText.innerHTML = this.alt;
}

// Get the <span> element that closes the modal
var span = document.getElementsByClassName("close")[0];

// When the user clicks on <span> (x), close the modal
span.onclick = function() { 
  modal.style.display = "none";
}

