(function(C,D,O) {
  O = D.createElement("div")
  O.className = "css"
  O.style.cssText = "position:absolute; z-index:-1; opacity:1; transition:1ms"
carouhell=function(u,f,o,n) {C(u)
  if((o=u.nextSibling) && o.className=="css"); else {
    u.parentNode.insertBefore(o=O.cloneNode(), u.nextSibling)
    setTimeout(_=>{
      if(f=carouhell.mediaCSS) o.ontransitionend = _=> f(u,getComputedStyle(o).opacity)
    })
  }
  setTimeout(_=>{
  s	if((f=carouhell.mediaCSS) && (n=getComputedStyle(u.nextSibling).opacity)!=2) f(u,n)
  })
}
})(carouhell, document);