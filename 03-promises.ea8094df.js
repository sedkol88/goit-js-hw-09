function e(e,t){return new Promise(((o,n)=>{const r=Math.random()>.3;setTimeout((()=>{const l={position:e,delay:t};r?o(l):n(l)}),t)}))}document.querySelector(".form").addEventListener("submit",(function(t){t.preventDefault();const o=document.querySelector('[name="delay"]'),n=document.querySelector('[name="step"]'),r=document.querySelector('[name="amount"]'),l=parseInt(o.value),s=parseInt(n.value),a=parseInt(r.value);for(let t=0;t<a;t+=1){e(t+1,l+t*s).then((({position:e,delay:t})=>{console.log(`✅ Fulfilled promise ${e} in ${t}ms`)})).catch((({position:e,delay:t})=>{console.log(`❌ Rejected promise ${e} in ${t}ms`)}))}}));
//# sourceMappingURL=03-promises.ea8094df.js.map