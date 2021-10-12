
//I

//I'st we're going to do is MY SLELCTORS
let intro = document.querySelector('.intro'); //this is gonna to be our actuall full screen - our SPLASH-SCREEN
let introLogo = document.querySelector('.logo-header');
let logoSpan = document.querySelectorAll('.introLogo'); //because we have our TWO "span element"

//add an "eventListener" into - our FULL-WINDOW.
window.addEventListener('DOMContentLoaded', ()=>{
	setTimeout(()=>{
		
		logoSpan.forEach((span, index)=>{
			setTimeout(()=>{
				span.classList.add('active');
			}, (index + 1) * 600)
		})
			
			setTimeout(()=>{
				logoSpan.forEach((span, index)=>{
					setTimeout(()=>{
						span.classList.remove('active');
						span.classList.add('fade');
					}, (index + 1) * 50)
				})
			},2500)

			setTimeout(()=>{
				intro.style.top = '-100vh';
			},2500)
	})

}); 

//The DOMContentLoaded event fires when the initial HTML document has been completely loaded and parsed, without waiting for stylesheets, images, and subframes to finish loading.
//This will trigger ['DOMContentLoaded'] - the function ()=>
//All the functions within this section {...} -> will TRIGGER - once all the DOM contents - been/being LOADED.
//The page has been FULLY LOADED - and here{...} we put multiple "setTimeout" methods - to get OUR ANIMATIONS GOING
//The "setTimout method" - take a callback function ()=>{...};

//Inside the callback function [we SELECT our "logoSpan"] - we-re going to apply animations to these TWO <spans> separately - with the next piece of code.

//logoSpan.forEach -loop on this  - and this take the "span" element - individual. [And also we can "chuck" - "index" ELEMENT/NUMBER in there.]
//logoSpan.forEach(span, index)
//Then an "ARROW FUNCTION" -after that: logoSpan.forEach(span, index) => {...} - then "in there" - i'm going to do another "setTimeout" - that takes ANOTHE "callback function".
//logoSpan.forEach(span, index) => { setTimeout(()=>)}
//inside the "callback function" we-re going to put "span". [we select our "span" element] - span.classList.add('active') - and we add "the active class".
//Then - our TIME-OUT. 1. TAKE THE INDEX NUMBER. "+1" - AND WE'RE GOING TO "times that" - by 400 miliseconds.
// +1 - is because of  - "the first index a.k.a. the "0" index - [will be nothing] - that's why we have that "+1".

//Next - we're gonna put another setTimeout Function. (Again - TAKES IN - the "callback function").
//"span.classList.remove" - we want to REMOVE the ACTIVE CLASS - WE APPLIED PREVIOUSLY
//"span.classList.add" - we want to ADD - that "fadeclass" - that fades up.
//Again - we SET the TIMEOUT for this: "(index + 1) * 50)"

//Then, We need  to do the FINAL SET - timeout-function - adjusting to "2 Seconds" - "2000".
//The finel/final thing - we need to do here  - is just apply an ANIMATION to the main "SPLASH SCREEN - itself" - to ROLLS UP. |^
//..to do this we use OUR LAST TIMEOUT:"setTimeout(())"
//intro.style.top - The top property sets or returns the top position of a positioned element. | This property specifies the top position of the element including padding, scrollbar, border and margin.
// }, 2300) - timeout to this. 2.3 seconds

//https://www.youtube.com/watch?v=2ak37WrbSDg&t=603s


//-------------------------------------------------------------------------------------------------------------------------------
//II

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
				link.style.animation = 'navLinkFade 0.5s ease forwards ${index / 7 + 1.5}s';
			}
			//index / 7 it's gonna give us a anice DEELAY between each navlink.
		});	
		//Burger Animation
		burger.classList.toggle("toggle");
	});
}


	//Now- invoke that/the function();
	//navSlide();
	
	//But- if you have MULTIPLE Functions I recommend - BUILDING an "APP Function" - and you can CALL all your SMALLER Functions "here";
	/*const app = () => {
		navSlide();
		navSlide();
		navSlide();
		navSlide();
 
	}*/	

//Ok, lnow let's get back to invoke this function();
navSlide();

// Now - let's animate these (nav-slides) - ONE by ONE.
// Add the nav links in this. To do that...: const navLinks = ... - these are individual links. [Home, About, Work, Projects];