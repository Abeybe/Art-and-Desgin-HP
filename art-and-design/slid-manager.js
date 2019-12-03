var slids;

function setup(){
    slids=getClass("slid");
    slids[0].classList.add("now-slid");
    for(var i=1;i<slids.length;i++){
        slids[i].classList.add("wait-slid");
    }
    console.log(slids.length)
}

document.addEventListener("keydown",(event)=>{
    if(event.which==37)paginator(-1);
    else if(event.which==39)paginator(1);
});

var slidNum=0;
function paginator(next){
    if(next==1 && (slidNum+1)<slids.length){
        slids[slidNum].classList.add("c2l");
        slids[slidNum].classList.remove("r2c","l2c");
        slids[slidNum+1].classList.add("r2c");
        slids[slidNum+1].classList.remove("c2r");
        slidNum++;
    }
    else if(next==-1 && 0<slidNum){        
        slids[slidNum].classList.add("c2r");
        slids[slidNum].classList.remove("l2c","r2c");
        slids[slidNum-1].classList.add("l2c");
        slids[slidNum-1].classList.remove("c2l");
        slidNum--;
    } 
    getId("button-area").innerHTML=
        "<div class='button'>"
        +((0<slidNum)?
            "<input type='button' id='preview' onclick='paginator(-1);'/>":"")
        +"</div><div class='button'>"
        +((slidNum<slids.length-1)?
            "<input type='button' id='next' onclick='paginator(1);'/>":"")
        +"</div>"
    ;       
}
function getId(id){
    return document.getElementById(id);
}
function getClass(cName){
    return document.getElementsByClassName(cName);
}