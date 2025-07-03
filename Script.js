const listings = [
  {
    id: 1,
    title: "Modern House in Jijiga",
    description: "Spacious 2-bedroom house with kitchen, parking and garden.",
    price: "$300/month",
    image: "images/modenHotel.avif"
  },
  {
    id: 2,
    title: "Jijiga Central Hotel Room",
    description: "Standard hotel room with WiFi, breakfast and city view.",
    price: "$25/night",
    image: "images/CentralHotelrom.avif"
  },
  {
    id: 3,
    title: "Family Villa with Yard",
    description: "3-bedroom villa perfect for families. Private yard and garage.",
    price: "$450/month",
    image: "images/familyVilla.avif"
  },
  {
    id: 4,
    title: "Budget Guesthouse Room",
    description: "Simple and clean room near the bus station. Shared bathroom.",
    price: "$15/night",
    image: "images/GuestRoM.avif"
  },
  {
    id: 5,
    title: "Furnished Apartment in Downtown",
    description: "Fully furnished 1-bedroom apartment with balcony and AC.",
    price: "$350/month",
    image: "images/APDowntown.avif"
  },
  {
    id: 6,
    title: "Luxury Hotel Suite - Jijiga Palace",
    description: "Premium suite with king bed, cityview, and 24/7 room service.",
    price: "$70/night",
    image: "images/LUxHotel.avif"
  }
];

function displayListings(listingsToShow) {
  const container = document.getElementById('listing-container');
  container.innerHTML = '';
  listingsToShow.forEach(item => {
    const div = document.createElement('div');
    div.className = 'listing';
    div.innerHTML = `
      <img src="${item.image}" alt="${item.title}" />
      <div class="content">
        <h3>${item.title}</h3>
        <p>${item.description}</p>
        <strong>${item.price}</strong>
        <a href="property.html?id=${item.id}">View details</a>
      </div>
    `;
    container.appendChild(div);
  });
}

function search() {
  const keyword = document.getElementById('searchInput').value.toLowerCase();
  const filtered = listings.filter(item =>
    item.title.toLowerCase().includes(keyword) ||
    item.description.toLowerCase().includes(keyword)
  );
  displayListings(filtered);
  
}

displayListings(listings);



// Form Validation for Xamse Rentals
document.addEventListener('DOMContentLoaded', function() {
  // Common validation functions
  const showError = (input, message) => {
    const formControl = input.closest('form');
    const errorElement = document.createElement('p');
    errorElement.className = 'error-message';
    errorElement.textContent = message;
    formControl.insertBefore(errorElement, input.nextElementSibling);
    input.style.borderColor = '#dc2626';
  };

  const clearErrors = (form) => {
    const errors = form.querySelectorAll('.error-message');
    errors.forEach(error => error.remove());
    const inputs = form.querySelectorAll('input');
    inputs.forEach(input => input.style.borderColor = '#d1d5db');
  };

  const validateEmail = (email) => {
    const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return re.test(email);
  };

  const validatePassword = (password) => {
    // At least 8 chars, 1 uppercase, 1 lowercase, 1 number
    const re = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,}$/;
    return re.test(password);
  };

  // Register Form Validation
  const registerForm = document.querySelector('form[action="#"]');
  if (registerForm) {
    registerForm.addEventListener('submit', function(e) {
      e.preventDefault();
      clearErrors(registerForm);

      let isValid = true;
      const name = document.getElementById('name');
      const email = document.getElementById('email');
      const password = document.getElementById('password');
      const confirm = document.getElementById('confirm');

      // Name validation
      if (name.value.trim() === '') {
        showError(name, 'Full name is required');
        isValid = false;
      }

      // Email validation
      if (email.value.trim() === '') {
        showError(email, 'Email is required');
        isValid = false;
      } else if (!validateEmail(email.value.trim())) {
        showError(email, 'Please enter a valid email');
        isValid = false;
      }

      // Password validation
      if (password.value.trim() === '') {
        showError(password, 'Password is required');
        isValid = false;
      } else if (!validatePassword(password.value)) {
        showError(password, 'Password must be at least 8 characters with uppercase, lowercase and number');
        isValid = false;
      }

      // Confirm password validation
      if (confirm.value.trim() === '') {
        showError(confirm, 'Please confirm your password');
        isValid = false;
      } else if (password.value !== confirm.value) {
        showError(confirm, 'Passwords do not match');
        isValid = false;
      }

      if (isValid) {
        // Form is valid - submit to server
        registerForm.submit();
      }
    });
  }

  // Login Form Validation
  const loginForm = document.querySelector('form[method="POST"]');
  if (loginForm) {
    loginForm.addEventListener('submit', function(e) {
      e.preventDefault();
      clearErrors(loginForm);

      let isValid = true;
      const email = document.getElementById('email');
      const password = document.getElementById('password');

      // Email validation
      if (email.value.trim() === '') {
        showError(email, 'Email is required');
        isValid = false;
      } else if (!validateEmail(email.value.trim())) {
        showError(email, 'Please enter a valid email');
        isValid = false;
      }

      // Password validation
      if (password.value.trim() === '') {
        showError(password, 'Password is required');
        isValid = false;
      }

      if (isValid) {
        // Form is valid - submit to server
        loginForm.submit();
      }
    });
  }
});