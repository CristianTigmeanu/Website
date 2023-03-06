// Define the number of cards to create
const numberOfCards = 15;

// Get the container element where we'll append the cards
const container = document.getElementById('products-cards-container');

// Define an array of picture filenames
const pictureFilenames = [
"01.jpg",
"02.jpg",
"03.jpg",
"04.jpg",
"05.jpg",
"06.jpg",
"07.jpg",
"08.jpg",
"09.jpg",
"10.jpg",
"11.jpg",
"12.jpg",
"13.jpg",
"14.jpg",
"15.jpg",
];

// Loop through the number of cards to create and create a card for each
for (let i = 0; i < numberOfCards; i++) {
  // Create the card element
  const card = document.createElement('div');
  card.classList.add('card');
  card.id = 'products-cards-container';

  // Choose a random picture filename from the array
  const randomPicture = pictureFilenames[Math.floor(Math.random() * pictureFilenames.length)];

  // Remove the chosen picture filename from the array so it can't be used again
  pictureFilenames.splice(pictureFilenames.indexOf(randomPicture), 1);

  // Create the card image element
  const img = document.createElement('img');
  img.classList.add('card-img-top');
  img.src = `pictures/${randomPicture}`;
  img.alt = 'Card image cap';
  card.appendChild(img);

  // Create the card body element
  const cardBody = document.createElement('div');
  cardBody.classList.add('card-body');

  // Create the card title element
  const title = document.createElement('h5');
  title.classList.add('card-title');
  title.textContent = 'Card title';
  cardBody.appendChild(title);

  // Create the card text element
  const text = document.createElement('p');
  text.classList.add('card-text');
  text.textContent = "Some quick example text to build on the card title and make up the bulk of the card's content.";
  cardBody.appendChild(text);

  // Create the card link element
  const link = document.createElement('a');
  link.classList.add('btn', 'btn-primary');
  link.href = '#';
  link.textContent = 'Go somewhere';
  cardBody.appendChild(link);

  // Add the card body to the card element
  card.appendChild(cardBody);

  // Add the card to the container element
  container.appendChild(card);
}
