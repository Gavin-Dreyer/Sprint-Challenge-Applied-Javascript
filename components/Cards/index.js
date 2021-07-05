// STEP 3: Create Article cards.
// -----------------------
// Send an HTTP GET request to the following address: https://lambda-times-backend.herokuapp.com/articles
// Stduy the response data you get back, closely.
// You will be creating a component for each 'article' in the list.
// This won't be as easy as just iterating over an array though.
// Create a function that will programmatically create the following DOM component:
//
// <div class="card">
//   <div class="headline">{Headline of article}</div>
//   <div class="author">
//     <div class="img-container">
//       <img src={url of authors image} />
//     </div>
//     <span>By {authors name}</span>
//   </div>
// </div>
//
// Create a card for each of the articles and add the card to the DOM.

const cardsContainer = document.querySelector('.cards-container')

axios.get('https://lambda-times-backend.herokuapp.com/articles')

.then(function (response) {
    // handle success
    console.log(response)
    response.data.articles.javascript.forEach(item => {
        cardsContainer.append(cardCreator(item))
    })
    response.data.articles.bootstrap.forEach(item => {
      cardsContainer.append(cardCreator(item))
    })
    response.data.articles.technology.forEach(item => {
      cardsContainer.append(cardCreator(item))
    })
    response.data.articles.jquery.forEach(item => {
      cardsContainer.append(cardCreator(item))
    })
    response.data.articles.node.forEach(item => {
      cardsContainer.append(cardCreator(item))
      })
  
    
  })
  .catch(function (error) {
    // handle error
    console.log(error);
  })




function cardCreator(object) {
    const cardDiv = document.createElement('div');
    const headLine = document.createElement('div');
    const author = document.createElement('div');
    const imgContainer = document.createElement('div');
    const image = document.createElement('img');
    const authSpan = document.createElement('span');

    //structure
    cardDiv.append(headLine);
    cardDiv.append(author);
    author.append(imgContainer);
    imgContainer.append(image);
    author.append(authSpan);

    //classes
    cardDiv.classList.add('card');
    headLine.classList.add('headline');
    author.classList.add('author');
    imgContainer.classList.add('img-container');


    //content
    headLine.textContent = object.headline;
    image.setAttribute = ('src', object.authorPhoto);
    authSpan.textContent = `By ${object.authorName}`;

    return cardDiv
}

