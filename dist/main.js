(()=>{"use strict";var e={};(e=>{"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})})(e);const t=document.querySelector("img"),o=document.querySelector("button"),r=document.querySelector("form");let n="cats";const a=o=>{fetch(`https://api.giphy.com/v1/gifs/translate?api_key=${e.apiKey}=${o}`,{mode:"cors"}).then((e=>e.json())).then((e=>{console.log(e.data),t.src=e.data.images.original.url}))};o.addEventListener("click",(()=>a(n))),r.addEventListener("submit",(e=>{e.preventDefault(),n=r.elements.searchTerm.value,a(n),r.reset()})),a(n)})();