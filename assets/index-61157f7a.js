(function(){const c=document.createElement("link").relList;if(c&&c.supports&&c.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))s(e);new MutationObserver(e=>{for(const t of e)if(t.type==="childList")for(const a of t.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&s(a)}).observe(document,{childList:!0,subtree:!0});function r(e){const t={};return e.integrity&&(t.integrity=e.integrity),e.referrerPolicy&&(t.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?t.credentials="include":e.crossOrigin==="anonymous"?t.credentials="omit":t.credentials="same-origin",t}function s(e){if(e.ep)return;e.ep=!0;const t=r(e);fetch(e.href,t)}})();matchMedia("(prefers-color-scheme: dark)").matches?document.documentElement.classList.add("dark"):document.documentElement.classList.add("light");i();document.addEventListener("click",o=>{if(o.target.matches(".works__img")){const r=document.querySelector(".modal"),s=document.querySelector(".modal__img"),e=o.target.src;s.src=e,r.classList.add("modal--active")}if((o.target.matches(".modal")||o.target.matches(".modal__close")||o.target.matches(".modal__span"))&&document.querySelector(".modal").classList.remove("modal--active"),o.target.matches(".theme__circle")){const r=document.documentElement;o.target.classList.toggle("theme__circle--right"),r.matches(".dark")?(r.classList.remove("dark"),r.classList.add("light")):r.matches(".light")&&(r.classList.remove("light"),r.classList.add("dark"))}});function i(){const o=document.querySelectorAll(".works__article"),c=new IntersectionObserver(r,{threshold:.25});o.forEach(s=>c.observe(s));function r(s,e){s.forEach(t=>{t.target.classList.toggle("works__article--active",t.isIntersecting)})}}
