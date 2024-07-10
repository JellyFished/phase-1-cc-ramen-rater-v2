// index.js

//


// Callbacks
const handleClick = (ramen) => {
  // const ramenDetail = document.getElementById('ramen-detail');
  // if (ramenDetail) {
  //   ramenDetail.innerHTML = ''
  //   const detailImage = document.createElement('img');
  //   detailImage.classList.add('detail-image')
  //   const name = document.createElement('h2');
  //   name.classList.add('name');
  //   name.textContent = ramen.name;
  //   const restaurant = document.createElement('h3');
  //   restaurant.classList.add('restaurant');
  //   restaurant.textContent = ramen.restaruant;

  //   ramenDetail.append(name);
  //   ramenDetail.append(restaurant);
  //   ramenDetail.append(detailImage);
  //   const ratingDisplay = document.getElementById('rating-display');
  //   const commentDisplay = document.getElementById('comment-display');

  //   detailImage.src = ramen.image;
  //   detailImage.alt = ramen.name;
  //   ratingDisplay.textContent = ramen.rating;
  //   commentDisplay.textContent = ramen.comment;

  //   ramenDetail.appendChild(detailImage);

  // }
  const detailImg = document.querySelector("#ramen-detail > .detail-image");
  const detailName = document.querySelector("#ramen-detail > .name");
  const detailRestaurant = document.querySelector("#ramen-detail .restaurant");
  const detailsRating = document.getElementById("rating-display");
  const detailsComment = document.getElementById("comment-display");

  detailImg.src = ramen.image;
  detailImg.alt = ramen.image;
  detailName.innerText = ramen.name;
  detailRestaurant.innerText = ramen.restaurant;
  detailsRating.innerText = ramen.rating.toString();
  detailsComment.innerText = ramen.comment;
};

// const addSubmitListener = () => {
//   const form = document.getElementById('new-ramen');
//   if (form) {
//     form.addEventListener('submit', event => {
//       event.preventDefault();
//       const newRamen = {
//         name: form['name'].value,
//         restaurant: form['restaurant'].value,
//         image: form['image'].value,
//         rating: form['rating'].value,
//         comment: form['new-comment'].value
//       };
//       fetch('http//localhost:3000/ramens/id', {
//         method: 'POST',
//         headers: {
//           'Content-Type': 'application/json'
//         },
//         body: JSON.stringify(newRamen),
//       })
//         .then(response => response.json())
//         .then(newRamen => {
//           const menu = document.getElementById('ramen-menu');
//           if (menu) {
//             const img = document.createElement('img');
//             img.src = newRamen.image;
//             img.alt = newRamen.name;
//             img.addEventListener('click', () =>
//               handleClick(newRamen));
//             menu.appendChild(img);
//           } else {
//             console.error('Menu not found');
//           }
//         });
//     });
//   } else {
//     console.error('Form not found');
//   }
// }

const displayRamen = (ramenObj) => {
  const ramenMenuDiv = document.getElementById("ramen-menu");
  const ramenImg = document.createElement("img");
  ramenImg.src = ramenObj.image;
  ramenImg.alt = ramenObj.name;
  ramenImg.classList.add("image-slider");
  ramenImg.addEventListener("click", (event) => handleClick(ramenObj, event));
  ramenMenuDiv.appendChild(ramenImg);
};

const handleSubmit = (event) => {
  event.preventDefault();
  const name = event.target['new-name'].value;
  const restaurant = event.target.restaurant.value;
  const image = event.target.image.value;
  const rating = event.target.rating.value;
  const comment = event.target['new-comment'].value;
  const newRamen = { name, restaurant, image, rating, comment };
  event.target.reset();
  displayRamen(newRamen);
};

const addSubmitListener = () => {
  const ramenForm = document.querySelector("#new-ramen");
  if (ramenForm) {
    ramenForm.addEventListener("submit", handleSubmit);
  }
}

const displayRamens = () => {
  fetch("http://localhost:3000/ramens")
    .then((response) => response.json())
    .then((ramens) => {
      document.getElementById("ramen-menu").innerHTML = "";
      ramens.forEach(displayRamen)
    })
    .catch((error) => console.log(error));
};


// const displayRamens = () => {
//   fetch('http://localhost:3000/ramens/')
//     .then(response => response.json())
//     .then(ramens => {
//       const ramenMenuDiv = document.getElementById('ramen-menu');
//       ramens.forEach(ramen => {
//         const menuImage = document.createElement('img');
//         console.log(ramen)
//         menuImage.src = ramen.image;
//         menuImage.alt = ramen.name;
//         ramenMenuDiv.appendChild(menuImage);
//         handleClick(ramens[0])
//         menuImage.addEventListener('click', () => handleClick(ramen));

//       });
//     });
// }

const main = () => {
  // Invoke displayRamens here
  displayRamens();
  // displayRamen();
  addSubmitListener();

  // Invoke addSubmitListener here
}

main()

// Export functions for testing
export {
  displayRamen,
  displayRamens,
  addSubmitListener,
  handleSubmit,
  handleClick,
  main,
};
