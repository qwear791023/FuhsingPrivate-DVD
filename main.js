

const photosBtn = document.querySelector('.select-photos');
const videoBtn = document.querySelector('.select-video');
// const hamburger = document.querySelector('.menu-btn__burger');
const photosMenu = document.querySelector('.selectbar-photos');
const videoMenu = document.querySelector('.selectbar-video');
// const menuNav = document.querySelector('.menu-nav');
// const navItems = document.querySelectorAll('.menu-nav__item');

let showMenu = false;


function togglePhotos() {
  if(!showMenu) {
    // hamburger.classList.add('open');
    photosMenu.classList.add('open');
    // menuNav.classList.add('open');
    // navItems.forEach(item => item.classList.add('open'));

    showMenu = true;
  } else {
    // hamburger.classList.remove('open');
    photosMenu.classList.remove('open');
    // menuNav.classList.remove('open');
    // navItems.forEach(item => item.classList.remove('open'));

    showMenu = false;
  }
}
function toggleVideo() {
    if(!showMenu) {
      videoMenu.classList.add('open');
  
      showMenu = true;
    } else {
      videoMenu.classList.remove('open');
  
      showMenu = false;
    }
  }

  
if(photosBtn){
  photosBtn.addEventListener('click', swapper, false);
}
if(videoBtn){
  videoBtn.addEventListener('click', swapper, false);
}

photosBtn.addEventListener('click', togglePhotos);
videoBtn.addEventListener('click', toggleVideo);
