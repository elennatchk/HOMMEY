var changer=document.getElementById("changer");
var backbutton=document.getElementById("backbutton");
var nextbutton=document.getElementById("nextbutton");
var nextimages=new Array(
    "imgs/roomOne.jfif",
    "imgs/roomTwo.jfif",
    "imgs/roomThree.jfif",
    "imgs/roomFour.jfif",
);

let i=0;

nextbutton.onclick=function(){
    if(i<nextimages.length-1){
        changer.src=nextimages[i+1]
        i++;
    }
   
}

backbutton.onclick=function(){
    if(i>0){
        changer.src=nextimages[i-1]
        i--;
    }
   
}