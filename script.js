// ============================================
// ANUSHA K — PORTFOLIO INTERACTIONS
// ============================================

document.addEventListener("DOMContentLoaded", () => {

  /* ---- Scroll reveal animations ---- */
  const revealEls = document.querySelectorAll(".reveal, .reveal-up");

  const revealObserver = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("is-visible");
        revealObserver.unobserve(entry.target);
      }
    });
  }, { threshold: 0.15, rootMargin: "0px 0px -50px 0px" });

  revealEls.forEach((el) => revealObserver.observe(el));

  /* ---- Nav background on scroll ---- */
  const nav = document.getElementById("nav");
  window.addEventListener("scroll", () => {
    nav.classList.toggle("scrolled", window.scrollY > 40);
  }, { passive: true });

  /* ---- Mobile nav toggle ---- */
  const navToggle = document.getElementById("navToggle");
  const navLinks = document.querySelector(".nav-links");
  navToggle?.addEventListener("click", () => {
    navLinks.style.display = navLinks.style.display === "flex" ? "none" : "flex";
    navLinks.style.flexDirection = "column";
    navLinks.style.position = "absolute";
    navLinks.style.top = "60px";
    navLinks.style.right = "24px";
    navLinks.style.background = "rgba(18,13,10,0.97)";
    navLinks.style.padding = "24px 32px";
    navLinks.style.border = "1px solid rgba(201,164,92,0.18)";
    navLinks.style.gap = "20px";
  });

  // Close mobile menu after clicking a link
  document.querySelectorAll(".nav-links a").forEach((link) => {
    link.addEventListener("click", () => {
      if (window.innerWidth <= 640) navLinks.style.display = "none";
    });
  });

  /* ---- Ambient cursor glow (desktop only) ---- */
  const glow = document.getElementById("cursorGlow");
  if (window.matchMedia("(hover: hover)").matches && glow) {
    window.addEventListener("mousemove", (e) => {
      glow.style.transform = `translate(${e.clientX}px, ${e.clientY}px) translate(-50%, -50%)`;
    });
  }

});
