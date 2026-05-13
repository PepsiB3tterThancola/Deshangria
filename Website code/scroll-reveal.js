/**
 * scroll-reveal.js
 * ─────────────────────────────────────────────────────────────
    Yeah This was so crazy to figure out how to make, I'm just glad it's done
 * ─────────────────────────────────────────────────────────────
 */

const revealObserver = new IntersectionObserver(
    (entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('revealed');
                // Once revealed, stop watching — no re-hide on scroll back up
                revealObserver.unobserve(entry.target);
            }
        });
    },
    {
        threshold: 0.12,       // trigger when 12% of the element is visible
        rootMargin: '0px 0px -40px 0px'  // slightly before the very bottom edge
    }
);

// Observe every element with class "reveal" on the page
document.querySelectorAll('.reveal').forEach(el => {
    revealObserver.observe(el);
});
