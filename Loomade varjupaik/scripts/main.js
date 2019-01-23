var slide = 0;
slidingImg();

function slidingImg() {
  var i;
  var x = document.getElementsByClassName("hero-img");
  for (i = 0; i < x.length; i++) {
    x[i].style.display = "none"; 
  }
  slide++;
  if (slide > x.length) {slide = 1} 
  x[slide-1].style.display = "block"; 
  setTimeout(slidingImg, 2000);
}


function openSideMenu() {
    
    document.getElementById('side-menu').style.width = '100%';
    
}


function closeSideMenu() {
    
    document.getElementById('side-menu').style.width = '0%';
    document.getElementById('side-menu').style.transition = '0.3s';
    
}
