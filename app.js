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
let catchPhrases = [''];

headDropdown.addEventListener('change', () => {
    // get the value of the head dropdown
    const headValue = headDropdown.value;
    // increment the head change count state
    head++;
    // update the dom for the head (use style.backgroundImage on the headEl div instead of trying to set the .src -- it's NOT an img tag!)
    headEl.style.backgroundImage = `url("./assets/${headValue}-head.png")`;
    // update the stats to show the new count (call displayStats() to do this work)
    displayStats();
});

middleDropdown.addEventListener('change', () => {
    // middleDropdown.src = `assets/middle-${middleDropdown.value}.png`;
    // increment the head change count state
    middle++;
    // update the dom for the head (use style.backgroundImage on the headEl div instead of trying to set the .src -- it's NOT an img tag!)
    middleEl.style.backgroundImage = `url("./assets/${middleDropdown.value}-middle.png")`;
    // update the stats to show the new count (call displayStats() to do this work)
    displayStats();
});

bottomDropdown.addEventListener('change', () => {
    // increment the head change count state
    bottom++;
    // update the dom for the head (use style.backgroundImage on the headEl div instead of trying to set the .src -- it's NOT an img tag!)
    bottomEl.style.backgroundImage = `url("./assets/${bottomDropdown.value}-pants.png")`;
    // update the stats to show the new count (call displayStats() to do this work)
    displayStats();
});

catchphraseButton.addEventListener('click', () => {
    //get the value of the catchphrase input
    const phraseValue = catchphraseInput.value;
    //push the new catchphrase to the catchphrase array in STATE
    catchPhrases.push(phraseValue);
    //clear out the form input's value so that it's empty to the user
    catchphraseInput.value = '';
    //update the DOM to show the new catchphrases "refactor to /call display catchPhrases to do this work"
    displayCatchphrases();
});

function displayStats() {
    // text content of the reportEl to tell the user how many times they've changed each piece of the state
    reportEl.textContent = `You have changed the head ${head} times, the 
    body ${middle} times, and the pants ${bottom} times. And 
    nobody can forget your character's classic catchphrases:`;
}
function displayCatchphrases() {
    catchphrasesEl.textContent = '';

    for (let phrase of catchPhrases) {
        const newPhrase = document.createElement('p');
        newPhrase.classList.add('phrase');
        newPhrase.textContent = phrase;

        catchphrasesEl.append(newPhrase);
    }
}
