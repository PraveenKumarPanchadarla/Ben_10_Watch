const hov=document.getElementById("face");
const aliens=document.querySelectorAll("#aliens");
const tran=document.querySelectorAll("#face img");
const hoo=document.getElementById("alien");
const prev=document.getElementById("prev");
const next=document.getElementById("next");
var audio=document.getElementById("hovere");
var audi=document.getElementById("hovered");
var aud=document.getElementById("hoverede");
var video=document.getElementById("player");
const norm=document.getElementById("norm");
const linked=document.getElementById("lin");
const gitted=document.getElementById("hub");
hoo.addEventListener("click",addgif);
// hoo.addEventListener("mouseout",removegif);
hoo.addEventListener("click",()=>{audi.play();});
aliens.forEach((ele)=>{
    ele.addEventListener("click",()=>{aud.play();});
})
function addgif(){
    hoo.src="./trans/theonre1.gif"
}
function removegif(){
    hoo.src="./trans/therevrerse1.gif"
}

function cleargif(){
    hoo.src=""
}
let idx=0;


function run(){
    idx++;
    changeimage()
}

function resetinterval(){
    let interval=setInterval(run,200);
    clearInterval(interval);
}
function changeimage(){
    if(idx>tran.length-1){
        idx=0
    }
    else if(idx<0){
        idx=tran.length-1;
    }
    aliens.forEach((el)=>el.style.transform=`translateX(${-idx*150}px)`)
}
next.addEventListener("click",()=>{
    idx++;
    changeimage()
    resetinterval()
    cleargif()
    // hov.style.boxShadow=` 0 0 5px #03e954,0 0 25px #03e954, 0 0 50px #03e954,0 0 200px #03e954`;
    audio.play();

})

prev.addEventListener("click",()=>{
    idx--;
    changeimage()
    resetinterval()
    cleargif()
    audio.play();
})


function finale(){
    video.src=this.getAttribute("data-video-url");
    video.play();
    clearnorm()
}

aliens.forEach((ele)=>{
    ele.addEventListener("click",finale);
})

function clearnorm(){
    norm.src="";
}
linked.addEventListener("click",()=>window.open("https://www.linkedin.com/in/praveenkumarpanchadarla/"));
gitted.addEventListener("click",()=>window.open("https://github.com/PraveenKumarPanchadarla"));