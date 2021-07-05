/* If You've gotten this far, you're on your own! Although we will give you some hints:
    1. You will need to write a function that creates the carousel component, you will find the HTML below.
    2. You will need to grab a reference to all of the images
    3. Create a current index
    4. Those buttons are gonna need some click handlers.
    5. Think of how you would animate this component. Make the cards slide in and out, or fade. It's up to you!
    6. Have fun!
*/

/* HTML:
  <div class="carousel">
    <div class="left-button"> < </div>
    <img src="./assets/carousel/mountains.jpeg" />
    <img src="./assets/carousel/computer.jpeg" />
    <img src="./assets/carousel/trees.jpeg" />
    <img src="./assets/carousel/turntable.jpeg" />
    <div class="right-button"> > </div>
  </div>
*/
const carCon = document.querySelector('.carousel-container');

function cardCarousel(){
  const carouselContainer = document.createElement('div');
  const leftButton = document.createElement('div');
  const img1 = document.createElement('img');
  const img2 = document.createElement('img');
  const img3 = document.createElement('img');
  const img4 = document.createElement('img');
  const rightButton = document.createElement('div');

  //classes
  carouselContainer.classList.add('carousel');
  leftButton.classList.add('left-button');
  rightButton.classList.add('right-button');

  //content
  leftButton.textContent = '<';
  img1.src = "./assets/carousel/mountains.jpeg"
  img2.src = "./assets/carousel/computer.jpeg"
  img3.src = "./assets/carousel/trees.jpeg"
  img4.src = "./assets/carousel/turntable.jpeg"
  img1.style.display = 'block';
  img2.style.display = 'none';
  img3.style.display = 'none';
  img4.style.display = 'none';
  rightButton.textContent = '>';

  //structure
  carouselContainer.append(leftButton);
  carouselContainer.append(img1);
  carouselContainer.append(img2);
  carouselContainer.append(img3);
  carouselContainer.append(img4);
  carouselContainer.append(rightButton);

  const imgArray = [img1, img2, img3, img4]
  let imgIndex = 0

  
    // leftButton.addEventListener('click', e => {
    //   if(imgIndex > 0){
    //     imgIndex--
    //   } else {
    //     imgIndex = imgArray.length - 1
    //   }
    //   renderImg();
    // })

    // rightButton.addEventListener('click', e => {
    //   if(imgIndex < imgArray.length-1){
    //     imgIndex++
    //   } else {
    //     imgIndex = 0
    //   }
    //   renderImg();
    // })

    // function renderImg(){
    //   imgArray.forEach((item, idx) => {
    //     console.log(item, idx)
    //     debugger
    //     if (idx === imgIndex) {
    //       // render this one

    //       item.style.display = 'block'
    //     } else {
    //       // display hide
    //       item.style.display = 'none'
    //     }
    //   })
    // }


    for(let i = 0; i < imgArray.length; i++) {
      rightButton.addEventListener('click', e => {
        let i = 0
        imgArray[i].style.display = 'none';
        imgArray[i + 1].style.display = 'block';
        i = i + 1
      })};


  // leftButton.addEventListener('click', e => {
  //   img4.style.display = 'none'
  //   img1.style.display = 'block'
    
  //   leftButton.addEventListener('click', e => {
  //     img3.style.display = 'none'
  //     img4.style.display = 'block'
      
  //     leftButton.addEventListener('click', e => {
  //       img2.style.display = 'none'
  //       img3.style.display = 'block'
        
  //       leftButton.addEventListener('click', e => {
  //         img1.style.display = 'none'
  //         img2.style.display = 'block'
          
  //       });   
  //     });  
  //   }); 
  // })




  // console.log(carouselContainer);


  return carouselContainer
}

carCon.append(cardCarousel());