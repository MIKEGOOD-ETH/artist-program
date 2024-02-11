document.addEventListener('DOMContentLoaded', function() {
    const siteDomain = window.location.hostname; // Get the current site's domain
    const links = document.querySelectorAll('a'); // Select all links in the document

    links.forEach(function(link) {
      if (link.hostname !== siteDomain && link.hostname !== '') { // Check if the link is external
        link.target = '_blank'; // Open in a new tab
        link.rel = 'noopener noreferrer'; // Security measure
      }
    });
  });



function toggleMenu() {
    var navbar = document.getElementById("navbar");
    if (navbar.style.display === "block") {
        navbar.style.display = "none";
    } else {
        navbar.style.display = "block";
    }
}

document.addEventListener('DOMContentLoaded', function() {
    const viewToggle = document.getElementById('viewToggle');
    const galleryWrapper = document.getElementById('galleryWrapper');

    // Initialize the toggle switch based on current view
    viewToggle.checked = false; // Set it to true for Grid View by default

    // Set the initial view to Grid View
    galleryWrapper.classList.remove('grid-view');
    galleryWrapper.classList.add('flex-view');

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

document.addEventListener('DOMContentLoaded', function() {
    const searchBar = document.getElementById('searchBar');
    const sortSelect = document.getElementById('sortSelect');
    const gallery = document.querySelector('.gallery');
    const imageContainers = Array.from(document.querySelectorAll('.image-container'));

    // Function to sort images
    function sortImages() {
        const sortedImages = imageContainers.sort((a, b) => {
            const dateA = new Date(a.getAttribute('data-date'));
            const dateB = new Date(b.getAttribute('data-date'));
            return sortSelect.value === 'newest' ? dateB - dateA : dateA - dateB;
        });
        // Clear existing images and append sorted images
        gallery.innerHTML = '';
        sortedImages.forEach(image => gallery.appendChild(image));
    }

    // Event listener for search functionality
    searchBar.addEventListener('input', function(e) {
        const searchQuery = e.target.value.toLowerCase();
        imageContainers.forEach(image => {
            const artistName = image.querySelector('.artist-name').textContent.toLowerCase();
            const artTitle = image.querySelector('.art-title').textContent.toLowerCase();
            image.style.display = artistName.includes(searchQuery) || artTitle.includes(searchQuery) ? '' : 'none';
        });
    });

    // Event listener for sort functionality
    sortSelect.addEventListener('change', sortImages);

    // Initial sort
    sortImages();
});


function toggleAccordion(button) {
    button.classList.toggle("active");
    var panel = button.nextElementSibling;
    if (panel.style.maxHeight) {
        panel.style.maxHeight = null;
    } else {
        panel.style.maxHeight = panel.scrollHeight + "px";
    } 
}

// Function to show the popup
function showPopup() {
    document.getElementById('comingSoonPopup').style.display = 'block';
}

// Function to hide the popup
function hidePopup() {
    document.getElementById('comingSoonPopup').style.display = 'none';
}

// Attaching the event listener to the "Apply to Program" button
document.addEventListener('DOMContentLoaded', function() {
    document.querySelectorAll('.coming-soon-btn').forEach(button => {
        button.addEventListener('click', function(e) {
            e.preventDefault();
            showPopup();
        });
    });
});
