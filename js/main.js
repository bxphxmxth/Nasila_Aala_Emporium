// Night mode 

// Night mode Navbar

let night = document.getElementsByClassName("night")[0];
console.log(night);

let bgNav = document.getElementsByClassName("nav")[0];
console.log(bgNav);

let menu = document.getElementsByClassName("menu")[0];
console.log(menu);

let emporium = document.getElementsByClassName("emporium")[0];

let divSection2 = document.getElementsByClassName("LivingSaleClothes")[0];

let recents = document.getElementsByClassName("recentsProducts")[0];

let section1 = document.getElementsByClassName("section1")[0]


night.addEventListener("click", () => {
    bgNav.style.backgroundColor = "black";
    menu.style.color = "white";
    emporium.style.color = "white";


    divSection2.style.backgroundColor = "black";
    recents.style.backgroundColor = "black";
    recents.style.color = "white";
    section1.style.backgroundColor = "black";

})

// Light mode navbar

let light = document.getElementsByClassName("light")[0];

light.addEventListener("click", () => {
    bgNav.style.backgroundColor = "white";
    menu.style.color = "black";
    emporium.style.color = "black";


    divSection2.style.backgroundColor = "white";
    recents.style.backgroundColor = "white";
    recents.style.color = "black";
    section1.style.backgroundColor = "white";

})

//  Pop up connexion 



let openBtn = document.getElementsByTagName("button")[2];
console.log(openBtn);

// div popup connexion

function div_show() {
document.getElementById('abc').style.display = "block";
}
//Function to Hide Popup
function div_hide(){
document.getElementById('abc').style.display = "none";
}

// / Validating Empty Field
function check_empty() {
if (document.getElementById('name').value == "" || document.getElementById('email').value == "" || document.getElementById('msg').value == "") {
alert("Remplissez tous les champs !");
} else {
document.getElementById('form').submit();
alert("Form Submitted Successfully...");
}
}

// Div pop up inscription 

let btnInscription = document.getElementsByClassName("inscription")[0];
console.log(btnInscription);

function div_show2() {
    document.getElementById('enregistrement').style.display = "block";
    }


  let showInscription = () =>{
   
    document.getElementById('enregistrement').style.display = "block";
  }  

  btnInscription.addEventListener("click",showInscription)


  // Nav scroll

  let myNav = document.getElementsByClassName("nav")[0];
  console.log(myNav);

  window.onscroll = function () { 
      "use strict";
      if (document.body.scrollTop = 0 ) {
          
          
          myNav.setAttribute("class","nav");
          
      } 
      else {
        myNav.setAttribute("class","changeNav");
    //       myNav.classList.add("nav-transparent");
    //       myNav.classList.remove("nav-colored");
    //   }
  }}


//   $(document).ready(function(){       
//     var scroll_start = 0;
//     var startchange = $('#startchange');
//     var offset = startchange.offset();
//      if (startchange.length){
//     $(document).scroll(function() { 
//        scroll_start = $(this).scrollTop();
//        if(scroll_start > offset.top) {
//            $(".navbar-default").css('background-color', '#f0f0f0');
//         } else {
//            $('.navbar-default').css('background-color', 'transparent');
//         }
//     });
//      }
//  });

