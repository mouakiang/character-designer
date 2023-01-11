// import functions and grab DOM elements
const headDropdown = document.getElementById('head-dropdown');
const middleDropdown = document.getElementById('middle-dropdown');
const bottomDropdown = document.getElementById('bottom-dropdown');
const headEl = document.getElementById('head');
const middleEl = document.getElementById('middle');
const bottomEl = document.getElementById('bottom');
const reportEl = document.getElementById('report');
const catchphrasesEl = document.getElementById('catchphrases');
const catchphraseInput = document.getElementById('catchphrase-input');
const catchphraseButton = document.getElementById('catchphrase-button');

// set state for how many times the user changes the head, middle, and bottom
let head = 0;
let middle = 0;
let bottom = 0;
// set state for all of the character's catchphrases
let catchPhrases = [];

headDropdown.addEventListener('change', () => {
    eventListeners();
});

middleDropdown.addEventListener('change', () => {
    eventListeners();
});

bottomDropdown.addEventListener('change', () => {
    eventListeners();
});

catchphraseButton.addEventListener('click', () => {
    catchphraseButton.src = `assets/head-${catchphraseButton.value}.png`;
    // increment the head change count state
    catchPhrases++;
    // update the dom for the head (use style.backgroundImage on the headEl div instead of trying to set the .src -- it's NOT an img tag!)
    catchphrasesEl.style.backgroundImage = `url("./assets/${catchphraseButton.value}-designer.png)`;
    // catchphrasesEl.style.backgroundImage = `url("./assets/${catchphraseButton.value}-designer.png")`;
    displayStats();
    // update the stats to show the new count (call displayStats() to do this work)
    // catchphrasesEl.textContent = catchphrasesEl;
    catchphrasesEl.textContent = catchphrasesEl;
});

function displayStats() {
    // text content of the reportEl to tell the user how many times they've changed each piece of the state
}

function displayCatchphrases() {
    // clear out the DOM for the currently displayed catchphrases
    // loop through each catchphrase in state
    // and for each catchphrase
    // create an HTML element with the catchphrase as its text content
    // and append that HTML element to the cleared-out DOM
}

function eventListeners() {
    // get the value of the head dropdown
    headDropdown.src = `assets/head-${headDropdown.value}.png`;
    // increment the head change count state
    head++;
    // update the dom for the head (use style.backgroundImage on the headEl div instead of trying to set the .src -- it's NOT an img tag!)
    headEl.style.backgroundImage = `url("./assets/${headDropdown.value}-head.png")`;
    // update the stats to show the new count (call displayStats() to do this work)
    headEl.textContent = head;

    middleDropdown.src = `assets/middle-${middleDropdown.value}.png`;
    // increment the head change count state
    middle++;
    // update the dom for the head (use style.backgroundImage on the headEl div instead of trying to set the .src -- it's NOT an img tag!)
    middleEl.style.backgroundImage = `url("./assets/${middleDropdown.value}-middle.png")`;
    // update the stats to show the new count (call displayStats() to do this work)
    middleEl.textContent = head;

    bottomDropdown.src = `assets/bottom-${bottomDropdown.value}.png`;
    // increment the head change count state
    bottom++;
    // update the dom for the head (use style.backgroundImage on the headEl div instead of trying to set the .src -- it's NOT an img tag!)
    bottomEl.style.backgroundImage = `url("./assets/${bottomDropdown.value}-pants.png")`;
    // update the stats to show the new count (call displayStats() to do this work)
    bottomEl.textContent = head;
}
