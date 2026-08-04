/*
===========================================
WOURO YOBI WEBSITE
Version 1.0
Main JavaScript
===========================================
*/

// =======================================
// Sticky Navigation
// =======================================

const header = document.querySelector(".header");

window.addEventListener("scroll", () => {

    if (window.scrollY > 60) {

        header.style.background = "#ffffff";
        header.style.boxShadow = "0 10px 30px rgba(0,0,0,.08)";

        document.querySelector(".logo").style.color = "#1B5E20";

        document.querySelectorAll(".nav-links a").forEach(link => {
            link.style.color = "#263238";
        });

    } else {

        header.style.background = "transparent";
        header.style.boxShadow = "none";

        document.querySelector(".logo").style.color = "#ffffff";

        document.querySelectorAll(".nav-links a").forEach(link => {
            link.style.color = "#ffffff";
        });

    }

});

// =======================================
// Smooth Scroll
// =======================================

document.querySelectorAll('a[href^="#"]').forEach(anchor => {

    anchor.addEventListener("click", function (e) {

        const target = document.querySelector(this.getAttribute("href"));

        if (!target) return;

        e.preventDefault();

        target.scrollIntoView({

            behavior: "smooth"

        });

    });

});

// =======================================
// Reveal Animation
// =======================================

const observer = new IntersectionObserver(

(entries) => {

    entries.forEach(entry => {

        if (entry.isIntersecting) {

            entry.target.classList.add("show");

        }

    });

},

{

    threshold: .15

}

);

document.querySelectorAll("section").forEach(section => {

    section.classList.add("hidden");

    observer.observe(section);

});

// =======================================
// Animated Counters
// =======================================

const counters = document.querySelectorAll(".stat-card h3");

const speed = 100;

const counterObserver = new IntersectionObserver(

(entries) => {

entries.forEach(entry => {

if(!entry.isIntersecting) return;

const counter = entry.target;

const target = Number(counter.innerText);

let count = 0;

const updateCounter = () =>{

const increment = Math.ceil(target / speed);

count += increment;

if(count < target){

counter.innerText = count;

requestAnimationFrame(updateCounter);

}else{

counter.innerText = target;

}

}

updateCounter();

counterObserver.unobserve(counter);

});

},

{

threshold:0.6

}

);

counters.forEach(counter=>{

counterObserver.observe(counter);

});

// =======================================
// Mobile Menu (Prepared for Sprint 2)
// =======================================

const menuButton = document.querySelector(".menu-toggle");
const nav = document.querySelector(".nav-links");

if(menuButton){

menuButton.addEventListener("click",()=>{

nav.classList.toggle("mobile-open");

});

}

// =======================================
// Footer Year
// =======================================

const year = document.querySelector("#year");

if(year){

year.innerHTML = new Date().getFullYear();

}
