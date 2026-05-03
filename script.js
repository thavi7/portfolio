
gsap.registerPlugin(ScrollTrigger);

const music = document.getElementById("bgMusic");
const btn = document.getElementById("playMusic");

btn.addEventListener("click", () => {
  music.play();
  btn.style.display='none'
});




function activenav(){ 
  const sections = document.querySelectorAll(".home, .about, .skills, .contact");
  const navLinks = document.querySelectorAll(".navbar nav a");

  window.addEventListener("scroll", () => {
    let current = "";

    sections.forEach((section) => {
      const rect = section.getBoundingClientRect();
      const sectionMiddle = rect.top + rect.height / 2;

      if (sectionMiddle >= 0 && sectionMiddle <= window.innerHeight) {
        current = section.getAttribute("id");
      }
    });

    navLinks.forEach((a) => {
      a.classList.remove("active");
      if (a.getAttribute("href") === `#${current}`) {
        a.classList.add("active");
      }
    });
  });
}
activenav();


  function handleSubmit() {

  const name = document.getElementById("name").value.trim();
  const email = document.getElementById("email").value.trim();
  const message = document.getElementById("message").value.trim();
const hui=document.querySelector('#hui')

  console.log("Name:", name);
  console.log("Email:", email);
  console.log("Message:", message);

  hui.addEventListener('click',()=>{
    alert(`Thanks for reaching out, ${name}! I’ll get back to you soon.`);
  })

  // Clear the inputs
  document.getElementById("name").value = "";
  document.getElementById("email").value = "";
  document.getElementById("message").value = "";
}
 handleSubmit()

function NavAnimation(){
  const tlnav=gsap.timeline()
gsap.from('#tit',{
  x:'-100%',
  opacity:0,
  duration:0.5,
})
gsap.from('.theme',{
  x:'200%',
  opacity:0,
  duration:1,
})
gsap.from('#playMusic',{
  x:'100%',
  y:'-100%',
  opacity:0,
  duration:1,
})
tlnav.from('.navbar nav a',{
 y:'-200%',
 opacity:0,
  duration:0.5,
  stagger:0.2,
})

}
NavAnimation()
function lefthome(){
 const tltitle=gsap.timeline()

 tltitle.from('.dev',{
  y:'-100%',
    opacity:0,
    duration:0.8,
    delay:0.5,

})
 tltitle.from('#im',{
  x:'-100%',
    opacity:0,
    duration:0.4,

})

tltitle.from('.yp',{
   scale:0.9,
    opacity:0,
    duration:0.6,

})
tltitle.fromTo(
  '.title button',
  { opacity: 0 ,
    scale:0.8
  },
  {
    scale:1,
    opacity: 1,
    duration: 0.4,
    ease: "power2.out"
  },
);
 tltitle.from('.marque',{
  y:'80%',
    opacity:0,
    duration:0.2,
})
}
lefthome()
 function righthome(){
gsap.from('.photo',{
  opacity:0,
  duration:1,
  delay:0.6
})
 }
 righthome()
 
function movingpointer() {
  const tl = gsap.timeline({
    repeat: -1,
    defaults: { ease: "none", duration: 3 },
  });

  tl.to(".marque", { xPercent: -100 });

  // start safely
  tl.progress(0.5).timeScale(1);

  window.addEventListener(
    "wheel",
    (e) => {
      if (Math.abs(e.deltaY) < 5) return;

      const direction = e.deltaY > 0 ? 1 : -1;

      // nudge playhead away from edges (prevents freeze)
      if (direction === -1 && tl.progress() <= 0.01) {
        tl.progress(0.99);
      }
      if (direction === 1 && tl.progress() >= 0.99) {
        tl.progress(0.01);
      }

      gsap.to(tl, {
        timeScale: direction,
        duration: 0.2,
        overwrite: true
      });

      gsap.to(".marque img", {
        rotate: direction === 1 ? 0 : 180,
        duration: 0.3,
        overwrite: true
      });
    },
    { passive: true }
  );
}

movingpointer();




