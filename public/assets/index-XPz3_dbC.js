(function(){const n=document.createElement("link").relList;if(n&&n.supports&&n.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))s(e);new MutationObserver(e=>{for(const t of e)if(t.type==="childList")for(const i of t.addedNodes)i.tagName==="LINK"&&i.rel==="modulepreload"&&s(i)}).observe(document,{childList:!0,subtree:!0});function a(e){const t={};return e.integrity&&(t.integrity=e.integrity),e.referrerPolicy&&(t.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?t.credentials="include":e.crossOrigin==="anonymous"?t.credentials="omit":t.credentials="same-origin",t}function s(e){if(e.ep)return;e.ep=!0;const t=a(e);fetch(e.href,t)}})();const v="/assets/logo-title-aU5xli8i.webp";function f(l){const n=document.createElement("div"),a=document.createElement("div"),s=document.createElement("h2"),e=document.createElement("div"),t=document.createElement("button"),i=document.createElement("button"),o=document.createElement("img");return o.src=`${v}`,o.alt="logo Pets' Diaries",o.classList.add("logo"),n.className="home-div",a.className="header-div",e.className="content-div",s.textContent="¡Bienvenid@ a la red social para los amantes de los animales!",t.textContent="Ingresar",i.textContent="Registrarme",t.classList.add("homeBttn"),i.classList.add("homeBttn"),t.addEventListener("click",()=>l("/login")),i.addEventListener("click",()=>l("/signup")),e.appendChild(a),e.appendChild(t),e.appendChild(i),n.appendChild(o),a.appendChild(s),n.appendChild(e),n.appendChild(e),n}function I(l){const n=document.createElement("div"),a=document.createElement("div"),s=document.createElement("h1"),e=document.createElement("div"),t=document.createElement("input"),i=document.createElement("input"),o=document.createElement("button"),d=document.createElement("button"),c=document.createElement("img"),r=document.createElement("img"),m=document.createElement("li");return c.src=`${v}`,c.alt="logo Pets' Diaries",c.classList.add("logo"),t.classList.add("loginInputBox"),t.id="myEmailInput",t.placeholder="Ingresa tu Correo",i.classList.add("loginInputBox"),i.type="password",i.id="myPasswordInput",i.placeholder="Contraseña",i.minLength=6,i.required=!0,o.classList.add("loginBttn"),r.className="logoGoogle",d.classList.add("loginBttn"),m.classList.add("divTitleLogin"),n.className="home-div",a.className="header-div",e.className="content-login",s.textContent="Iniciar Sesión",o.textContent="Iniciar Sesión",d.textContent="Volver al inicio",d.addEventListener("click",()=>l("/")),o.addEventListener("click",()=>{}),r.addEventListener("click",()=>{}),n.appendChild(c),e.appendChild(s),e.appendChild(t),e.appendChild(i),e.appendChild(o),e.appendChild(r),e.appendChild(d),n.appendChild(e),n}function b(l){const n=document.createElement("div"),a=document.createElement("div"),s=document.createElement("h1"),e=document.createElement("h3"),t=document.createElement("div"),i=document.createElement("input"),o=document.createElement("input"),d=document.createElement("input"),c=document.createElement("input"),r=document.createElement("button"),m=document.createElement("button"),u=document.createElement("img"),p=document.createElement("li");return u.src=`${v}`,u.alt="logo Pets' Diaries",u.classList.add("logo"),i.classList.add("registerInputBox"),i.id="myNameInput",i.placeholder="Nombre",i.required=!0,o.classList.add("registerInputBox"),o.id="myEmailInput",o.placeholder="Email",o.required=!0,d.classList.add("registerInputBox"),d.type="password",d.id="myPasswordInput",d.placeholder="Ingresa tu contraseña (al menos6 caracteres)",d.minLength=6,d.required=!0,c.classList.add("registerInputBox"),c.type="password",c.id="myPasswordInput2",c.placeholder="Repetir contraseña",c.minLength=6,c.required=!0,r.id="registerbutton",m.id="home-button",m.classList.add("registerBttn"),p.classList.add("divTitleLogin"),n.className="home-div",a.className="header-div",t.className="content-register",r.classList.add("registerBttn"),s.textContent="Regístrate",e.textContent="O con tu cuenta de Google",r.textContent="Registrarme",m.textContent="Volver al inicio",m.addEventListener("click",()=>l("/")),r.addEventListener("click",h=>{h.preventDefault(),alert("la contraseña ingresada no coincide"),alert("la contraseña debe tener al menos 6 caracteres"),alert("la contraseña sí coincide pero el correo electrónico no es válido"),l("/feed")}),n.appendChild(u),t.appendChild(s),t.appendChild(i),t.appendChild(o),t.appendChild(d),t.appendChild(c),t.appendChild(r),t.appendChild(m),n.appendChild(t),n}function B(l){const n=document.createElement("div"),a=document.createElement("div"),s=document.createElement("div"),e=document.createElement("img"),t=document.createElement("button"),i=document.createElement("div"),o=document.createElement("span"),d=document.createElement("div"),c=document.createElement("div"),r=document.createElement("div"),m=document.createElement("div"),u=document.createElement("h4"),p=document.createElement("input"),h=document.createElement("button");return i.classList.add("divUserName"),d.classList.add("divSignOut"),e.src=`${v}`,e.alt="logo Pets' Diaries",e.classList.add("feed-logo"),e.classList.add("logo"),t.textContent="Cerrar sesión",t.classList.add("logoutButton"),p.classList.add("timelineInputBox"),p.id="myPostInput",p.placeholder="Escribe lo que quieras publicar",p.required=!0,p.autocomplete="off",m.id="posts-div",m.className="publicacionPost",h.id="publishbutton",h.textContent="Publicar",h.className="buttonToPost",u.textContent="Comparte tu historia",a.className="navHome",s.className="timeline-main-div",n.className="feed-div",c.className="timelineContentDiv",r.className="timelinePosts",m.className="",i.addEventListener("click",()=>l("/profile")),o.addEventListener("click",()=>l("/profile")),t.addEventListener("click",()=>{}),h.addEventListener("click",async L=>{L.preventDefault(),p.value=""}),a.appendChild(i),a.appendChild(o),a.appendChild(e),a.appendChild(t),c.appendChild(u),c.appendChild(p),c.appendChild(h),n.appendChild(a),r.appendChild(m),s.appendChild(c),s.appendChild(r),n.appendChild(s),n.appendChild(d),d.appendChild(t),n}function D(l){const n=document.createElement("div"),a=document.createElement("div"),s=document.createElement("h2"),e=document.createElement("div"),t=document.createElement("button"),i=document.createElement("button"),o=document.createElement("button"),d=document.createElement("img");return d.src=`${v}`,d.alt="logo Pets' Diaries",d.classList.add("logo"),n.className="home-div",a.className="header-div",e.className="content-div",t.classList.add("loginBttn"),i.classList.add("loginBttn"),o.textContent="Cambiar nombre",t.textContent="Volver atrás",t.addEventListener("click",()=>l("/feed")),i.textContent="Cerrar sesión",i.addEventListener("click",()=>{}),e.appendChild(a),n.appendChild(d),a.appendChild(s),e.appendChild(o),e.appendChild(t),e.appendChild(i),n.appendChild(e),n}const g=document.getElementById("root"),C={"/":f,"/login":I,"/signup":b,"/feed":B,"/profile":D},E=(l,n=g)=>{for(window.history.pushState({},l,window.location.origin+l);n.firstChild;)n.removeChild(n.firstChild);n.appendChild(C[l](E))};window.onpopstate=()=>{for(;g.firstChild;)g.removeChild(g.firstChild);g.appendChild(C[window.location.pathname](E))};g.appendChild(C[window.location.pathname](E));
