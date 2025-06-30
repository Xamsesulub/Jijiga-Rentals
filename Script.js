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