function scrollpara(){
 const yp=document.querySelector('.home .yp')
const splittedp=yp.textContent.split(' ')
let clutter=''
console.log(splittedp);
splittedp.forEach(function(elem){
        clutter+=  ` <span class='b'>${elem}</span>`   
})
 yp.innerHTML=clutter 

let mm = gsap.matchMedia();

/* DESKTOP */
mm.add("(min-width: 1000px)", () => {
  gsap.to(".home .yp .b", {
    color: "rgb(185, 6, 245)",
    scale: 1,
    stagger: 0.15,
    scrollTrigger: {
      trigger: ".home",
      start: "top top",
      end: "bottom 40%",
      scrub: 1,
      pin: true,
      anticipatePin: 1,
    }
  });
});

/* MOBILE */
mm.add("(max-width: 999px)", () => {
  gsap.to(".home .yp .b", {
    color: "rgb(185, 6, 245)",
    scale: 1,
    stagger: 0.08,
    duration: 0.4,
    scrollTrigger: {
      trigger: ".yp .b",
      start: "top 80%",
      end: "top 60%",
      scrub: true,
      pin: false,
    }
  });
});

}
scrollpara()

function scrollabout(){
 const yp=document.querySelector('.atop p')
const splittedp = yp.innerHTML.split(' ')
let clutter=''
console.log(splittedp);
splittedp.forEach(function(elem){
        clutter+=  ` <span class='b'>${elem}</span>`   
})
 yp.innerHTML=clutter 

let mm = gsap.matchMedia();

/* DESKTOP */
mm.add("(min-width: 1000px)", () => {
  gsap.to(".atop p .b", {
    color: "#00FF41",
    stagger: 1,
    duration:0.4,
    scrollTrigger: {
      trigger: ".about",
      start: "top top",
      end: "bottom 60%",
      scrub: true,
      pin: true,
    }
  });
});

/* MOBILE */
mm.add("(max-width: 999px)", () => {
  gsap.to(".atop p .b", {
    color: "#00FF41",
    stagger: 0.4,
    duration: 0.4,
    scrollTrigger: {
      trigger: ".about p .b",
      start: "top 80%",
      end: "top 35%",
      scrub: 1,
      pin: false,   // 👈 explicitly disabled
    }
  });
});

}
scrollabout()

gsap.from('.abh',{
  y:'60%',
  opacity:0,

  scrollTrigger:{
        trigger:'.about',
        scroller:'body',
        start:'top 80%',
        end:'top 40%',
        scrub:1,
        once:true,
      }
  
})

function atopanime(){
const tlwho=gsap.timeline()

tlwho.from('.apic',{
  x:'-100%',
  opacity:0,
  scrollTrigger:{
        trigger:'.apic',
        scroller:'body',
        start:'top 50%',
        end:'top 40%',
        scrub:1,
        
      }
})
tlwho.from('.ahead h1',{
  opacity:0,
  scrollTrigger:{
        trigger:'.apic',
        scroller:'body',
        start:'top 50%',
        end:'top 0%',
        scrub:1,
        
      }
})
tlwho.from('.ahead p',{
  x:'40%',
  opacity:0,
  scrollTrigger:{
        trigger:'.apic',
        scroller:'body',
        start:'top 50%',
        end:'top 40%',
        scrub:1,
      
      }
})
}
atopanime()

function abotanime(){
 let mm = gsap.matchMedia();

/* ================= DESKTOP ================= */
mm.add("(min-width: 1000px)", () => {

  let tlwho = gsap.timeline();

  tlwho.from(".bpic", {
    x: "100%",
    opacity: 0,
    scrollTrigger: {
      trigger: ".bpic",
      start: "top -15%",
      end: "top -65%",
      scrub:1,
    }
  });

  tlwho.from(".bhead h1", {
    opacity: 0,
    scrollTrigger: {
      trigger: ".bhead h1",
      start: "top -65%",
      end: "top -80%",
      scrub:1,
    }
  });

  tlwho.from(".bhead .padd", {
    y: "100%",
    opacity: 0,
    scrollTrigger: {
      trigger: ".bpic",
      start: "top -65%",
      end: "top -80%",
      scrub:1,
    }
  });

});


/* ================= MOBILE ================= */
mm.add("(max-width: 999px)", () => {

  gsap.from(".bpic", {
    y: 40,
    opacity: 0,
    duration: 0.6,
    ease: "power2.out",
    scrollTrigger: {
      trigger: ".bpic",
      start: "top 70%",
      end: "top 60%",
      scrub:1,
    }
  });

  gsap.from(".bhead h1", {
    y: 20,
    opacity: 0,
    duration: 0.4,
    ease: "power2.out",
    scrollTrigger: {
      trigger: ".bhead h1",
      start: "top 70%",
      end: "top 60%",
       scrub:1,
    }
  });

  gsap.from(".bhead .padd", {
    y: 30,
    opacity: 0,
    duration: 0.5,
    ease: "power2.out",
    scrollTrigger: {
      trigger: ".bhead .padd",
      start: "top 70%",
      end: "top 60%", 
       scrub:1,
    }
  });

});
}
abotanime()

