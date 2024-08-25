import{a as b,S as L,i as f}from"./assets/vendor-dfaf2a6e.js";(function(){const a=document.createElement("link").relList;if(a&&a.supports&&a.supports("modulepreload"))return;for(const t of document.querySelectorAll('link[rel="modulepreload"]'))s(t);new MutationObserver(t=>{for(const o of t)if(o.type==="childList")for(const i of o.addedNodes)i.tagName==="LINK"&&i.rel==="modulepreload"&&s(i)}).observe(document,{childList:!0,subtree:!0});function n(t){const o={};return t.integrity&&(o.integrity=t.integrity),t.referrerPolicy&&(o.referrerPolicy=t.referrerPolicy),t.crossOrigin==="use-credentials"?o.credentials="include":t.crossOrigin==="anonymous"?o.credentials="omit":o.credentials="same-origin",o}function s(t){if(t.ep)return;t.ep=!0;const o=n(t);fetch(t.href,o)}})();async function m(e=1,a,n){const s="42027897-ca60981f5971518ff8fefcb8b",t="https://pixabay.com/api/",o=new URLSearchParams({key:s,q:`${a}`,image_type:"photo",orientation:"horizontal",safesearcg:!0,page:e,per_page:`${n}`});return(await b.get(`${t}?${o}`)).data}function h(e){return e.map(({webformatURL:a,largeImageURL:n,tags:s,likes:t,views:o,comments:i,downloads:p})=>`<li class="photo-card">
  <a class="gallery__link" href="${n}">
  <img src="${a}" alt="${s}" class="gallery__image" width="300" height="200" loading="lazy"/></a>
  <div class="info">
    <p class="info-item">
      <b>Likes ${t}</b>
    </p>
    <p class="info-item">
      <b>Views ${o}</b>
    </p>
    <p class="info-item">
      <b>Comments ${i}</b>
    </p>
    <p class="info-item">
      <b>Downloads ${p}</b>
    </p>
  </div>
</li>`).join("")}const r={form:document.querySelector("#search-form"),gallery:document.querySelector(".gallery"),loader:document.querySelector(".loader"),loadButton:document.querySelector("#load-more-button")};r.form.addEventListener("submit",$);r.loadButton.addEventListener("click",w);const S=' <span class="css-loader"></span>';r.loader.insertAdjacentHTML("beforeend",S);r.loader.hidden=!0;r.loadButton.hidden=!0;let c=1,l="";const d=15;let g=new L(".gallery a",{captionsData:"alt",captionPosition:"bottom",captionDelay:250});async function $(e){e.preventDefault(),r.gallery.innerHTML="",c=1,r.loader.hidden=!1,r.loadButton.hidden=!0;const{searchQuery:a}=e.currentTarget.elements;if(l=a.value.trim().toLowerCase(),l===""){u("Sorry, but you must enter your search query. Please try again.");return}try{const{hits:n,totalHits:s}=await m(c,l,d);n.length<1&&y("Sorry, there are no images matching your search query. Please try again."),r.gallery.insertAdjacentHTML("beforeend",h(n)),g.refresh(),n.length<1||f.success({title:"Success",message:`We found ${s} images for you.`}),s>d&&(r.loadButton.hidden=!1),r.loader.hidden=!0,r.form.reset()}catch(n){u(n.message)}}async function w(){c+=1,r.loader.hidden=!1;try{const{hits:e}=await m(c,l,d);r.gallery.insertAdjacentHTML("beforeend",h(e)),g.refresh(),e.length<d&&(y("We're sorry, but you've reached the end of search results."),r.loadButton.hidden=!0,r.loader.hidden=!0),e.length>0&&P(),r.loader.hidden=!0}catch(e){u(e.message)}}function u(e=`${e.name}: ${e.message}`){r.loader.hidden=!0,r.form.reset(),f.error({title:"Error",message:`${e}`})}function y(e){f.warning({title:"Warning",message:`${e}`})}function P(){const{height:e}=document.querySelector(".gallery").firstElementChild.getBoundingClientRect();window.scrollBy({top:e*2,behavior:"smooth"})}
//# sourceMappingURL=commonHelpers.js.map
