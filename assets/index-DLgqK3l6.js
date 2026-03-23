(function(){let e=document.createElement(`link`).relList;if(e&&e.supports&&e.supports(`modulepreload`))return;for(let e of document.querySelectorAll(`link[rel="modulepreload"]`))n(e);new MutationObserver(e=>{for(let t of e)if(t.type===`childList`)for(let e of t.addedNodes)e.tagName===`LINK`&&e.rel===`modulepreload`&&n(e)}).observe(document,{childList:!0,subtree:!0});function t(e){let t={};return e.integrity&&(t.integrity=e.integrity),e.referrerPolicy&&(t.referrerPolicy=e.referrerPolicy),e.crossOrigin===`use-credentials`?t.credentials=`include`:e.crossOrigin===`anonymous`?t.credentials=`omit`:t.credentials=`same-origin`,t}function n(e){if(e.ep)return;e.ep=!0;let n=t(e);fetch(e.href,n)}})();var e=`gist-writer-pat`;function t(){return localStorage.getItem(e)}function n(){return t()!==null}function r(t){localStorage.setItem(e,t)}function i(){localStorage.removeItem(e),window.dispatchEvent(new CustomEvent(`gist-writer:logout`))}async function a(e){try{return(await fetch(`https://api.github.com/user`,{headers:{Authorization:`Bearer ${e}`}})).ok}catch{return!1}}function o(e,t){let n=document.createElement(`div`);n.className=`login-screen`,n.innerHTML=`
    <div class="login-card">
      <h1 class="login-title">Gist Writer</h1>
      <p class="login-subtitle">A distraction-free writing app for your GitHub Gists.</p>
      <form class="login-form" autocomplete="off">
        <input
          type="password"
          class="login-input"
          placeholder="Paste your GitHub Personal Access Token"
          spellcheck="false"
          autocomplete="off"
        />
        <button type="submit" class="login-button">Sign in</button>
      </form>
      <p class="login-error" hidden></p>
      <a
        class="login-create-token"
        href="https://github.com/settings/tokens/new?scopes=gist&description=Gist+Writer"
        target="_blank"
        rel="noopener noreferrer"
      >Create a token on GitHub &rarr;</a>
    </div>
  `;let r=n.querySelector(`.login-form`),i=n.querySelector(`.login-input`),o=n.querySelector(`.login-button`),s=n.querySelector(`.login-error`);r.addEventListener(`submit`,async e=>{e.preventDefault();let n=i.value.trim();n&&(o.disabled=!0,o.textContent=`Validating…`,s.hidden=!0,await a(n)?t(n):(s.textContent=`Invalid token. Please check your token and try again.`,s.hidden=!1,o.disabled=!1,o.textContent=`Sign in`))}),e.appendChild(n),i.focus()}function s(e,t){let n=document.createElement(`div`);n.className=`app-canvas`;let r=document.createElement(`button`);r.className=`search-icon`,r.setAttribute(`aria-label`,`Menu`),r.innerHTML=`<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="11" cy="11" r="8"/><line x1="21" y1="21" x2="16.65" y2="16.65"/></svg>`;let i=document.createElement(`div`);i.className=`menu-overlay`,i.hidden=!0,i.innerHTML=`
    <button class="logout-button">Logout</button>
  `,i.querySelector(`.logout-button`).addEventListener(`click`,t),r.addEventListener(`click`,()=>{i.hidden=!i.hidden}),n.addEventListener(`click`,e=>{!i.contains(e.target)&&e.target!==r&&(i.hidden=!0)}),n.appendChild(r),n.appendChild(i),e.appendChild(n)}function c(){`serviceWorker`in navigator&&window.addEventListener(`load`,()=>{navigator.serviceWorker.register(`/sw.js`).catch(()=>{})})}function l(){let e=document.getElementById(`app`);e.innerHTML=``,n()?s(e,i):o(e,e=>{r(e),l()})}l(),c(),window.addEventListener(`gist-writer:logout`,l);