
let menu = document.querySelector('#menu-bar');
let navbar = document.querySelector('.navbar');


navbar.style.right ='-250px';

menu.onclick= function(){
    if(navbar.style.right=="-250px"){
        navbar.style.right='0px';
        menu.classList.toggle('fa-times');
         navbar.classList.toggle('active');
    }
    else{
        navbar.style.right='-250px';
         menu.classList.toggle('fa-times');
         navbar.classList.toggle('active');
    }
}


