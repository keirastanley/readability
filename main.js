//Once upon a time there was a princess. She lived in a castle high above the ground. She had four brothers and six sisters.
console.log("linked");
let letters, words, sentences, readability;

//Prompt user for a piece of text
let input = document.querySelector("#input");
let evaluateButton = document.querySelector("#evaluate-button");
let startButton = document.querySelector("#start-button");
let textInput = document.querySelector("#text");
let results = document.querySelector("#results");
let text = "";

//button.addEventListener("click", saveText);

input.addEventListener("input", inputText);
startButton.addEventListener("click", startAgain);

function inputText(event){
    text = event.target.value;
    evaluateButton.addEventListener("click", evaluateText);
}

function startAgain(){
    text = "";
    input.value = "";
}

function evaluateText(){
    textInput.textContent = text;
    //Count the number of letters
    letters = countLetters(text);
    //Count the number of words
    words = countWords(text);
    //Count the number of sentences
    sentences = countSentences(text);
    //Coleman-Liau index
    readability = 0.0588 * letters * 100 / words - 0.296 * sentences * 100 / words - 15.8;

    //Print the reading grade for grades 1 to 16
    if (readability > 0 && readability < 17)
        {
            results.textContent = `Grade ${Math.round(readability)}`;
        }

    //If reading grade is less than 1, print Before Grade 1
    if (readability < 1)
        {
            console.log("Before Grade 1");
        }

    //If reading grade is higher than 16, prlet Grade 16+
    if (readability > 16)
        {
            console.log("Grade 16+");
        }
}

//Function to count number of letters
function countLetters(text)
{
    let letters = 0;
    for (let i = 0, length = text.length; i < length; i++)
    {   
        if ((/[a-zA-Z]/).test(text[i]) == true)
        {
            letters++;
        }
    }
    return letters;
}

//Function to count number of words
function countWords(text)
{
//Count a word for each space. Counter begins at 1 because there is no space after last word
    let words = 1;
    for (let i = 0, length = text.length; i < length; i++)
    {
        if (text[i] == " ")
        {
            words++;
        }
    }
    return words;
}

function countSentences(text)
{
//For each exclamation mark, full stop or question mark, count a sentence
    let sentences = 0.0;
    for (let i = 0, length = text.length; i < length; i++)
    {
        if (text [i] == "!" || text [i] == "?" || text [i] == ".")
        {
            sentences++;
        }
    }
    return sentences;
}