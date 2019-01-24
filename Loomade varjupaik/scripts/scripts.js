function openSideMenu() {
    
    document.getElementById('mobile-menu').style.width = '100%';
    
}


function closeSideMenu() {
    
    document.getElementById('mobile-menu').style.width = '0%';
    document.getElementById('mobile-menu').style.transition = '0.3s';
    
    
}

var imgs = new Array('img1', 'img2')

var num = 0;

    if (num < 3){
        
        num =+ 1;
        
    } else {
        
        num = 0;
        
    }

function nextSlide() {
        
    var removeClass = (imgs[num] - 1);
    var addClass = (imgs[num]);
    
    
    document.getElementById('hero-banner').classList.remove(removeClass);
    document.getElementById('hero-banner').classList.add(addClass);
        
}

function prevSlide() {
    
        
    var addClass = (imgs[num] - 1);
    var removeClass = (imgs[num]);
        
    document.getElementById('hero-banner').classList.remove(removeClass);
    document.getElementById('hero-banner').classList.add(addClass);
    
}