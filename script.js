
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



submit.onclick =function(){
      let name = document.getElementById('name').value,
          email =document.getElementById('email').value,
          subject =document.getElementById('subject').value,
          msg =document.getElementById('msg').value,
          error_msg = document.getElementById('error_msg'),
          text;

      error_msg.style.padding="10px";

      if(name.length < 5){
          text="Plese Enter Valid Name!";
          error_msg.innerHTML = text;
          return false;
      }

      if(email.indexOf("@")== -1 || email.length <6 ){
        text="Plese Enter Valid Email!";
        error_msg.innerHTML = text;
        return false;
      }

      if (subject.length < 10){
        text="Plese Enter Valid Subject!";
        error_msg.innerHTML = text;
        return false;
      }

      if (msg.length < 20){
        text="Plese Enter Characters More Than 20";
        error_msg.innerHTML = text;
        return false;
      }

      else{error_msg.style.background="None";
      error_msg.style.color="#ff0157";
      error_msg.style.fontSize="2rem";
      error_msg.innerText="Form Submit Sucessfully";
    }
  }

