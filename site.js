const toggle=document.getElementById('toggle'),nav=document.getElementById('nav');if(toggle&&nav){toggle.addEventListener('click',()=>{const open=nav.classList.toggle('open');toggle.setAttribute('aria-expanded',String(open));});} 
document.addEventListener("DOMContentLoaded", function () {
  const nav = document.querySelector(".site-nav");
  if (!nav || document.querySelector(".mobile-menu-toggle")) return;

  const button = document.createElement("button");
  button.type = "button";
  button.className = "mobile-menu-toggle";
  button.textContent = "☰ Menü";
  button.setAttribute("aria-expanded", "false");
  button.setAttribute("aria-label", "Navigáció megnyitása");

  nav.parentNode.insertBefore(button, nav);

  button.addEventListener("click", function () {
    const isOpen = nav.classList.toggle("mobile-open");
    button.setAttribute("aria-expanded", String(isOpen));
    button.textContent = isOpen ? "✕ Bezárás" : "☰ Menü";
  });
});
