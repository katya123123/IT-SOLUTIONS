//---------------------Nav GSAP FLip Start

// Helper function to update class
const updateActiveClass = (target, className) => {
  navLinks.forEach((link) => link.classList.remove(className));
  target.classList.add(className);
};

// Helper function for Flip animation
const applyFlipAnimation = (target, element, options = {}) => {
  const state = Flip.getState(element);
  target.appendChild(element);
  Flip.from(state, options);
};

const navLinks = document.querySelectorAll(".nav-link");
const navCorners = document.querySelector(".nav-corners");
const flipOptions = { duration: 0.4, ease: "power1.inOut" };

navLinks.forEach((link) => {
  link.addEventListener("click", function () {
    updateActiveClass(this, "is--active");
  });

  link.addEventListener("mouseenter", function () {
    applyFlipAnimation(this, navCorners, flipOptions);
  });

  link.addEventListener("mouseleave", function () {
    const activeLink = document.querySelector(".nav-link.is--active");
    applyFlipAnimation(activeLink, navCorners, flipOptions);
  });
});

//---------------------Nav GSAP Flip End

//---------------------Nav Hover Stagger Start

let splitType = new SplitType("[hoverstagger='text']", {
  types: "words,chars",
  tagName: "span"
});

$("[hoverstagger='link']").each(function (index) {
  let text1 = $(this).find("[hoverstagger='text']").eq(0);
  let text2 = $(this).find("[hoverstagger='text']").eq(1);

  let tl = gsap.timeline({
    paused: true,
    defaults: {
      duration: 0.5,
      ease: "power2.out"
    }
  });
  tl.fromTo(
    text1.find(".char:nth-child(odd)"),
    { yPercent: 100 },
    { yPercent: 0 }
  );
  tl.fromTo(
    text2.find(".char:nth-child(odd)"),
    { yPercent: 0 },
    { yPercent: -100 },
    0
  );
  tl.fromTo(
    text1.find(".char:nth-child(even)"),
    { yPercent: 0 },
    { yPercent: 100 },
    0
  );
  tl.fromTo(
    text2.find(".char:nth-child(even)"),
    { yPercent: -100 },
    { yPercent: 0 },
    0
  );

  $(this).on("mouseenter", function () {
    tl.restart();
  });
});

//---------------------Nav Hover Stagger End

//---------------------Nav Anchor & Nav Link BG STart

document.addEventListener("DOMContentLoaded", function () {
  gsap.registerPlugin(ScrollTrigger);

  const scrollNavLinks = document.querySelectorAll("[data-nav-section]");
  const scrollSections = document.querySelectorAll("[data-section]");

  // On scroll
  scrollSections.forEach((section) => {
    const sectionId = section.getAttribute("data-section");
    const link = document.querySelector(`a[data-nav-section="#${sectionId}"]`);
    const bg = link.querySelector(".nav-link-child_bg");

    if (!link || !bg) {
      return;
    }

    ScrollTrigger.create({
      trigger: section,
      start: "top center",
      end: "bottom center",
      scrub: true,
      onUpdate: (self) => {
        const progress = self.progress;
        const dynamicX = progress * 100 - 101; // Calculate the dynamic position
        gsap.set(bg, { x: `${dynamicX}%` }); // Move the background
      },
      onLeave: () => {
        gsap.to(bg, { x: "101%", duration: 0.3, ease: "Power3.inOut" }); // Animate back to -100%
      },
      markers: false
    });
  });
});

//---------------------Nav Anchor & Nav Link BG End

//---------------------Footer Z-index Start

// Get the footer element
const footer = document.querySelector(".footer-main");

// Function to adjust the z-index based on scroll position
const adjustFooterZIndex = () => {
  // Get the total height of the document
  const totalHeight = document.documentElement.scrollHeight;

  // Get the current scroll position
  const scrollPosition = window.scrollY + window.innerHeight;

  // Calculate percentage scrolled
  const scrollPercent = (scrollPosition / totalHeight) * 100;

  // Adjust z-index
  if (scrollPercent >= 80) {
    footer.style.zIndex = "2";
  } else if (scrollPercent <= 40) {
    footer.style.zIndex = "0";
  }
};

// Attach the function to the scroll event
window.addEventListener("scroll", adjustFooterZIndex);

// Call the function initially to set the z-index
adjustFooterZIndex();

//---------------------Footer Z-index End
