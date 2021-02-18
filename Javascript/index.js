const devicemenu = document.querySelector('.mobilemenu');
const mynavlinks = document.querySelector('.navlinks');
const navlinks = document.querySelectorAll('nav li');

  devicemenu.addEventListener('click', () =>{
    mynavlinks.classList.toggle("open");
  });
