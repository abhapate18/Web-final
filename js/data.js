window.reviewData = [
  {
    name: "Sajan",
    date: new Date(2023, 2, 1),
    rating: 5,
    text: "Lawn tennis is one of my favorite sports, and I had a great time playing it at this facility. The courts were well-kept, and the personnel was polite and helpful."
  },
  {
    name: "Kirat",
    date: new Date(2023, 3, 2),
    rating: 3,
    text: "My experience playing lawn tennis at this facility was mixed. The courts were unclean, and the equipment appeared to be out of date. The personnel, on the other hand, was kind and personable, and the prices were affordable."
  },
  {
    name: "Mansi",
    date: new Date(2023, 4, 3),
    rating: 2,
    text: "The lawn tennis courts at this facility disappointed me. They were in disrepair, and the equipment appeared to be old and worn out. I wouldn't recommend playing here."
  },
  {
    name: "Yatri",
    date: new Date(2023, 5, 4),
    rating: 4,
    text: "I had a fantastic time playing lawn tennis at this facility. The courts were spotless and immaculately kept, and the personnel was kind and obliging. I can't wait to go back!"
  },
  {
    name: "Maitri",
    date: new Date(2023, 6, 5),
    rating: 5,
    text: "I've been a lawn tennis enthusiast for years, and this facility truly stands out.The courts are excellent, and the staff is really knowledgable and supportive. I definitely suggest it to other gamers!"
  }
];


  // function generateReviewHTML(reviews) {
  //   const reviewsContainer = document.getElementById('reviews-container');
  
  //   reviews.forEach((review) => {
  //     const reviewDiv = document.createElement('div');
  //     reviewDiv.classList.add('review');
  
  //     const nameHeader = document.createElement('h3');
  //     nameHeader.textContent = review.name;
  //     reviewDiv.appendChild(nameHeader);
  
  //     const datePara = document.createElement('p');
  //     datePara.textContent = review.date.toLocaleDateString();
  //     reviewDiv.appendChild(datePara);
  
  //     const ratingPara = document.createElement('p');
  //     ratingPara.textContent = `Rating: ${review.rating}/5`;
  //     reviewDiv.appendChild(ratingPara);
  
  //     const textPara = document.createElement('p');
  //     textPara.textContent = review.text;
  //     reviewDiv.appendChild(textPara);
  
  //     reviewsContainer.appendChild(reviewDiv);
  //   });
  // }


  function generateReviewHTML(reviews) {
    const reviewsContainer = document.getElementById('reviews-container');
  
    reviews.forEach((review) => {
      const reviewDiv = document.createElement('div');
      reviewDiv.classList.add('review');
  
      const nameHeader = document.createElement('h3');
      nameHeader.textContent = review.name;
      reviewDiv.appendChild(nameHeader);
  
      const datePara = document.createElement('p');
      datePara.textContent = review.date.toLocaleDateString();
      reviewDiv.appendChild(datePara);
  
      const ratingPara = document.createElement('p');
      const ratingString = "★".repeat(review.rating) + "☆".repeat(5 - review.rating);
      ratingPara.textContent = ratingString;
      ratingPara.classList.add('rating');
      reviewDiv.appendChild(ratingPara);
  
      const textPara = document.createElement('p');
      textPara.textContent = review.text;
      reviewDiv.appendChild(textPara);
  
      reviewsContainer.appendChild(reviewDiv);
    });
  }
  