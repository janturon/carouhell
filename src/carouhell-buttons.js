(function(C) {C=carouhell
carouhell=function(u,_) {C(u)
  const h=(i,f,n)=>document.getElementById(i).addEventListener("click",_=>f()||n||clearInterval(u.t))
  u.right = T=>{
    if(u.children.length<2)return;
    T = "transitionDuration"
    var li = u.lastElementChild
    li.style[T] = 0
    li.style.marginLeft = -li.offsetWidth+"px"
    u.insertBefore(li, u.children[0])
    setTimeout(_=>{li.style[T]=u.trans+"ms";li.style.marginLeft=0}, 50)
  }
  if(_=u.dataset.left) h(_,u.left)
  if(_=u.dataset.right) h(_,u.right)
  if(_=u.dataset.play) h(_,x=>{u.t=setInterval(u.left,u.dataset.autoplay||4000)},1)
  if(_=u.dataset.pause) h(_,_=>_)
}
})();