/* ==========================================
   ATS ESPORTS ADMIN PANEL V1
   admin.js
========================================== */

document.addEventListener("DOMContentLoaded", async () => {

    const teamContainer = document.getElementById("teamContainer");

    const totalTeams = document.getElementById("totalTeams");
    const approvedTeams = document.getElementById("approvedTeams");
    const pendingTeams = document.getElementById("pendingTeams");

    try {

        const snapshot = await window.getDocs(
            window.collection(window.db, "registrations")
        );

        let total = 0;
        let approved = 0;
        let pending = 0;

        teamContainer.innerHTML = "";

        snapshot.forEach((docSnap) => {

            total++;

            const team = docSnap.data();

            if (team.status === "approved") {
                approved++;
            } else {
                pending++;
            }

            teamContainer.innerHTML += `

            <div class="team-card">

                <h3>${team.teamName || "No Team Name"}</h3>

                <p><strong>Tag:</strong> ${team.teamTag || "-"}</p>

                <p><strong>WhatsApp:</strong> ${team.whatsapp || "-"}</p>

                <p><strong>Status:</strong> ${team.status || "Pending"}</p>

                <div class="actions">

                    <button class="approve">
                        Approve
                    </button>

                    <button class="reject">
                        Reject
                    </button>

                    <button class="delete">
                        Delete
                    </button>

                </div>

            </div>

            `;

        });

        totalTeams.textContent = total;
        approvedTeams.textContent = approved;
        pendingTeams.textContent = pending;

    } catch (error) {

        console.error(error);

        teamContainer.innerHTML =
        "<h2>❌ Unable to load registrations.</h2>";

    }

});
