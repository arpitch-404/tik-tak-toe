let mode=document.querySelector("#mode");
let curr="light";
mode.addEventListener("click",()=>{
   if(curr==="light")
   {
       curr="dark";
       document.querySelector("body").setAttribute("class","dark");
   }
   else
   {
       curr="light";
       document.querySelector("body").setAttribute("class","light");
   }
   console.log(curr);
});