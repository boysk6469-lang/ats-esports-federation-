/* ==========================================
   ATS ESPORTS FEDERATION V6
   SCRIPT.JS
========================================== */

document.addEventListener("DOMContentLoaded", () => {

    // ================= NAVIGATION =================

    const menuBtn = document.getElementById("menuBtn");
    const navMenu = document.getElementById("navMenu");

    if (menuBtn) {
        menuBtn.addEventListener("click", () => {
            navMenu.classList.toggle("active");
        });
    }

    // ================= NAVBAR SCROLL =================

    const navbar = document.querySelector(".navbar");

    window.addEventListener("scroll", () => {

        if (window.scrollY > 40) {

            navbar.style.background = "rgba(5,10,25,.95)";
            navbar.style.boxShadow = "0 0 25px rgba(0,217,255,.35)";

        } else {

            navbar.style.background = "rgba(8,12,28,.75)";
            navbar.style.boxShadow = "none";

        }

    });

    // ================= HERO FLOAT =================

    const heroCard = document.querySelector(".hero-card");

    if (heroCard) {

        let value = 0;

        setInterval(() => {

            value += 0.03;

            heroCard.style.transform =
            `translateY(${Math.sin(value) * 10}px)`;

        }, 30);

    }

    // ================= REGISTER POPUP =================

    const popup = document.getElementById("registerPopup");

    const registerButtons = [

        document.getElementById("openRegister"),
        document.getElementById("openRegisterHero"),
        document.getElementById("openRegisterEvent"),
        document.getElementById("openRegisterCTA")

    ];

    registerButtons.forEach(btn => {

        if (btn) {

            btn.addEventListener("click", (e) => {

                e.preventDefault();

                popup.style.display = "flex";

            });

        }

    });

    // ================= CLOSE POPUP =================

    const closePopup = document.getElementById("closePopup");

    if (closePopup) {

        closePopup.addEventListener("click", () => {

            popup.style.display = "none";

        });

    }

    window.addEventListener("click", (e) => {

        if (e.target === popup) {

            popup.style.display = "none";

        }

    });

    // ================= SCROLL REVEAL =================

    const observer = new IntersectionObserver((entries) => {

        entries.forEach(entry => {

            if (entry.isIntersecting) {

                entry.target.classList.add("show");

            }

        });

    }, {

        threshold: 0.15

    });

    document.querySelectorAll(
        ".stat-card,.tournament-card,.team-card,.news-card,.hall-card,.sponsor-card,.leaderboard-table"
    ).forEach(el => {

        el.classList.add("hidden");

        observer.observe(el);

    });

    // ================= FORM SUBMIT =================

    const form = document.getElementById("registrationForm");

    if (form) {

        form.addEventListener("submit", (e) => {

            e.preventDefault();

            alert("✅ Registration Submitted Successfully!");

            form.reset();

            popup.style.display = "none";

        });

    }

    console.log("ATS ESPORTS FEDERATION V6 Loaded");

});
