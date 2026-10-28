(()=>{
const fix=()=>{
 document.querySelectorAll('svg').forEach(s=>{if(s.querySelector('use[href="#penny"],use[href="#postman"],use[href="#mailman"],use[href="#carrier"]'))s.remove()});
 document.querySelectorAll('.pipbtn').forEach(n=>n.remove());
 document.querySelectorAll('.who .lbl').forEach(n=>{if(/penny|මහින්ද|postman|mailman/i.test(n.textContent||''))n.textContent='ප්‍රශ්නය / QUESTION'});
 // remove character-only panels, but not questions or explanatory text
 document.querySelectorAll('img').forEach(i=>{const marker=[i.alt,i.src,i.className].join(' ');if(/postman|mailman|penny|postal.character/i.test(marker))i.remove()});
};
fix();const observer=new MutationObserver(()=>{observer.disconnect();fix();observer.observe(document.body,{subtree:true,childList:true})});observer.observe(document.body,{subtree:true,childList:true});
})();