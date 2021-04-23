// define all UI variable
const navToggler = document.querySelector('.nav-toggler');
const navMenu = document.querySelector('.site-navbar ul');
const navLinks = document.querySelectorAll('.site-navbar a');

let index = 0;
var x = window.matchMedia("(max-width: 767px)");

// for(var i=0; i< test.length; i++){
//   if( (test[i].innerHTML) ==='about'){
//     console.log('abtestut');
//   }
//   if( (test[i].innerHTML) ==='home'){
//     console.log('salut');
//   }
 

// }

// load all event listners
allEventListners();

// functions of all event listners
function allEventListners() {
  // toggler icon click event
  navToggler.addEventListener('click', togglerClick);
  // nav links click event
  navLinks.forEach( elem => elem.addEventListener('click', navLinkClick));
}

// togglerClick function
function togglerClick() {
  navToggler.classList.toggle('toggler-open');
  navMenu.classList.toggle('open');
  
}

// navLinkClick function
function navLinkClick() {
  if(navMenu.classList.contains('open')) {
    navToggler.click();
  }
}
//function
function myFunction(x) {
  if (x.matches) { // If media query matches
    window.onkeydown = toucheClavier;
    console.log("test")
  } else {
    window.onkeydown = toucheClavierC;
    console.log("teddst")
  }
}


myFunction(x); // Call listener function at run time
x.addListener(myFunction) // Attach listener function on state changes

//keybord
function toucheClavier(event){
  toucheFleche = event.keyCode;
  if(toucheFleche == 40){
    if(index < 4 ){
        //location.href="home.html";
      index++;
    let change = ('#d'+ index);
    console.log(change)
    document.querySelector(change).focus();
    }
    else{
      index=0;
    }
    
  }
  if(toucheFleche == 38){
    if(index >=2){
      index--;
      let change = ('#d'+ index);
      console.log(change)
      document.querySelector(change).focus();
    }
    else{
      return togglerClick();
    }  
  }
}
function toucheClavierC(event){
  toucheFleche = event.keyCode;
  if(toucheFleche == 39){
    if(index < 5 ){
      index++;
      let change = ('#d'+ index);
      console.log(change)
    document.querySelector(change).focus();
    }
    else{
      index=0;
    }
    
  }
  if(toucheFleche == 37){
    if(index >=2){
      index--;
      var change = ('#d'+ index);
      console.log(change)
      document.querySelector(change).focus();
    }
    else{
      index=5;
    }  
  }
}
