/**
 * 
 * Manipulating the DOM exercise.
 * Exercise programmatically builds navigation,
 * scrolls to anchors from navigation,
 * and highlights section in viewport upon scrolling.
 * 
 * Dependencies: None
 * 
 * JS Version: ES2015/ES6
 * 
 * JS Standard: ESlint
 * 
*/
/**
 * Comments should be present at the beginning of each procedure and class.
 * Great to have comments before crucial code sections within the procedure.
*/
/**
 * Define Global Variables
 *
*/
const navlist=document.getElementById("navbar__list");
//create array of sections objects
const sections=document.querySelectorAll("section");

/**
* End Global Variables
* 
*/
// build the nav
const createNav=()=>{
   let navli="";
   //looping through sections
   sections.forEach(element => {
       const sectionid=element.id;//get id of each secttion
       const sectiondatanav=element.dataset.nav;//get data_nav
navli+=`<Li><a class="menu_link" href="#${sectionid}">${sectiondatanav}</a></li>`;
   });//create li section with its id datanave
navlist.innerHTML=navli;//append each section in navebar
}
//createnavbar
createNav();

// Add class 'active' to section when near top of viewport
function activeTosection(element){
let sectionInviewport=element.getBoundingClientRect();
return( sectionInviewport.top>=0);
}

// Set sections active state
function setsectionactive()//function for set section in activestate
{
//looping through section's array
  sections.forEach(element => {
   if(activeTosection(element))  //check if section in viewport
 //  check section in veiwport and check if it is active
   {  if(!element.classList.contains("your-active-class"))// if it wasn't active
element.classList.add("your-active-class");//add active class to section
element.style.cssText="background-color:#191970";// highlite the section in active class
}
else{
// remove
   element.classList.remove("your-active-class");//remove it
   element.style.cssText="background-color :linear-gradient(0deg, rgba(255,255,255,.1) 0%, rgba(255,255,255,.2) 100%)";
}
  });
  

}
// Scroll to section on link click
window.addEventListener('scroll',setsectionactive);
// when click happen scrolling to appropraite section  smoothy effect
 navlist.addEventListener("click",(section)=>{
  // section.preventDefault();
if(section.target.dataset.nav)//check 
{
   document.getElementById(`${section.target.dataset.nav}`);
   window.scrollIntoView({behavior:"smooth"});//for smoothy view
}
//setTimeout(()=>{location.hash=`${section.target.id}`},150);

 })
 