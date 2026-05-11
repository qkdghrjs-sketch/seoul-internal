
// Header scroll
window.addEventListener('scroll',function(){
  document.getElementById('header').classList.toggle('scrolled',window.scrollY>30);
  var st=document.getElementById('scrollTop');
  if(st)st.classList.toggle('show',window.scrollY>400);
});

// Mobile nav
var navToggle=document.getElementById('navToggle');
var navList=document.getElementById('navList');

// Create overlay for nav drawer
var navOverlay=document.createElement('div');
navOverlay.id='navOverlay';
navOverlay.style.cssText='position:fixed;inset:0;background:rgba(0,0,0,0.45);z-index:998;opacity:0;visibility:hidden;transition:opacity .4s,visibility .4s;';
document.body.appendChild(navOverlay);

function openNav(){
  if(navToggle)navToggle.classList.add('active');
  if(navList)navList.classList.add('open');
  navOverlay.style.opacity='1';navOverlay.style.visibility='visible';
  document.body.style.overflow='hidden';
}
function closeNav(){
  if(navToggle)navToggle.classList.remove('active');
  if(navList)navList.classList.remove('open');
  navOverlay.style.op