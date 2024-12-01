// Handle Review Form Submission
document.getElementById('reviewForm').addEventListener('submit', function (event) {
  event.preventDefault(); // Prevent the default form submission behavior

  // Get form inputs
  const restaurantName = document.getElementById('restaurant-name').value;
  const rating = document.getElementById('rating').value;
  const category = document.getElementById('category').value;
  const reviewContent = document.getElementById('review').value;

  // Get the current timestamp
  const now = new Date();
  const timestamp = now.toLocaleString('en-US', {
    dateStyle: 'medium',
    timeStyle: 'short',
  });

  // Create a new review element
  const reviewSection = document.getElementById('reviews'); // The recent reviews section
  const newReview = document.createElement('div'); // New review container
  newReview.classList.add('review'); // Add a class for styling
  newReview.innerHTML = `
    <h3>${restaurantName}</h3>
    <p><strong>Category:</strong> ${category}</p>
    <p><strong>Rating:</strong> ${'⭐'.repeat(rating)}</p>
    <p><strong>Review:</strong> ${reviewContent}</p>
    <p class="timestamp"><small><em>Reviewed on ${timestamp}</em></small></p>
  `;

  // Append the new review to the reviews section
  reviewSection.appendChild(newReview);

  // Clear the form fields
  document.getElementById('reviewForm').reset();

  // Optionally scroll to the new review
  newReview.scrollIntoView({ behavior: 'smooth' });
});