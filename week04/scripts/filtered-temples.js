
// Hamburger menu functionality
const hamburger = document.getElementById('hamburger');
const navMenu = document.getElementById('nav-menu');
const templeGrid = document.querySelector('.temple-grid');

function toggleMenu() {
    const isActive = navMenu.classList.toggle('active');
    hamburger.textContent = isActive ? '✕' : '☰';
    hamburger.setAttribute('aria-expanded', isActive);
}

// Initialize hamburger menu
function initHamburgerMenu() {
    if (hamburger && navMenu) {
        hamburger.addEventListener('click', toggleMenu);
        
        // Close menu when clicking on a link
        document.querySelectorAll('.nav-menu li a').forEach(link => {
            link.addEventListener('click', () => {
                navMenu.classList.remove('active');
                hamburger.textContent = '☰';
                hamburger.setAttribute('aria-expanded', 'false');
            });
        });
        
        // Close menu when clicking outside
        document.addEventListener('click', (event) => {
            const isClickInsideNav = navMenu.contains(event.target) || hamburger.contains(event.target);
            if (!isClickInsideNav && navMenu.classList.contains('active')) {
                navMenu.classList.remove('active');
                hamburger.textContent = '☰';
                hamburger.setAttribute('aria-expanded', 'false');
            }
        });
        
        // Close menu on escape key
        document.addEventListener('keydown', (event) => {
            if (event.key === 'Escape' && navMenu.classList.contains('active')) {
                navMenu.classList.remove('active');
                hamburger.textContent = '☰';
                hamburger.setAttribute('aria-expanded', 'false');
            }
        });
    }
}

// Update footer with current year and last modified date
function updateFooter() {
    // Update copyright year
    const currentYearElement = document.getElementById('currentyear');
    if (currentYearElement) {
        currentYearElement.textContent = new Date().getFullYear();
    }
    
    // Update last modified date
    const lastModifiedElement = document.getElementById('lastModified');
    if (lastModifiedElement) {
        lastModifiedElement.textContent = `Last Modified: ${document.lastModified}`;
    }
}  


// Initialize all functionality when DOM is loaded
document.addEventListener('DOMContentLoaded', function() {
    initHamburgerMenu();
    updateFooter();
    
    console.log('Temple Album initialized successfully');
});

 // Adding Temple objects 

const temples = [
  {
    templeName: "Aba Nigeria",
    location: "Aba, Nigeria",
    dedicated: "2005, August, 7",
    area: 11500,
    imageUrl:
    "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/aba-nigeria/400x250/aba-nigeria-temple-lds-273999-wallpaper.jpg"
  },
  {
    templeName: "Manti Utah",
    location: "Manti, Utah, United States",
    dedicated: "1888, May, 21",
    area: 74792,
    imageUrl:
    "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/manti-utah/400x250/manti-temple-768192-wallpaper.jpg"
  },
  {
    templeName: "Payson Utah",
    location: "Payson, Utah, United States",
    dedicated: "2015, June, 7",
    area: 96630,
    imageUrl:
    "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/payson-utah/400x225/payson-utah-temple-exterior-1416671-wallpaper.jpg"
  },
  {
    templeName: "Yigo Guam",
    location: "Yigo, Guam",
    dedicated: "2020, May, 2",
    area: 6861,
    imageUrl:
    "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/yigo-guam/400x250/yigo_guam_temple_2.jpg"
  },
  {
    templeName: "Washington D.C.",
    location: "Kensington, Maryland, United States",
    dedicated: "1974, November, 19",
    area: 156558,
    imageUrl:
    "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/washington-dc/400x250/washington_dc_temple-exterior-2.jpeg"
  },
  {
    templeName: "Lima Perú",
    location: "Lima, Perú",
    dedicated: "1986, January, 10",
    area: 9600,
    imageUrl:
    "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/lima-peru/400x250/lima-peru-temple-evening-1075606-wallpaper.jpg"
  },
  {
    templeName: "Mexico City Mexico",
    location: "Mexico City, Mexico",
    dedicated: "1983, December, 2",
    area: 116642,
    imageUrl:
    "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/mexico-city-mexico/400x250/mexico-city-temple-exterior-1518361-wallpaper.jpg"
    },

  // Additional temples
  {
    templeName: "Salt Lake Temple",
    location: "Salt Lake City, Utah, United States",
    dedicated: "1893, April, 6",
    area: 382207,
    imageUrl: "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/salt-lake-city-utah/400x250/salt-lake-temple-37762.jpg"
  },
  {
    templeName: "Accra Ghana",
    location: "Accra, Greater Accra, Ghana",
    dedicated: "2004, January, 11",
    area: 17500,
    imageUrl: "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/accra-ghana/400x250/accra-ghana-temple-758103-wallpaper.jpg"
  },
  {
    templeName: "Provo City Center",
    location: "Provo, Utah, United States",
    dedicated: "2016, March, 20",
    area: 85084,
    imageUrl: "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/provo-city-center/400x250/provo-city-center-temple-1593487-wallpaper.jpg"
  }

 
];

