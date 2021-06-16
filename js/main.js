// Night mode 

// Night mode Navbar

let night = document.getElementsByClassName("night")[0];
console.log(night);

let bgNav = document.getElementsByClassName("nav")[0];
console.log(bgNav);

let menu = document.getElementsByClassName("menu")[0];
console.log(menu);

let emporium = document.getElementsByClassName("emporium")[0];


night.addEventListener("click", () => {
    bgNav.style.backgroundColor = "black";
    menu.style.color = "white";
    emporium.style.color = "white";
})

// Light mode navbar

let light = document.getElementsByClassName("light")[0];

light.addEventListener("click", () => {
    bgNav.style.backgroundColor = "white";
    menu.style.color = "black";
    emporium.style.color = "black";
})