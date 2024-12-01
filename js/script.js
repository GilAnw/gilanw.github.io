// Handle Review Form Submission
document.getElementById('reviewForm').addEventListener('submit', function(event) {
  event.preventDefault();

  // Get form inputs
  const restaurantName = document.getElementById('restaurant-name').value;
  const rating = document.getElementById('rating').value;
  const reviewContent = document.getElementById('review').value;

  // Create a new review element
  const reviewSection = document.getElementById('reviews');
  const newReview = document.createElement('div');
  newReview.classList.add('review');
  newReview.innerHTML = `
    <h3>${restaurantName}</h3>
    <p>Rating: ${'⭐'.repeat(rating)}</p>
    <p>${reviewContent}</p>
  `;

  // Append the new review to the reviews section
  reviewSection.appendChild(newReview);

  // Clear the form
  document.getElementById('reviewForm').reset();
});