document.addEventListener('DOMContentLoaded', function() {
    const maxSymbols = window.innerWidth < 600 ? 120 : 1000; // Adjust the threshold and maximum symbols as needed
    const twinklingStars = document.getElementById('twinklingStars');
    const viewToggle = document.getElementById('viewToggle');
    const galleryWrapper = document.getElementById('galleryWrapper');

    function getRandomNumber(min, max) {
        return Math.random() * (max - min) + min;
    }

    function createRandomSymbol() {
        const symbol = document.createElement('div');
        symbol.className = 'twinkle';
        symbol.textContent = '⌐◨-◨';
        symbol.style.left = `${getRandomNumber(0, 100)}%`;
        symbol.style.top = `${getRandomNumber(0, 100)}%`;
        symbol.style.fontSize = `${getRandomNumber(10, 30)}px`;

        twinklingStars.appendChild(symbol);

        // Remove the oldest symbol if the maximum count is exceeded
        if (twinklingStars.childNodes.length > maxSymbols) {
            twinklingStars.removeChild(twinklingStars.firstChild);
        }
    }

    // Continuously add new symbols
    setInterval(function() {
        createRandomSymbol();
    }, 20); // Adjust the interval as needed

    // Initialize the toggle switch based on current view
    viewToggle.checked = true; // Set it to true for Grid View by default

    // Set the initial view to Grid View
    galleryWrapper.classList.add('grid-view');
    galleryWrapper.classList.remove('flex-view');

    // Event listener for the toggle switch
    viewToggle.addEventListener('change', function() {
        if (this.checked) {
            galleryWrapper.classList.remove('flex-view');
            galleryWrapper.classList.add('grid-view');
        } else {
            galleryWrapper.classList.remove('grid-view');
            galleryWrapper.classList.add('flex-view');
        }
    });

    // Set all links to open in a new tab
    const links = document.querySelectorAll('a');
    links.forEach(link => {
        link.setAttribute('target', '_blank');
    });
});

