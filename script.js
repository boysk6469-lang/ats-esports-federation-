/* ======================================
   ATS ESPORTS FEDERATION V3
   SCRIPT.JS
====================================== */

const menuBtn = document.getElementById("menuBtn");
const navMenu = document.getElementById("navMenu");

/* Mobile Menu */

menuBtn.onclick = () => {

    if(navMenu.style.display === "flex"){

        navMenu.style.display = "none";

    }else{

        navMenu.style.display = "flex";
        navMenu.style.flexDirection = "column";
        navMenu.style.position = "absolute";
        navMenu.style.top = "80px";
        navMenu.style.left = "5%";
        navMenu.style.width = "90%";
        navMenu.style.padding = "20px";
        navMenu.style.borderRadius = "18px";
        navMenu.style.background = "#081224";
        navMenu.style.gap = "20px";
        navMenu.style.textAlign = "center";

    }

};

/* Navbar Scroll */

const navbar = document.querySelector(".navbar");

window.addEventListener("scroll",()=>{

    if(window.scrollY>40){

        navbar.style.background="rgba(3,8,20,.95)";
        navbar.style.boxShadow="0 0 30px rgba(0,217,255,.35)";

    }else{

        navbar.style.background="rgba(5,8,22,.75)";
        navbar.style.boxShadow="none";

    }

});

/* Scroll Reveal */

const observer=new IntersectionObserver(entries=>{

entries.forEach(entry=>{

if(entry.isIntersecting){

entry.target.classList.add("show");

}

});

},{threshold:.15});

document.querySelectorAll(
".feature-card,.event-card,.stat-card,.hall-card,.sponsor-card,.leaderboard-table,.hero-card"
).forEach(el=>{

el.classList.add("hidden");

observer.observe(el);

});

/* Hero Floating */

const heroCard=document.querySelector(".hero-card");

let value=0;

setInterval(()=>{

value+=0.03;

heroCard.style.transform=

`translateY(${Math.sin(value)*10}px)`;

},30);

/* Mouse Glow */

const leftGlow=document.querySelector(".glow-left");

const rightGlow=document.querySelector(".glow-right");

document.addEventListener("mousemove",(e)=>{

leftGlow.style.left=(e.clientX/18-120)+"px";

leftGlow.style.top=(e.clientY/18-120)+"px";

rightGlow.style.right=((window.innerWidth-e.clientX)/18-120)+"px";

rightGlow.style.bottom=((window.innerHeight-e.clientY)/18-120)+"px";

});

/* Button Hover */

document.querySelectorAll("a").forEach(btn=>{

btn.addEventListener("mouseenter",()=>{

btn.style.transform="translateY(-4px)";

});

btn.addEventListener("mouseleave",()=>{

btn.style.transform="translateY(0px)";

});

});

/* Reveal CSS */

const style=document.createElement("style");

style.innerHTML=`

.hidden{

opacity:0;

transform:translateY(60px);

transition:1s;

}

.show{

opacity:1;

transform:translateY(0);

}

`;

document.head.appendChild(style);

console.log("ATS ESPORTS FEDERATION V3 Loaded Successfully");
