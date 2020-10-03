(function(C) {C=carouhell
carouhell=function(u,S,a) {C(u)
  if(S=u.dataset.stripe) S=document.getElementById(S); else return;
  u.fst = u.children[0]
  a = "active"
  function fill() {
    S.innerHTML = ""
    Array.from(u.children).forEach(_ => S.appendChild(document.createElement("b")))
  }
  fill()
  S.children[0].className = a
  var length = u.children.length
  new MutationObserver(M=> {
    if(length!=u.children.length) {
      fill()
      length = u.children.length
    }
    if(!M.removedNodes) Array.from(u.children).forEach((li,i)=> {
      S.children[i].className = li==u.fst ? a : ""
    })
  }).observe(u,{childList:1})
}
})();