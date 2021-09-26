//pageloader
window.addEventListener("load", () => {
  document.querySelector(".main").classList.remove("hidden");
  document.querySelector(".home-section").classList.add("active");
  //page loader fading out
  document.querySelector(".page-loader").classList.add("fade-out");
  setTimeout(() => {
    document.querySelector(".page-loader").style.display = "none";
  }, 1000);
});

//About tabs toggleing here
const tabsContainer = document.querySelector(".about-tabs");
const aboutSection = document.querySelector(".about-section");

tabsContainer.addEventListener("click", (e) => {
  if (
    e.target.classList.contains("tab-item") &&
    !e.target.classList.contains("active")
  ) {
    tabsContainer.querySelector(".active").classList.remove("active");
    e.target.classList.add("active");
    const target = e.target.getAttribute("data-target");
    aboutSection
      .querySelector(".tab-content.active")
      .classList.remove("active");
    aboutSection.querySelector(target).classList.add("active");
  }
});

//Portfolio Item details popup
document.addEventListener("click", (e) => {
  if (e.target.classList.contains("view-project-btn")) {
    togglePortfolioPopup();
    document.querySelector(".portfolio-popup").scrollTo(0, 0);
    portfolioItemDetails(e.target.parentElement);
  }
});

//portfolio popup function to display portfolio popup
function togglePortfolioPopup() {
  document.querySelector(".portfolio-popup").classList.toggle("open");
  document.body.classList.toggle("hide-scrolling");
  document.querySelector(".main").classList.toggle("fade-out");
}

document
  .querySelector(".pp-close")
  .addEventListener("click", togglePortfolioPopup);

//hiding popu if clicked outside of it
// document.addEventListener("click", (e) => {
//   if (e.target.classList.contains("pp-inner")) {
//     togglePortfolioPopup();
//   }
// });

//function for changing portfolio items details
function portfolioItemDetails(portfolioItem) {
  document.querySelector(".pp-thumbnail img").src = portfolioItem.querySelector(
    ".portfolio-item-thumbnail img"
  ).src;

  document.querySelector(".pp-header h3").innerHTML =
    portfolioItem.querySelector(".portfolio-item-title").innerHTML;

  document.querySelector(".pp-body").innerHTML = portfolioItem.querySelector(
    ".portfolio-item-details"
  ).innerHTML;
}

//toggling navbar
const navToggler = document.querySelector(".nav-toggler");
navToggler.addEventListener("click", (e) => {
  hideSection();
  toggleNavbar();
  document.body.classList.toggle("hide-scrolling");
});

//hiding main home section
function hideSection() {
  document.querySelector("section.active").classList.toggle("fade-out");
}

//toggling navbar function
function toggleNavbar() {
  document.querySelector(".header").classList.toggle("active");
}

/*Active Section*/
document.addEventListener("click", (e) => {
  if (e.target.classList.contains("link-item") && e.target.hash !== "") {
    //activating overlay to prevent multiple clicks
    document.querySelector(".overlay").classList.add("active");
    navToggler.classList.add("hide");
    if (e.target.classList.contains("nav-item")) {
      toggleNavbar();
    } else {
      hideSection();
      document.body.classList.add("hide-scrolling");
    }
    setTimeout(() => {
      document
        .querySelector("section.active")
        .classList.remove("active", "fade-out");
      document.querySelector(e.target.hash).classList.add("active");
      window.scrollTo(0, 0);
      document.body.classList.remove("hide-scrolling");
      navToggler.classList.remove("hide");
      document.querySelector(".overlay").classList.remove("active");
    }, 500);
  }
});

//setting variables for dark theme

let rootVariables = document.querySelector(":root");
let rootVAariablesValues = getComputedStyle(rootVariables);

function forDark() {
  rootVariables.style.setProperty("--mainColor", "#1fe8b7");
  rootVariables.style.setProperty("--leftTopCircle", "#ff4dff");
  rootVariables.style.setProperty("--textColor", "#fff");
  rootVariables.style.setProperty("--leftCenterCircle", "#1a1aff");
  rootVariables.style.setProperty("--leftBackground", "#003333");
  rootVariables.style.setProperty("--righttBackground", "#000000");
  rootVariables.style.setProperty("--white", "#fff");
  rootVariables.style.setProperty("--greenleftCenterCircle", "#000000");
}

function forLight() {
  rootVariables.style.setProperty("--mainColor", "#4863a0");
  rootVariables.style.setProperty("--leftTopCircle", "#ffff00");
  rootVariables.style.setProperty("--textColor", "#2c3539");
  rootVariables.style.setProperty("--leftCenterCircle", "#ff00bf");
  rootVariables.style.setProperty("--leftBackground", "#4cc552");
  rootVariables.style.setProperty("--righttBackground", "#00ffff");
  rootVariables.style.setProperty("--white", "#fff");
  rootVariables.style.setProperty("--greenleftCenterCircle", "#040495");
}

//theme button toggler
document.addEventListener("click", (e) => {
  if (e.target.classList.contains("light")) {
    document.querySelector(".light").classList.add("dark");
    document.querySelector(".light").classList.remove("light");
    forDark();
    document.querySelector("#theme-text").innerHTML = "Light Mode";
  } else if (e.target.classList.contains("dark")) {
    document.querySelector(".dark").classList.add("light");
    document.querySelector(".dark").classList.remove("dark");
    forLight();
    document.querySelector("#theme-text").innerHTML = "Dark Mode";
  }
});
