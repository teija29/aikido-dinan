document.addEventListener('DOMContentLoaded', function() {
    const searchInput = document.getElementById('lexiqueSearch');
    const grid = document.getElementById('lexiqueGrid');
    const cards = grid.querySelectorAll('.lexique-card');
    const noResults = document.getElementById('lexiqueNoResults');

    if (!searchInput || !grid) return;

    searchInput.addEventListener('input', function() {
        const query = this.value.toLowerCase().trim();
        let visibleCount = 0;

        cards.forEach(card => {
            const term = (card.getAttribute('data-term') || '').toLowerCase();
            const text = card.textContent.toLowerCase();
            const match = !query || term.includes(query) || text.includes(query);

            card.classList.toggle('hidden', !match);
            if (match) visibleCount++;
        });

        noResults.style.display = visibleCount === 0 ? 'block' : 'none';
    });
});
