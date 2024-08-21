import{a as L,S,i as f}from"./assets/vendor-dfaf2a6e.js";(function(){const n=document.createElement("link").relList;if(n&&n.supports&&n.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))a(e);new MutationObserver(e=>{for(const o of e)if(o.type==="childList")for(const i of o.addedNodes)i.tagName==="LINK"&&i.rel==="modulepreload"&&a(i)}).observe(document,{childList:!0,subtree:!0});function s(e){const o={};return e.integrity&&(o.integrity=e.integrity),e.referrerPolicy&&(o.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?o.credentials="include":e.crossOrigin==="anonymous"?o.credentials="omit":o.credentials="same-origin",o}function a(e){if(e.ep)return;e.ep=!0;const o=s(e);fetch(e.href,o)}})();async function h(r=1,n,s){const a="42027897-ca60981f5971518ff8fefcb8b",e="https://pixabay.com/api/",o=new URLSearchParams({key:a,q:`${n}`,image_type:"photo",orientation:"horizontal",safesearcg:!0,page:r,per_page:`${s}`});return(await L.get(`${e}?${o}`)).data}function m(r){return r.map(({webformatURL:n,largeImageURL:s,tags:a,likes:e,views:o,comments:i,downloads:b})=>`<li class="photo-card">
  <a class="gallery__link" href="${s}">
  <img src="${n}" alt="${a}" class="gallery__image" width="300" height="200" loading="lazy"/></a>
  <div class="info">
    <p class="info-item">
      <b>Likes ${e}</b>
    </p>
    <p class="info-item">
      <b>Views ${o}</b>
    </p>
    <p class="info-item">
      <b>Comments ${i}</b>
    </p>
    <p class="info-item">
      <b>Downloads ${b}</b>
    </p>
  </div>
</li>`).join("")}const t={form:document.querySelector("#search-form"),gallery:document.querySelector(".gallery"),loader:document.querySelector(".loader"),loadButton:document.querySelector("#load-more-button")};t.form.addEventListener("submit",w);t.loadButton.addEventListener("click",P);const $=' <span class="css-loader"></span>';t.loader.insertAdjacentHTML("beforeend",$);t.loader.hidden=!0;t.loadButton.hidden=!0;let c=1,l="";const d=15;let g=new S(".gallery a",{captionsData:"alt",captionPosition:"bottom",captionDelay:250});function w(r){r.preventDefault(),t.gallery.innerHTML="",c=1,t.loader.hidden=!1;const{searchQuery:n}=r.currentTarget.elements;if(l=n.value.trim().toLowerCase(),l===""){u("Sorry, but you must enter your search query. Please try again."),t.loadButton.hidden=!0;return}h(c,l,d).then(s=>{const{hits:a,totalHits:e}=s;a.length<1&&p("Sorry, there are no images matching your search query. Please try again."),t.gallery.insertAdjacentHTML("beforeend",m(a)),g.refresh(),a.length<1||f.success({title:"Success",message:`We found ${e} images for you.`}),e>d&&(t.loadButton.hidden=!1),a.length>0&&y(),t.loader.hidden=!0,t.form.reset()}).catch(u)}function P(){c+=1,t.loader.hidden=!1,h(c,l,d).then(r=>{const{hits:n}=r;t.gallery.insertAdjacentHTML("beforeend",m(n)),g.refresh(),n.length<d&&(p("We're sorry, but you've reached the end of search results."),t.loadButton.hidden=!0,t.loader.hidden=!0),n.length>0&&y(),t.loader.hidden=!0}).catch(u)}function u(r=`${r.name}: ${r.message}`){t.loader.hidden=!0,t.form.reset(),f.error({title:"Error",message:`${r}`})}function p(r){f.warning({title:"Warning",message:`${r}`})}function y(){const{height:r}=document.querySelector(".gallery").firstElementChild.getBoundingClientRect();window.scrollBy({top:r*2,behavior:"smooth"})}
//# sourceMappingURL=commonHelpers.js.map
