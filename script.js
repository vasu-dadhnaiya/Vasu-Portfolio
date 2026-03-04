/* NAV */
const nb=document.getElementById('nb');
window.addEventListener('scroll',()=>{
  nb.classList.toggle('scrolled',scrollY>60);
  const secs=document.querySelectorAll('section[id]');
  const links=document.querySelectorAll('.nav-links a:not(.btn-nav-dl)');
  let cur2='';
  secs.forEach(s=>{if(scrollY>=s.offsetTop-140)cur2=s.id;});
  links.forEach(a=>a.classList.toggle('active',a.getAttribute('href')==='#'+cur2));
});

/* MOBILE MENU */
function tm(){const h=document.getElementById('hbg'),n=document.getElementById('mobNav');h.classList.toggle('o');n.classList.toggle('o');document.body.style.overflow=n.classList.contains('o')?'hidden':'';}
function cm(){document.getElementById('hbg').classList.remove('o');document.getElementById('mobNav').classList.remove('o');document.body.style.overflow='';}

/* SCROLL REVEAL */
const obs=new IntersectionObserver(entries=>{entries.forEach(e=>{if(e.isIntersecting)e.target.classList.add('v');});},{threshold:.08,rootMargin:'0px 0px -40px 0px'});
document.querySelectorAll('.reveal,.rl,.rr').forEach(el=>obs.observe(el));

/* COUNTER */
const cobs=new IntersectionObserver(entries=>{
  entries.forEach(e=>{
    if(e.isIntersecting){
      document.querySelectorAll('.sval').forEach(el=>{
        const t=parseInt(el.dataset.target),s=el.dataset.suffix||'';
        let c=0;const step=t/40;
        const iv=setInterval(()=>{c=Math.min(c+step,t);el.textContent=Math.floor(c)+s;if(c>=t)clearInterval(iv);},40);
      });
      cobs.disconnect();
    }
  });
},{threshold:.5});
const hs=document.querySelector('.hero-stats');
if(hs)cobs.observe(hs);

/* DOWNLOAD CV */
function dlCV() {

  const link = document.createElement("a");
  link.href = "assets/Vasu_Resume.pdf";   // path to your PDF
  link.download = "Vasu_Resume.pdf";
  document.body.appendChild(link);
  link.click();
  document.body.removeChild(link);

  // Success feedback
  document.querySelectorAll('.btn-dl,.btn-nav-dl').forEach(btn=>{
    const orig = btn.innerHTML;
    const isDl = btn.classList.contains('btn-nav-dl');

    btn.innerHTML = isDl
      ? '<svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><polyline points="20 6 9 17 4 12"/></svg> Downloaded!'
      : '<div class="dl-icon" style="width:22px;height:22px;background:rgba(3,7,18,.2);border-radius:50%;display:flex;align-items:center;justify-content:center;">✓</div> Downloaded!';

    setTimeout(()=>{btn.innerHTML = orig;},2600);
  });

  // Success feedback
  document.querySelectorAll('.btn-dl,.btn-nav-dl').forEach(btn=>{
    const orig=btn.innerHTML;
    const isDl=btn.classList.contains('btn-nav-dl');
    btn.innerHTML=isDl
      ? '<svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><polyline points="20 6 9 17 4 12"/></svg> Downloaded!'
      : '<div class="dl-icon" style="width:22px;height:22px;background:rgba(3,7,18,.2);border-radius:50%;display:flex;align-items:center;justify-content:center;">✓</div> Downloaded!';
    setTimeout(()=>{btn.innerHTML=orig;},2600);
  });
}