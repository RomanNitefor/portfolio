(function(){const r=document.createElement("link").relList;if(r&&r.supports&&r.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))n(e);new MutationObserver(e=>{for(const t of e)if(t.type==="childList")for(const s of t.addedNodes)s.tagName==="LINK"&&s.rel==="modulepreload"&&n(s)}).observe(document,{childList:!0,subtree:!0});function c(e){const t={};return e.integrity&&(t.integrity=e.integrity),e.referrerPolicy&&(t.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?t.credentials="include":e.crossOrigin==="anonymous"?t.credentials="omit":t.credentials="same-origin",t}function n(e){if(e.ep)return;e.ep=!0;const t=c(e);fetch(e.href,t)}})();const d=document.getElementById("mode-switcher"),i=o=>{o.preventDefault(),document.body.classList.toggle("dark");const r=document.body.classList.contains("dark")?"dark":"light";localStorage.setItem("color-mode",r)},l=()=>{var o=document.querySelector(".loader-overlay");o&&o.classList.add("is-hidden")};d.addEventListener("change",i);document.addEventListener("DOMContentLoaded",l);
//# sourceMappingURL=commonHelpers.js.map