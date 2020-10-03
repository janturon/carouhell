function carouhell(u,_,d) {
  u.trans=parseFloat(getComputedStyle(u.children[0]).transitionDuration)*1e3
  u.left = _=>{
    if(u.children.length<2)return;
    var li = u.children[0]
    li.style.marginLeft=-li.offsetWidth+"px"
    setTimeout(_=>{u.appendChild(li);li.style.marginLeft=0},u.trans)
  }
  if(_=u.dataset.autoplay) u.t=setInterval(u.left,_)
}
(d=document).addEventListener("DOMContentLoaded",_=>{
Array.from(d.getElementsByClassName("carouhell")).forEach(carouhell)
new MutationObserver(ms=>ms.forEach(m=>
m.addedNodes.forEach(n=>{if((_=n.classList) && _.contains("carouhell"))carouhell(n)})
)).observe(d.body,{subtree:1,childList:1})
});