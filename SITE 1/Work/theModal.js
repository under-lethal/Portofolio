
//I

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


// II -----------------------------------------------------------------------------------------------------------------------
//You cannot open the MODAL from the second image and the other image
var modal = document.getElementById('myModal');
var modalImg = document.getElementById("img01");
var captionText = document.getElementById("caption");

function myFunc(el){
  var imgSrc = el.src;
  var altText = el.alt;
  modal.style.display = "block";
  modalImg.src = imgSrc;
  captionText.innerHTML = altText;
}

window.onclick = function(event){
  if(event.target == modal){
    modal.style.display = "none";
  }
}


// Get the modal /// DELETE THE OLD <script>

 
