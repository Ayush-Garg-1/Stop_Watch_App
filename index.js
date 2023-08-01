const clock = document.getElementById("clock");
let m=0,s=0,ms=00;
let f =true,n=true;
ayush = ()=>{

if(n==true){ 

    if(ms<10) { ms="0"+ ms; }

    ms++; }

// else {s=0; m=0; h=0;}

if(ms>99)
{
    s++; ms-=100; 
}

else if(s>59) {m++; s-=60;}

clock.innerHTML = m+" : "+s+" : "+ms;
}                                                     
start = () =>{
n=true;
if(f) { clr = setInterval(ayush,9); }

f=false;
}
stop = () => {
f = true;
clearInterval(clr); 
}
reset = ()=>{
    // if(  confirm("you want to stop watch"))    {
        const boxborder = document.getElementById("box");
        boxborder.style.borderColor= "red";
        s=0; m=0; ms=0;
        clock.innerHTML =0+' : '+0+" : "+0;
        n=false;
        ayu = ()=>{
        boxborder.style.borderColor= " lightyellow";
        }
        setTimeout(ayu,500);
    // }
}