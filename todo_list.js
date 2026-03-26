let btn=document.querySelector("#add");
console.log(btn);
btn.addEventListener("click",()=>{
    let newTask = document.createElement("div");
    
    newTask.innerHTML=newTask.innerText = document.querySelector("#task").value + "<button class='delete'>Delete</button>";
    newTask.setAttribute("class","task");
    document.querySelector(".box").append(newTask);
    document.querySelector("#task").value="";
});
document.querySelector(".box").addEventListener("click", (e) => {
    if (e.target.classList.contains("delete")) {
        e.target.parentElement.remove();
        console.log("Task deleted");
    }
});