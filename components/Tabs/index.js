// Step 2: Create Tabs
// -----------------------
// Using axios send a GET request to the address: https://lambda-times-backend.herokuapp.com/topics
// Once the data is returned console.log it and review the structure.
// Iterate over the topics creating a new Tab component and add it to the DOM
// under the .topics element.
//
//  The tab component should look like this:
//    <div class="tab">topic here</div>

const topicsTab = document.querySelector('.topics')

axios.get('https://lambda-times-backend.herokuapp.com/topics')

.then(function (response) {
    // handle success
    console.log(response);
    response.data.topics.forEach(items => {
        topicsTab.append(tabCreator(items));
    })
  })
  .catch(function (error) {
    // handle error
    console.log(error);
  })

  function tabCreator(array){
      const tabContent = document.createElement('div');

      tabContent.classList.add('tab');

      tabContent.textContent = array;

      return tabContent
  }