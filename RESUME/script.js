/* SCROLL REVEAL */
const obs=new IntersectionObserver(e=>{
  e.forEach(x=>x.target.classList.toggle("show",x.isIntersecting));
},{threshold:.25});
document.querySelectorAll(".reveal").forEach(el=>obs.observe(el));


/* SCATTER NAME */
const words=["LADY QUEENIE","CENTENO"];
let i=0;
const wrap=document.getElementById("scatterName");
const inner=wrap.querySelector(".big-name-inner");


function draw(w){
  inner.innerHTML="";
  [...w].forEach(c=>{
    const s=document.createElement("span");
    s.textContent=c;
    inner.appendChild(s);
  });
}
draw(words[i]);


wrap.onclick=e=>{
  const r=inner.getBoundingClientRect();
  const cx=e.clientX-r.left;
  const cy=e.clientY-r.top;
  [...inner.children].forEach(s=>{
    const sr=s.getBoundingClientRect();
    const x=sr.left-r.left+sr.width/2;
    const y=sr.top-r.top+sr.height/2;
    s.style.transform=`translate(${(x-cx)*1.4}px,${(y-cy)*1.4}px) rotate(${(Math.random()-.5)*30}deg)`;
    s.style.opacity=.3;
  });
  setTimeout(()=>draw(words[i=(i+1)%2]),1200);
};

