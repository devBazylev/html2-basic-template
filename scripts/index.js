var b=document.querySelector(".header__navigation"),k=document.querySelector(".header__toggle"),C=()=>{b.classList.toggle("header__navigation--closed"),b.classList.toggle("header__navigation--opened")},E=()=>{k.addEventListener("click",C)};function y(){let t=document.getElementById("slider");if(t){noUiSlider.create(t,{start:[0,900],connect:!0,step:10,range:{min:[0],max:[972]}});let d=document.getElementById("input-0"),x=document.getElementById("input-1"),_=[d,x];t.noUiSlider.on("update",(o,r)=>{_[r].value=Math.round(o[r])});let q=(o,r)=>{let c=[null,null];c[o]=r,t.noUiSlider.set(c)};_.forEach((o,r)=>{o.addEventListener("change",c=>{q(r,c.currentTarget.value)})})}}var l=document.querySelector(".slider__image"),A=Array.from(document.querySelectorAll(".slider__source")),v=document.querySelectorAll(".slider-input"),s=document.querySelector(".slider-button-prev"),a=document.querySelector(".slider-button-next"),P=document.querySelector(".hero"),B=document.querySelector(".hero__title"),L=document.querySelector(".hero__text"),I=document.querySelector(".hero__price-old"),D=document.querySelector(".hero__price"),n=[{title:"\u0414\u0435\u043A\u0430\u0444 \u0424\u043B\u044D\u0442 \u0423\u0430\u0439\u0442",paragraph:"\u0421\u0432\u0435\u0436\u0435\u0441\u0432\u0430\u0440\u0435\u043D\u043D\u044B\u0439 \u043A\u043E\u0444\u0435 \u0431\u0435\u0437 \u043A\u043E\u0444\u0435\u0438\u043D\u0430 \u0438\u0437 \u042D\u0444\u0438\u043E\u043F\u0438\u0438 \u0441 \u043D\u0430\u0442\u0443\u0440\u0430\u043B\u044C\u043D\u044B\u043C \u0444\u0435\u0440\u043C\u0435\u0440\u0441\u043A\u0438\u043C \u043C\u043E\u043B\u043E\u043A\u043E\u043C \u2014 \u0442\u043E, \u0447\u0442\u043E \u043D\u0443\u0436\u043D\u043E \u0434\u043B\u044F \u0440\u0430\u0441\u0441\u043B\u0430\u0431\u043B\u0435\u043D\u0438\u044F \u043F\u043E\u0441\u043B\u0435 \u0442\u044F\u0436\u0451\u043B\u043E\u0433\u043E \u0440\u0430\u0431\u043E\u0447\u0435\u0433\u043E \u0434\u043D\u044F",oldPrice:"295\u20BD",price:"225\u20BD",backgroundColor:"#F3EBE1"},{title:"\u041B\u0430\u0432\u0430\u043D\u0434\u043E\u0432\u044B\u0439 \u041B\u0430\u0442\u0442\u0435",paragraph:"\u041D\u0435\u0432\u0435\u0440\u043E\u044F\u0442\u043D\u043E\u0435 \u0441\u043E\u0447\u0435\u0442\u0430\u043D\u0438\u0435 \u043F\u0435\u0440\u0443\u0430\u043D\u0441\u043A\u043E\u0439 \u0432\u044B\u0441\u043E\u043A\u043E\u0433\u043E\u0440\u043D\u043E\u0439 \u0430\u0440\u0430\u0431\u0438\u043A\u0438 \u0441 \u043C\u043E\u043B\u043E\u043A\u043E\u043C \u043B\u0430\u043C\u044B \u0438 \u043B\u0430\u0432\u0430\u043D\u0434\u043E\u0432\u044B\u043C \u0441\u0438\u0440\u043E\u043F\u043E\u043C \u0443\u043D\u0435\u0441\u0451\u0442 \u0432\u0430\u0441 \u043F\u0440\u044F\u043C\u043E \u043D\u0430 \u0432\u0435\u0440\u0448\u0438\u043D\u0443 \u0420\u0430\u0434\u0443\u0436\u043D\u044B\u0445 \u0433\u043E\u0440",oldPrice:"285\u20BD",price:"265\u20BD",backgroundColor:"#EAE6FC"},{title:"\u0422\u0440\u043E\u0439\u043D\u043E\u0439 \u042D\u0441\u043F\u0440\u0435\u0441\u0441\u043E",paragraph:"\u041C\u043E\u0449\u043D\u0435\u0435 \u0443\u043A\u043E\u043B\u0430 \u0430\u0434\u0440\u0435\u043D\u0430\u043B\u0438\u043D\u0430, \u0447\u0435\u0440\u043D\u0435\u0435 \u0441\u0430\u043C\u043E\u0439 \u0442\u0451\u043C\u043D\u043E\u0439 \u043D\u043E\u0447\u0438, \u044D\u0442\u043E\u0442 \u0442\u0440\u043E\u0439\u043D\u043E\u0439 \u044D\u0441\u043F\u0440\u0435\u0441\u0441\u043E \u0438\u0437 \u041A\u043E\u043B\u0443\u043C\u0431\u0438\u0438 \u043F\u043E\u043A\u0430\u0436\u0435\u0442 \u0432\u0430\u043C, \u0447\u0442\u043E \u0442\u0430\u043A\u043E\u0435 \u043D\u0430\u0441\u0442\u043E\u044F\u0449\u0430\u044F \u0431\u043E\u0434\u0440\u043E\u0441\u0442\u044C",oldPrice:"395\u20BD",price:"375\u20BD",backgroundColor:"#E5E6E8"}],e=0,u=l.src,g=l.srcset,p=()=>{B.textContent=n[e].title,L.textContent=n[e].paragraph,I.textContent=n[e].oldPrice,D.textContent=n[e].price,P.style.background=n[e].backgroundColor},m=()=>{u=u.replace(/slide-[0-2]/,`slide-${e}`),g=g.replace(/slide-[0-2]/,`slide-${e}`),l.setAttribute("src",u),l.setAttribute("srcset",g),A.forEach(t=>{let d=t.srcset.replace(/slide-[0-2]/g,`slide-${e}`);t.setAttribute("srcset",d)})},S=t=>{t.setAttribute("disabled","")},i=t=>{t.removeAttribute("disabled","")},f=()=>{v[e].checked=!0},h=()=>{e===0&&(i(a),S(s)),e===1&&(i(s),i(a)),e===2&&(i(s),S(a))},M=function(){e=+this.id,m(),h(),p()},U=()=>{e>=1&&e<=2&&(e--,m(),f(),p()),h()},$=()=>{e>=0&&e<=1&&(e++,m(),f(),p()),h()};s.addEventListener("click",U);a.addEventListener("click",$);v.forEach(t=>{t.addEventListener("change",M)});E();y();