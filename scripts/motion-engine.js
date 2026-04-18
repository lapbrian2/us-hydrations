/**
 * Motion engine — splash, reveals, custom cursor, parallax, marquee, counters.
 * Respects prefers-reduced-motion: skips cursor/tilt/parallax/magnetic but
 * still runs reveals, scroll progress, and counters so content remains reachable.
 */
(() => {
  const prefersReduced = matchMedia("(prefers-reduced-motion: reduce)").matches;

  // ---------- Splash ----------
  const splash = document.getElementById("splash");
  const finishSplash = () => {
    if (!splash) return;
    splash.classList.add("out");
    document.body.classList.add("loaded");
    setTimeout(() => splash.remove(), 1200);
  };
  if (prefersReduced) finishSplash();
  else setTimeout(finishSplash, 1700);

  // ---------- Nav char-split for hover bob ----------
  document.querySelectorAll(".nav-link").forEach((a) => {
    const txt = a.textContent || "";
    a.innerHTML = "";
    [...txt].forEach((c, i) => {
      const s = document.createElement("span");
      s.className = "ch";
      s.style.setProperty("--i", String(i));
      s.textContent = c === " " ? "\u00A0" : c;
      a.appendChild(s);
    });
  });

  // ---------- Reveal on scroll ----------
  const revealIO = new IntersectionObserver(
    (entries) => {
      entries.forEach((e) => {
        if (e.isIntersecting) {
          e.target.classList.add("in");
          revealIO.unobserve(e.target);
        }
      });
    },
    { threshold: 0.15 },
  );
  document
    .querySelectorAll(".reveal, .reveal-stagger, .word-split, .clip-reveal")
    .forEach((el) => revealIO.observe(el));

  // ---------- Scroll progress bar ----------
  const bar = document.getElementById("progress");
  const onScroll = () => {
    if (!bar) return;
    const sh = document.documentElement.scrollHeight - innerHeight;
    const p = sh > 0 ? scrollY / sh : 0;
    bar.style.transform = `scaleX(${p})`;
  };
  addEventListener("scroll", onScroll, { passive: true });
  onScroll();

  // ---------- Animated counters ----------
  const counters = document.querySelectorAll(".counter");
  const counterIO = new IntersectionObserver(
    (entries) => {
      entries.forEach((e) => {
        if (!e.isIntersecting) return;
        const el = e.target;
        const target = parseFloat(el.dataset.target || "0");
        const suffix = el.dataset.suffix || "";
        const dur = 1600;
        const start = performance.now();
        const anim = (now) => {
          const t = Math.min(1, (now - start) / dur);
          const eased = 1 - Math.pow(1 - t, 3);
          el.textContent = Math.round(target * eased) + suffix;
          if (t < 1) requestAnimationFrame(anim);
        };
        requestAnimationFrame(anim);
        counterIO.unobserve(el);
      });
    },
    { threshold: 0.5 },
  );
  counters.forEach((c) => counterIO.observe(c));

  if (prefersReduced) return;

  // ---------- Custom cursor + ambient glow ----------
  const dot = document.getElementById("cursorDot");
  const ring = document.getElementById("cursorRing");
  const glow = document.getElementById("ambientGlow");
  if (dot && ring && glow) {
    let mx = innerWidth / 2,
      my = innerHeight / 2,
      rx = mx,
      ry = my,
      gx = mx,
      gy = my;
    addEventListener("pointermove", (e) => {
      mx = e.clientX;
      my = e.clientY;
    });
    const tick = () => {
      rx += (mx - rx) * 0.18;
      ry += (my - ry) * 0.18;
      gx += (mx - gx) * 0.06;
      gy += (my - gy) * 0.06;
      dot.style.transform = `translate(${mx}px, ${my}px) translate(-50%,-50%)`;
      ring.style.transform = `translate(${rx}px, ${ry}px) translate(-50%,-50%)`;
      glow.style.transform = `translate(${gx}px, ${gy}px) translate(-50%,-50%)`;
      requestAnimationFrame(tick);
    };
    tick();
  }

  // Cursor hover state on interactive elements
  document.querySelectorAll("a, button, .card, .magnetic").forEach((el) => {
    el.addEventListener("pointerenter", () =>
      document.body.classList.add("cursor-hover"),
    );
    el.addEventListener("pointerleave", () =>
      document.body.classList.remove("cursor-hover"),
    );
  });

  // ---------- Magnetic pull on CTAs ----------
  document
    .querySelectorAll(".magnetic, a.liquid-glass, button.btn-liquid")
    .forEach((el) => {
      el.addEventListener("pointermove", (e) => {
        const r = el.getBoundingClientRect();
        const dx = (e.clientX - (r.left + r.width / 2)) * 0.2;
        const dy = (e.clientY - (r.top + r.height / 2)) * 0.2;
        el.style.transform = `translate(${dx}px, ${dy}px)`;
      });
      el.addEventListener("pointerleave", () => {
        el.style.transform = "";
      });
    });

  // ---------- 3D card tilt ----------
  document.querySelectorAll(".card").forEach((card) => {
    card.addEventListener("pointermove", (e) => {
      const r = card.getBoundingClientRect();
      const px = (e.clientX - r.left) / r.width;
      const py = (e.clientY - r.top) / r.height;
      const ry = (px - 0.5) * 10;
      const rx = (0.5 - py) * 8;
      card.style.setProperty("--rx", rx + "deg");
      card.style.setProperty("--ry", ry + "deg");
      card.style.setProperty("--gx", px * 100 + "%");
      card.style.setProperty("--gy", py * 100 + "%");
    });
    card.addEventListener("pointerleave", () => {
      card.style.setProperty("--rx", "0deg");
      card.style.setProperty("--ry", "0deg");
    });
  });

  // ---------- Photo parallax ----------
  const parallaxEls = document.querySelectorAll(".photo-parallax");
  const parallaxUpdate = () => {
    parallaxEls.forEach((el) => {
      const strength = parseFloat(el.dataset.parallax || "0.2");
      const rect = el.getBoundingClientRect();
      const center = rect.top + rect.height / 2;
      const offset = (center - innerHeight / 2) * strength * -1;
      const scale = 1 + Math.min(0.12, Math.abs(scrollY / innerHeight) * 0.06);
      el.style.transform = `translate3d(0, ${offset}px, 0) scale(${scale})`;
    });
  };
  addEventListener("scroll", parallaxUpdate, { passive: true });
  addEventListener("resize", parallaxUpdate);
  parallaxUpdate();

  // ---------- Marquee velocity scrub ----------
  const mq = document.querySelector(".marquee-section");
  if (mq) {
    const track = mq.querySelector(".marquee-track");
    if (track) {
      let lastX = 0;
      mq.addEventListener("pointermove", (e) => {
        const vel = e.clientX - lastX;
        lastX = e.clientX;
        const boost = Math.min(3, Math.abs(vel) * 0.05);
        track.style.animationDuration = `${Math.max(8, 36 - boost * 8)}s`;
      });
      mq.addEventListener("pointerleave", () => {
        track.style.animationDuration = "36s";
      });
    }
  }
})();
