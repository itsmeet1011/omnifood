console.log("hello world");

// ///  set current year
const yearEl = document.querySelector(".years");
const currentyear = new Date().getFullYear();
yearEl.textContent = currentyear;

/////////////// Make mobile navigation
const btnNavEl = document.querySelector(".btn-mobile-nav");
const navEl = document.querySelector(".main-nav");
const hideBtn = document.querySelector(".hide-btn");

btnNavEl.addEventListener("click", function () {
  navEl.classList.toggle("nav-open");
  hideBtn.classList.toggle("smbl-nav");
});

/////////////navigation

const links = document.querySelectorAll("a:link");

links.forEach((link) => {
  link.addEventListener("click", function (e) {
    e.preventDefault();
    const href = link.getAttribute("href");

    if (href === "#") {
      window.scrollTo({
        top: 0,
        behavior: "smooth",
      });
    }

    if (href !== "#" && href.startsWith("#")) {
      console.log(href);

      const sectionEl = document.querySelector(href);

      sectionEl.scrollIntoView({ behavior: "smooth" });
    }

    if (link.classList.contains("main-nav-link")) {
      navEl.classList.toggle("nav-open");
      hideBtn.classList.toggle("smbl-nav");
    }
  });
});

// //////sticky navigation

const sectionHeroEl = document.querySelector(".Section-hero");
const obs = new IntersectionObserver(
  function (entries) {
    const ent = entries[0];
    console.log(ent);
    if (!ent.isIntersecting) document.body.classList.add("sticky");
    if (ent.isIntersecting) document.body.classList.remove("sticky");
  },
  {
    root: null,
    threshold: 0,
    rootMargin: "-85px",
  }
);
obs.observe(sectionHeroEl);
