/* ==========================================
   ATS ESPORTS FEDERATION V6 FINAL
   script.js - PART 1
========================================== */

document.addEventListener("DOMContentLoaded", () => {

    // ==========================
    // MOBILE MENU
    // ==========================

    const menuBtn = document.getElementById("menuBtn");
    const navMenu = document.getElementById("navMenu");

    if (menuBtn && navMenu) {

        menuBtn.addEventListener("click", () => {

            navMenu.classList.toggle("active");

        });

    }

    // ==========================
    // NAVBAR SCROLL EFFECT
    // ==========================

    const navbar = document.querySelector(".navbar");

    window.addEventListener("scroll", () => {

        if (!navbar) return;

        if (window.scrollY > 40) {

            navbar.style.background = "rgba(5,10,25,.95)";
            navbar.style.boxShadow = "0 0 20px rgba(0,217,255,.30)";

        } else {

            navbar.style.background = "rgba(8,12,28,.80)";
            navbar.style.boxShadow = "none";

        }

    });

    // ==========================
    // HERO FLOAT ANIMATION
    // ==========================

    const heroCard = document.querySelector(".hero-card");

    if (heroCard) {

        let i = 0;

        setInterval(() => {

            i += 0.03;

            heroCard.style.transform =
                `translateY(${Math.sin(i) * 10}px)`;

        }, 30);

    }

    // ==========================
    // REGISTER POPUP
    // ==========================

    const popup = document.getElementById("registerPopup");

    const registerButtons = [

        document.getElementById("openRegister"),
        document.getElementById("openRegisterHero"),
        document.getElementById("openRegisterEvent"),
        document.getElementById("openRegisterCTA")

    ];

    registerButtons.forEach(button => {

        if (button) {

            button.addEventListener("click", (e) => {

                e.preventDefault();

                popup.style.display = "flex";

            });

        }

    });

    // ==========================
    // CLOSE POPUP
    // ==========================

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
   // ==========================
    // SCROLL REVEAL
    // ==========================

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

    // ==========================
    // FIREBASE REGISTRATION
    // ==========================

    const form = document.getElementById("registrationForm");

    if (form) {

        form.addEventListener("submit", async (e) => {

            e.preventDefault();

            try {

                const teamData = {

                    teamName: document.getElementById("teamName")?.value || "",

                    teamTag: document.getElementById("teamTag")?.value || "",

                    whatsapp: document.getElementById("whatsapp")?.value || "",

                    discord: document.getElementById("discord")?.value || "",

                    player1Name: document.getElementById("player1Name")?.value || "",
                    player1UID: document.getElementById("player1UID")?.value || "",

                    player2Name: document.getElementById("player2Name")?.value || "",
                    player2UID: document.getElementById("player2UID")?.value || "",

                    player3Name: document.getElementById("player3Name")?.value || "",
                    player3UID: document.getElementById("player3UID")?.value || "",

                    player4Name: document.getElementById("player4Name")?.value || "",
                    player4UID: document.getElementById("player4UID")?.value || "",

                    status: "pending",

                    createdAt: window.serverTimestamp()

                };

                await window.addDoc(
                    window.collection(window.db, "registrations"),
                    teamData
                );

                alert("✅ Registration Submitted Successfully!");

                form.reset();

                popup.style.display = "none";

            } catch (err) {

                console.error(err);

                alert("❌ Failed to Save Registration");

            }

        });

    }
   // ==========================
    // READY MESSAGE
    // ==========================

    console.log("✅ ATS ESPORTS FEDERATION V6 FINAL Loaded");
    console.log("🔥 Firebase Registration System Ready");

});
   
