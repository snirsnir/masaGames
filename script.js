document.querySelectorAll('.game').forEach(game => {
    game.addEventListener('mouseover', function(event) {
        let tooltip = document.createElement('div');
        tooltip.classList.add('tooltip');
        tooltip.innerText = this.getAttribute('data-tooltip');
        document.body.appendChild(tooltip);

        let rect = this.getBoundingClientRect();
        tooltip.style.left = `${rect.left + window.scrollX}px`;
        tooltip.style.top = `${rect.bottom + window.scrollY}px`;
    });

    game.addEventListener('mouseout', function() {
        document.querySelector('.tooltip').remove();
    });
});
