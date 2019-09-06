// STEP 1: Create a header component.
// -----------------------
// Using a function create the component you see below:
//
//  <div class="header">
//    <span class="date">SMARCH 28, 2019</span>
//    <h1>Lambda Times</h1>
//    <span class="temp">98°</span>
//  </div >
// And add it to the DOM in the .header-container component

const headerCon = document.querySelector('.header-container');

function Header() {
    const headerDiv = document.createElement('div');
    const date = document.createElement('span');
    const title = document.createElement('h1');
    const temperature = document.createElement('span');

    //structure
    headerDiv.append(date);
    headerDiv.append(title);
    headerDiv.append(temperature);

    //classes
    headerDiv.classList.add('header');
    date.classList.add('date');
    temperature.classList.add('temp');

    //content
    date.textContent = 'SMARCH 28, 2019';
    title.textContent = 'Lambda Times';
    temperature.textContent = '98°';

    return headerDiv
}

headerCon.append(Header());