function skillsanime(){
  gsap.from('.trace h1',{
  opacity:0,
  scrollTrigger:{
        trigger:' .trace',
        scroller:'body',
        start:'top 70% ',
        end:'top 30%',
      }
})

gsap.from('.myskills h1',{
  opacity:0,

  scrollTrigger:{
        trigger:' .myskills',
        scroller:'body',
        start:'top 70% ',
        end:'top 30%',
        
       
      }
})

  gsap.from('.box',{
    opacity: 0,
    y:'100%',
    scrollTrigger: {
      trigger: '.box',        
      start: `top 100%`,
      end: `top 80%`,
      scrub: 1,
      scroller:'body',
      
    }
  },'avi');



  gsap.from('.sbox',{
    opacity: 0,
    scale: 0.5,
    scrollTrigger: {
      trigger: '.allskills',        
      start: `top 100%`,
      end: `top 80%`,
      scrub: 1,
      scroller:'body',
      
    }
  },'avi');



}
skillsanime()

gsap.to(".gl", {
  opacity:0,
  duration: 0.4,
  repeat: -1,
  yoyo: true,
  ease: "power1.inOut"
});

  function contactanime(){
    gsap.from('.contact h1',{
  opacity:0,
  
  scrollTrigger:{
        trigger:' .contact',
        scroller:'body',
        start:'top 70% ',
        end:'top 50%',
      }
})
gsap.from('.social h2',{
      opacity:0,
    x:'-70%',
  scrollTrigger:{
        trigger:' .social',
        scroller:'body',
        start:'top 80% ',
        end:'top 60%',
        //markers:true,
        scrub:1,
      }
})
gsap.from('.social p',{
      opacity:0,
    scale:0.9,
  scrollTrigger:{
        trigger:' .social h2',
        scroller:'body',
        start:'top 60% ',
        end:'top 40%',
        //markers:true,
        scrub:1,
      }
})

gsap.from('.social .fa-square-instagram',{
      opacity:0,
    scale:0.8,
    duration:0.1,
  scrollTrigger:{
        trigger:' .social p',
        scroller:'body',
        start:'top 60% ',
        end:'top 55%',
        scrub:1,
      }
})
gsap.from('.social .fa-linkedin',{
      opacity:0,
    scale:0.8,
    duration:0.1,
  scrollTrigger:{
        trigger:' .social p',
        scroller:'body',
        start:'top 60% ',
        end:'top 55%',
        scrub:1,
      }
})
gsap.from('.social .fa-square-x-twitter',{
      opacity:0,
    scale:0.8,
    duration:0.1,
  scrollTrigger:{
        trigger:' .social p',
        scroller:'body',
        start:'top 60% ',
        end:'top 55%',
        scrub:1,
      }
})
gsap.from('.fill',{
      opacity:0,
  scrollTrigger:{
        trigger:' .contact .fill',
        scroller:'body',
        start:'top 60% ',
        end:'top 40%',
        scrub:1,
      }
})
  }
  contactanime()

function cursor(){
  let skills=document.querySelector('.skills')
let cursor=document.querySelector('.cursor')
let sbox=document.querySelectorAll('.sbox')
skills.addEventListener('mousemove',(e)=>{
    gsap.to(cursor,{
      opacity:1,
        x:e.x,
        y:e.y,
        duration:1,
        // ease: "back.out",
    })
})

sbox.forEach((box) => {

  box.addEventListener('mouseenter', () => {
    gsap.killTweensOf(cursor); 
    gsap.to(cursor, {
      scale: 4,
      duration: 0.3,
      ease: "power3.out"
    });
    cursor.innerHTML = 'View Project';
  });

  box.addEventListener('mouseleave', () => {
    gsap.killTweensOf(cursor); 
    gsap.to(cursor, {
      scale: 1,
      duration: 0.7,
      ease: "power3.out"
    });
    cursor.innerHTML = '';
  });

});

skills.addEventListener('mouseleave',()=>{
gsap.killTweensOf(cursor); 
  gsap.to(cursor,{
      opacity:0,
        duration:0.5,
    })
})

}
cursor();

  const toggle = document.getElementById("themeToggle");

  toggle.addEventListener("click", () => {
    document.body.classList.toggle("dark");
  });


