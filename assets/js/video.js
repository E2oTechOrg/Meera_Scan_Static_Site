// ********** Vedio ***************

window.addEventListener("load", () => {    // ← only change here
    const cards = document.querySelectorAll(".shorts-card");

    cards.forEach(card => {
        const video = card.querySelector("video");

        if (!video) return;               // ← safety check added

        // ── Set src after page load ──
        const dataSrc = video.getAttribute("data-src");
        if (dataSrc) {
            video.src = dataSrc;          // ← load video now
            video.load();
        }

        // Hover → play (muted)
        card.addEventListener("mouseenter", () => {
            video.muted = true;
            video.play().catch(err => console.log(err));
            card.classList.add("playing");
        });

        // Leave → pause & reset
        card.addEventListener("mouseleave", () => {
            video.pause();
            video.currentTime = 0;
            card.classList.remove("playing");
        });

        // Click → enable sound
        card.addEventListener("click", () => {
            video.muted = false;
            video.play();
        });
    });

});