const t=document.querySelectorAll("button")[0],e=document.querySelectorAll("button")[1];let l=null;t.addEventListener("click",(()=>{start.disabled=!0,l=setInterval((()=>{document.body.style.backgroundColor=`#${Math.floor(16777215*Math.random()).toString(16)}`}),1e3)})),e.addEventListener("click",(()=>{start.disabled=!1,clearInterval(l)}));
//# sourceMappingURL=01-color-switcher.da35f434.js.map
