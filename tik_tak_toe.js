let box=document.querySelectorAll(".box");
let playerturn="cross";
const win=[
    [0,1,2],
    [3,4,5],
    [6,7,8],
    [0,3,6],
    [1,4,7],
    [2,5,8],
    [0,4,8],
    [2,4,6],
]
box.forEach((box)=>{
    box.addEventListener("click",function(){
        if(playerturn==="cross")
        {
            box.innerText="X";
            box.style.color="red";
            playerturn="zero";
            box.disabled=true;
        }
        else{
            box.innerText="O";
            playerturn="cross";
            box.disabled=true;
            box.style.color="blue";
        }
        check_winner();
    })})
    check_winner=()=>{
        for(let winner of win)
        {
            let p1=box[winner[0]].innerText;
            let p2=box[winner[1]].innerText;
            let p3=box[winner[2]].innerText;
            if (p1 !== "" && p2 !== "" && p3 !== "") {
                if (p1 === p2 && p2 === p3) {
                    box[winner[0]].style.backgroundColor = "green";
                    box[winner[1]].style.backgroundColor = "green";
                    box[winner[2]].style.backgroundColor = "green";
            
                    let mess = document.createElement("h4");
                    let div = document.querySelector(".container");
                    mess.innerHTML = "<h3><i>WINNER IS  </i></h3";
                    mess.style.color = "red";
                    mess.style.fontSize="10vh"
                    mess.innerText = mess.innerText + p1;
                    div.prepend(mess);
                    box.forEach((box) => {
                        box.disabled = true;
                    });
                }
            }
        }
    }
    reset=()=>{
        box.forEach((box)=>{
            box.innerText="";
            box.disabled=false;
            box.style.backgroundColor="white";
        })
        let mess = document.querySelector("h4");
        mess.remove();
    }
    let resetbtn=document.querySelector(".reset");
    resetbtn.addEventListener("click",reset);