document.querySelectorAll('nav ul li a').forEach(anchor=>{
  anchor.addEventListener('click',function(e){
    e.preventDefault();
    document.querySelector(this.getAttribute('href')).scrollIntoView({behavior:'smooth'});
  });
});

// Animate on Scroll
const animateElements=document.querySelectorAll('.animate,.animate-slide');
function checkVisibility(){
  const triggerBottom=window.innerHeight*0.85;
  animateElements.forEach(el=>{
    const top=el.getBoundingClientRect().top;
    if(top<triggerBottom) el.classList.add('visible');
  });
}
window.addEventListener('scroll',checkVisibility);
window.addEventListener('load',checkVisibility);

// Form Alert
document.querySelector('form').addEventListener('submit',function(e){
  e.preventDefault();
  alert('Thank you! Your message has been sent.');
});

// Particle Animation for Hero
const canvas=document.getElementById('particles');
const ctx=canvas.getContext('2d');
let width=canvas.width=window.innerWidth;
let height=canvas.height=window.innerHeight;

window.addEventListener('resize',()=>{
  width=canvas.width=window.innerWidth;
  height=canvas.height=window.innerHeight;
});

const particlesArray=[];
const colors=['#fff','#ff6b6b','#667eea'];

class Particle{
  constructor(){
    this.x=Math.random()*width;
    this.y=Math.random()*height;
    this.size=Math.random()*2+1;
    this.speedX=Math.random()*1-0.5;
    this.speedY=Math.random()*1-0.5;
    this.color=colors[Math.floor(Math.random()*colors.length)];
  }
  update(){
    this.x+=this.speedX;
    this.y+=this.speedY;
    if(this.x<0||this.x>width)this.speedX*=-1;
    if(this.y<0||this.y>height)this.speedY*=-1;
  }
  draw(){
    ctx.fillStyle=this.color;
    ctx.beginPath();
    ctx.arc(this.x,this.y,this.size,0,Math.PI*2);
    ctx.fill();
  }
}

function initParticles(){
  particlesArray.length=0;
  for(let i=0;i<150;i++){
    particlesArray.push(new Particle());
  }
}
initParticles();

function animateParticles(){
  ctx.clearRect(0,0,width,height);
  particlesArray.forEach(p=>{
    p.update();
    p.draw();
  });
  requestAnimationFrame(animateParticles);
}
animateParticles();
