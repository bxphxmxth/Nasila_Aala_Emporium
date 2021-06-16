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


// function openTheForm() {
//     document.getElementById("popupForm").style.display = "block";
//   }
  
//   function closeTheForm() {
//     document.getElementById("popupForm").style.display = "none";
//   }

//   function openForm() {
//     document.getElementById("popupForm").style.display = "block";
//   }
//   function closeForm() {
//     document.getElementById("popupForm").style.display = "none";
//   }

//   Me 

let openBtn = document.getElementsByTagName("button")[2];
console.log(openBtn);



// / Validating Empty Field
function check_empty() {
if (document.getElementById('name').value == "" || document.getElementById('email').value == "" || document.getElementById('msg').value == "") {
alert("Fill All Fields !");
} else {
document.getElementById('form').submit();
alert("Form Submitted Successfully...");
}
}
//Function To Display Popup
// let div_show = () =>{
//     document.getElementById('abc').style.display = "block";

// }

// openBtn.addEventListener("click", div_show);

// let div_hide = () =>{
//     document.getElementById('abc').style.display = "none";
// }

// openBtn.addEventListener("click", div_hide);

function div_show() {
document.getElementById('abc').style.display = "block";
}
//Function to Hide Popup
function div_hide(){
document.getElementById('abc').style.display = "none";
}
