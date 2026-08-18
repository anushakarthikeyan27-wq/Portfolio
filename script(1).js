// ============================================
// ANUSHA K — PORTFOLIO INTERACTIONS
// ============================================

document.addEventListener("DOMContentLoaded", () => {

  /* ---- Page loader ---- */
  const loader = document.getElementById("loader");
  const loaderFill = document.getElementById("loaderFill");
  requestAnimationFrame(() => { loaderFill.style.width = "100%"; });
  window.addEventListener("load", () => {
    setTimeout(() => loader.classList.add("is-hidden"), 700);
  });

  /* ---- Scroll progress bar ---- */
  const progressBar = document.getElementById("progressBar");
  window.addEventListener("scroll", () => {
    const scrollTop = window.scrollY;
    const docHeight = document.documentElement.scrollHeight - window.innerHeight;
    const pct = docHeight > 0 ? (scrollTop / docHeight) * 100 : 0;
    progressBar.style.width = pct + "%";
  }, { passive: true });

  /* ---- Text scramble on hero name ---- */
  const scrambleChars = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";
  document.querySelectorAll(".scramble").forEach((el) => {
    const finalText = el.dataset.text || el.textContent;
    let frame = 0;
    const totalFrames = 18;
    const runScramble = () => {
      const interval = setInterval(() => {
        let output = "";
        for (let i = 0; i < finalText.length; i++) {
          if (i < (frame / totalFrames) * finalText.length) {
            output += finalText[i];
          } else if (finalText[i] === " ") {
            output += " ";
          } else {
            output += scrambleChars[Math.floor(Math.random() * scrambleChars.length)];
          }
        }
        el.textContent = output;
        frame++;
        if (frame > totalFrames) {
          el.textContent = finalText;
          clearInterval(interval);
        }
      }, 35);
    };
    const scrambleObserver = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          setTimeout(runScramble, 500);
          scrambleObserver.unobserve(entry.target);
        }
      });
    }, { threshold: 0.5 });
    scrambleObserver.observe(el);
  });

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

  /* ---- Ambient cursor glow + custom cursor dot (desktop only) ---- */
  const glow = document.getElementById("cursorGlow");
  const dot = document.getElementById("cursorDot");
  const isHoverCapable = window.matchMedia("(hover: hover)").matches;

  if (isHoverCapable && glow && dot) {
    window.addEventListener("mousemove", (e) => {
      glow.style.transform = `translate(${e.clientX}px, ${e.clientY}px) translate(-50%, -50%)`;
      dot.style.transform = `translate(${e.clientX}px, ${e.clientY}px) translate(-50%, -50%)`;
    });

    document.querySelectorAll("a, button, [data-tilt]").forEach((el) => {
      el.addEventListener("mouseenter", () => dot.classList.add("is-active"));
      el.addEventListener("mouseleave", () => dot.classList.remove("is-active"));
    });
  }

  /* ---- Magnetic buttons (desktop only) ---- */
  if (isHoverCapable) {
    document.querySelectorAll("[data-magnetic]").forEach((btn) => {
      btn.addEventListener("mousemove", (e) => {
        const rect = btn.getBoundingClientRect();
        const x = e.clientX - rect.left - rect.width / 2;
        const y = e.clientY - rect.top - rect.height / 2;
        btn.style.transform = `translate(${x * 0.25}px, ${y * 0.35}px)`;
      });
      btn.addEventListener("mouseleave", () => {
        btn.style.transform = "translate(0, 0)";
      });
    });
  }

  /* ---- 3D tilt on project cards (desktop only) ---- */
  if (isHoverCapable) {
    document.querySelectorAll("[data-tilt]").forEach((card) => {
      card.addEventListener("mousemove", (e) => {
        const rect = card.getBoundingClientRect();
        const x = (e.clientX - rect.left) / rect.width - 0.5;
        const y = (e.clientY - rect.top) / rect.height - 0.5;
        card.style.transform = `perspective(900px) rotateY(${x * 3}deg) rotateX(${-y * 3}deg)`;
      });
      card.addEventListener("mouseleave", () => {
        card.style.transform = "perspective(900px) rotateY(0deg) rotateX(0deg)";
      });
    });
  }

});
