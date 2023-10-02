// Constants for arrays 
const nouns = ["The turkey", "Mom", "Dad", "The dog", "The elephant", "The cat"];
const verbs = ["sat on", "ate", "danced with", "saw", "doesn't like", "kissed"];
const adjectives = ["a funny", "a scary", "a goofy", "a slimy", "a barking", "a fat"];
const nouns2 = ["goat", "monkey", "fish", "cow", "frog", "bug", "worm"];
const settings = ["on the moon", "on the chair", "in my spaghetti", "in my soup", "on the grass", "in my shoes"];

// Variables to store selected words
let chosenNoun1 = "";
let chosenVerb = "";
let chosenAdjective = "";
let chosenNoun2 = "";
let chosenSetting = "";

// Event listeners for each button
document.getElementById("noun1").addEventListener("click", noun1_on_click);
document.getElementById("verb").addEventListener("click", verb_on_click);
document.getElementById("adjective").addEventListener("click", adjective_on_click);
document.getElementById("noun2").addEventListener("click", noun2_on_click);
document.getElementById("setting").addEventListener("click", setting_on_click);
document.getElementById("playback").addEventListener("click", playback_on_click);
document.getElementById("random").addEventListener("click", random_on_click);

// Function to select a random word from an array
function getRandomWord(wordArray) {
    const randomIndex = Math.floor(Math.random() * wordArray.length);
    return wordArray[randomIndex];
}

// Event handler functions for each button click
function noun1_on_click() {
    // Select a random noun from the 'nouns' array
    chosenNoun1 = getRandomWord(nouns);
    // Display the chosen noun in the HTML element with id 'chosenNoun1'
    document.getElementById("chosenNoun1").textContent = chosenNoun1;
}

function verb_on_click() {
    // Select a random verb from the 'verbs' array
    chosenVerb = getRandomWord(verbs);
    // Display the chosen verb in the HTML element with id 'chosenVerb'
    document.getElementById("chosenVerb").textContent = chosenVerb;
}

function adjective_on_click() {
    // Select a random adjective from the 'adjectives' array
    chosenAdjective = getRandomWord(adjectives);
    // Display the chosen adjective in the HTML element with id 'chosenAdjective'
    document.getElementById("chosenAdjective").textContent = chosenAdjective;
}

function noun2_on_click() {
    // Select a random noun from the 'nouns2' array
    chosenNoun2 = getRandomWord(nouns2);
    // Display the chosen noun in the HTML element with id 'chosenNoun2'
    document.getElementById("chosenNoun2").textContent = chosenNoun2;
}

function setting_on_click() {
    // Select a random setting from the 'settings' array
    chosenSetting = getRandomWord(settings);
    // Display the chosen setting in the HTML element with id 'chosenSetting'
    document.getElementById("chosenSetting").textContent = chosenSetting;
}

function playback_on_click() {
    // Generate a story using the selected words
    const story = `${chosenNoun1} ${chosenVerb} ${chosenAdjective} ${chosenNoun2} ${chosenSetting}.`;
    // Display the generated story in the HTML element with id 'story'
    document.getElementById("story").textContent = story;
}

function random_on_click() {
    // Select random words for each category and update the story
    chosenNoun1 = getRandomWord(nouns);
    chosenVerb = getRandomWord(verbs);
    chosenAdjective = getRandomWord(adjectives);
    chosenNoun2 = getRandomWord(nouns2);
    chosenSetting = getRandomWord(settings);

    // Call the playback function to display the new story
    playback_on_click();
}
// Function to add student ID and name
function addStudentInfo() {
    const studentIdParagraph = document.getElementById("studentId");
    const studentId = "200544013"; 
    const studentName = "Ritik Patel"; 
    studentIdParagraph.textContent = "Student ID: " + studentId + " | Name: " + studentName;
}


// Call the function to add  student ID/name when the page loads
window.addEventListener("load", addStudentInfo);
