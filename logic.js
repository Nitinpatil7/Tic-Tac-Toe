const boxes=document.querySelectorAll('.box');
const resetbtn=document.querySelector('.resetbtn');
const hide_content = document.querySelector('.hide-container');
const msg=document.querySelector('#msg');
const newbtn= document.querySelector('#newbtn');

let turn=true;

let patterns=[
    [0,1,2],
    [3,4,5],
    [6,7,8],
    [0,3,6],
    [1,4,7],
    [2,5,8],

    [0,4,8],
    [2,4,6],
]
boxes.forEach((box) => {
    box.addEventListener("click", ()=>{
        console.log('clicked')
        if(turn){
            box.innerText='o';
            turn=false;
        }else{
            box.innerText='x';
            turn=true;
        }
        box.style.pointerEvents='none';
        checkwinner();
    });

    
});

let checkwinner=()=>{
    for (let pattern of patterns){
        let val1=boxes[pattern[0]].innerText;
        let val2=boxes[pattern[1]].innerText;
        let val3=boxes[pattern[2]].innerText;
        if(val1 != '' && val2 != '' && val3 != ''){
            if(val1==val2 && val2==val3){
                console.log('winner');

                showmsg(val1);
            }
        }

    }
}
const disabledboxes=()=>{
    for(let box of boxes){
        box.style.pointerEvents = 'none'
    }
}
const enabledboxes=()=>{
    for(let box of boxes){
        box.style.pointerEvents='auto';
        box.innerText='';
    }
}

let showmsg=(winner)=>{
    msg.innerText=`Congartulationwinner is ${winner}`
    hide_content.classList.remove('hide');

    disabledboxes();

}
const resetgame=()=>{
    turn=true;
    enabledboxes();
     hide_content.classList.add('hide');
}
newbtn.addEventListener('click', resetgame);
resetbtn.addEventListener('click',resetgame);