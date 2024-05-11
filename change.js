 let newtext=document.querySelector(".change")
 newtext.addEventListener("mouseover", function() {
    this.innerHTML = "see work";
  });
  
   let changetext =document.querySelector(".change").addEventListener("mouseout", function() {
    this.innerHTML = "About!";
  });

//   console.log(newtext)



  let menu =document.querySelector(".menu")

 menu.addEventListener("mouseover",()=>{
    menu.innerText ="Hello!"
 })
 menu.addEventListener("mouseout",()=>{
    menu.innerText ="Menu"
 })
  
//  console.log(menu)



 var loader =document.getElementById("perloader");
 window.addEventListener("load",()=>{
   loader.style.display ="none"
 })
 document.body.style.overflow = 'hidden';

// Show scrollbar when the page is fully loaded
window.addEventListener('load', function() {
    document.body.style.overflow = 'auto';
});




  