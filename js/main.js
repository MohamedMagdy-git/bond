let lis = document.querySelectorAll(".portfolio ul li");
let imgs = document.querySelectorAll(".portfolio .coll .box");


console.log(lis);
console.log(imgs);


lis.forEach((li)=>{
    li.addEventListener("click", active);
    li.addEventListener('click', displayImg)
})



// to active botton li and remove for all 
function active() {
    lis.forEach((li)=> {
        li.classList.remove("activelist")
        this.classList.add("activelist")
    })
}


// to display non for all img::not(this.dataset.kind)
function displayImg() {
    imgs.forEach((img)=> {
      img.style.display = "none" 
    })
    document.querySelectorAll(this.dataset.kind).forEach((img)=> {
        img.style.display = "block"
    })
}


// nav bar
let sectionLand = document.querySelector(".landing");
let nav = document.querySelector("nav")
let navLink = document.querySelector(".nav-link")


 window.onscroll = function() {
    if(window.scrollY >= 50 ) {
        nav.classList.add("floatingNav")
        navLink.classList.add("colorchange")
    }else{
        nav.classList.remove("floatingNav")
        navLink.classList.remove("colorchange")
    }
 };