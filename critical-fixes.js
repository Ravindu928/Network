/* Postman removal and contrast repair; original lesson logic retained. */
(()=>{
 function clean(){
  // only remove character illustrations, never diagrams or interactive answers
  document.querySelectorAll('svg.pip, .narr > .pip, svg[aria-label*="mail carrier" i], svg[aria-label*="mailman" i], svg[aria-label*="postman" i]').forEach(el=>{el.style.setProperty('display','none','important');el.setAttribute('aria-hidden','true')});
  document.querySelectorAll('svg use[href="#penny"], svg use[href="#pip-art"], svg use[href="#carrier"]').forEach(u=>{const s=u.closest('svg');if(s){s.style.setProperty('display','none','important');s.setAttribute('aria-hidden','true')}});
  document.querySelectorAll('.narr').forEach(e=>{e.style.setProperty('display','block','important');const b=e.querySelector('.bubble');if(b){b.style.setProperty('background','#fff','important');b.style.setProperty('color','#263a2f','important')}});
  document.querySelectorAll('.carrier-btn,.penny-btn,.pipbtn,#carrierBtn,#pipBtn,#pennyBtn,#gBtn').forEach(el=>{el.style.setProperty('display','none','important');el.setAttribute('aria-hidden','true')});
  document.querySelectorAll('.bubble,.speech,.dialogue,.hook,.talk,.speechbox,.chat-bubble').forEach(el=>{el.style.setProperty('background-color','#fff','important');el.style.setProperty('color','#263a2f','important')});
 }
 let scheduled=false;
 const obs=new MutationObserver(()=>{if(scheduled)return;scheduled=true;requestAnimationFrame(()=>{scheduled=false;obs.disconnect();clean();obs.observe(document.documentElement,{childList:true,subtree:true})})});
 if(document.readyState==='loading')document.addEventListener('DOMContentLoaded',()=>{clean();obs.observe(document.documentElement,{childList:true,subtree:true})});else {clean();obs.observe(document.documentElement,{childList:true,subtree:true})}
})();
