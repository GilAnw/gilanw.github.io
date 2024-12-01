document.getElementById('reviewForm').addEventListener('submit', function(event) {
    event.preventDefault();
    
    const title = document.getElementById('title').value;
    const rating = document.getElementById('rating').value;
    const content = document.getElementById('content').value;
    
    const reviewSection = document.getElementById('reviews');
    const newReview = document.createElement('div');
    newReview.classList.add('review');
    newReview.innerHTML = `
      <h3>${title}</h3>
      <p>Rating: ${'⭐'.repeat(rating)}</p>
      <p>${content}</p>
    `;
    
    reviewSection.appendChild(newReview);
    
    document.getElementById('reviewForm').reset();
  });