// Create temple card element
function createTempleCard(temple) {
    const card = document.createElement('div');
    card.className = 'temple-card';
    
    const img = document.createElement('img');
    img.src = temple.imageUrl;
    img.alt = `Temple of ${temple.templeName}`;
    img.loading = 'lazy';
    
    const info = document.createElement('div');
    info.className = 'temple-info';
    
    const name = document.createElement('h2');
    name.textContent = temple.templeName;
    
    const location = document.createElement('p');
    location.innerHTML = `<strong>Location:</strong> ${temple.location}`;
    
    const dedicated = document.createElement('p');
    dedicated.innerHTML = `<strong>Dedicated:</strong> ${temple.dedicated}`;
    
    const area = document.createElement('p');
    area.innerHTML = `<strong>Area:</strong> ${temple.area.toLocaleString()} sq ft`;
    
    info.appendChild(name);
    info.appendChild(location);
    info.appendChild(dedicated);
    info.appendChild(area);
    
    card.appendChild(img);
    card.appendChild(info);
    
    return card;
}

// Display temples in grid
function displayTemples(templesArray) {
    templeGrid.innerHTML = '';
    templesArray.forEach(temple => {
        const card = createTempleCard(temple);
        templeGrid.appendChild(card);
    });
}

// Filter functions
function filterOldTemples() {
    return temples.filter(temple => {
        const year = parseInt(temple.dedicated.split(',')[0]);
        return year < 1900;
    });
}

function filterNewTemples() {
    return temples.filter(temple => {
        const year = parseInt(temple.dedicated.split(',')[0]);
        return year > 2000;
    });
}

function filterLargeTemples() {
    return temples.filter(temple => temple.area > 90000);
}

function filterSmallTemples() {
    return temples.filter(temple => temple.area < 10000);
}

// Setup navigation filtering
function setupFiltering() {
    const navLinks = document.querySelectorAll('.nav-menu li a');
    
    navLinks.forEach(link => {
        link.addEventListener('click', (e) => {
            e.preventDefault();
            const filterType = link.textContent.toLowerCase();
            
            switch(filterType) {
                case 'home':
                    displayTemples(temples);
                    break;
                case 'old':
                    displayTemples(filterOldTemples());
                    break;
                case 'new':
                    displayTemples(filterNewTemples());
                    break;
                case 'large':
                    displayTemples(filterLargeTemples());
                    break;
                case 'small':
                    displayTemples(filterSmallTemples());
                    break;
                default:
                    displayTemples(temples);
            }
        });
    });
}

// Initialize all functionality when DOM is loaded
document.addEventListener('DOMContentLoaded', function() {
    initHamburgerMenu();
    updateFooter();
    setupFiltering();
    displayTemples(temples);
    
    console.log('Temple Album initialized successfully');
    console.log(`Loaded ${temples.length} temples`);
});