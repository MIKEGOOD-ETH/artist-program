document.addEventListener('DOMContentLoaded', function() {
    const viewToggle = document.getElementById('viewToggle');
    const galleryWrapper = document.getElementById('galleryWrapper');

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

// Get the popup and link elements by their IDs
const popupContainer = document.getElementById('popup-container');
const openPopupLinks = document.querySelectorAll('[data-popup-target]');
const closePopupButton = document.getElementById('close-popup');

// Open the popup when a specific link is clicked
openPopupLinks.forEach(link => {
    link.addEventListener('click', (event) => {
        event.preventDefault(); // Prevent the default behavior of navigating to a new page
        const targetPopupId = link.getAttribute('data-popup-target');
        const targetPopup = document.querySelector(targetPopupId);
        if (targetPopup) {
            targetPopup.style.display = 'flex'; // Display the popup
        }
    });
});

// Close the popup when the close button is clicked
closePopupButton.addEventListener('click', () => {
    popupContainer.style.display = 'none'; // Hide the popup
});

// Close the popup when clicking outside of it
window.addEventListener('click', (event) => {
    if (event.target === popupContainer) {
        popupContainer.style.display = 'none';
    }
});

