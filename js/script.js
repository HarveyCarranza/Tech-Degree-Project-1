/******************************************
Treehouse FSJS Techdegree:
project 1 - A Random Quote Generator
******************************************/

// For assistance: 
  // Check the "Project Resources" section of the project instructions
  // Reach out in your Slack community - https://treehouse-fsjs-102.slack.com/app_redirect?channel=chit-chat

/*** 
 * function used to generate a random number between 1 and 255 
 * for use in a later funciton to randomly change the background color of the quotes.
***/
function randomColor(){
  let color = Math.floor(Math.random()*255)+1;
  return color;
} 

/***
* An array that holds 6 different quotes from popular video games
***/

let quotes = [

  {quote: "Hatred and prejudice will never be eradicated. And the witch hunts will never be about witches. To have a scapegoat, that's the key.", source:"Geralt of Rivia, The White Wolf", citation: "The Witcher 3: the Wild Hunt", year: 2015, tags:"gaming"},
  {quote: "Curiosity is essential to carving your own path through life. Get too curious, though, and it'll be a short walk.", source:"Luxord", citation: "Kingdom Heats 358/2 Days", year: 2009,tags:"cautionary"},
  {quote: "Machines aren't capable of evil. Humans make them that way.", source:"Lucca", citation: "Chrono Trigger", year: 1995, tags: "Insightful"},
  {quote: "No matter who you are, bearing too much weight... Inevitably leads to the collapse of everything..", source:"Don Juan", citation: "Hotline Miami", year: 2013, tags: "cautionary"},
  {quote: "You don't have to save the world to find meaning in life... Sometimes, all you need is something simple, like someone to take care of.", source:"Aigis", citation: "Persona 3", year: 2006, tags:"cheerful"},
  {quote: "FOR REAL?!?", source:"Ryuji Sakamoto", citation: "Persona 5/P5R", year:"2016", tags:"humor"},
];

//console.log(quotes);

/***
 * Random quote function that pulls a quote from the 'quotes' array above 
 * by selecting the index value and then returns the quote.
***/

function getRandomQuote(){
  let randomValue = Math.floor(Math.random()*quotes.length);
  //console.log(randomValue);
  return quotes[randomValue];
}
 //console.log(getRandomQuote());
/***
 * a function that concatenates all the parts of the quote returned by the
 * getRandomQuote() into html format.
 * the function also has the bgColorUpdater() inserted to change the color of
 * the background every time the function is called.
 * as well as the line of code just above that changes the quote shown on the page
 * whenever the function is called.
***/

function printQuote(){

  let quoteString = getRandomQuote();
  let formattedQuote = '<p class = "quote">' + quoteString.quote + '</p>' 
  + '<p class = "source">' + quoteString.source;
  
  if( typeof(quoteString.citation)!== "undefined"){

    formattedQuote += '<span class = "citation">' + quoteString.citation + '</span>';
  }

  if(typeof(quoteString.year)!== "undefined"){

    formattedQuote +=  '<span class = "year">' + quoteString.year + '</span> </p>';
  }

  if(typeof(quoteString.tags)!== "undefined"){

    formattedQuote +=  '<span class = "tags">' + quoteString.tags + '</span> </p>';
  }


  document.getElementById('quote-box').innerHTML = formattedQuote;
  bgColorUpdater();

  return formattedQuote;
}

/***
 * function used to generate the random rgb string
 * then concatenates it for use
 * then actually changes the color background using line 97.
 */

function bgColorUpdater(){
  let randomR, randomG, randomB, rGB;
  randomR = randomColor();
  randomG = randomColor();
  randomB = randomColor();

  rGB = 'rgb('+randomR+', ' + randomG + ', ' + randomB +')'; 

  document.body.style.backgroundColor = rGB;
}

/***
 * setInterval function that calls the bgChanger() every 10000 milliseconds
 * the bgChanger() generates a new random quote
 * then calls the print quote function
 * then changes the quote on the page
 * then changes the color
 */

let timer = setInterval(bgChanger,10000);

function bgChanger(){

  getRandomQuote();
  quoteHTML = printQuote();
  document.getElementById('quote-box').innerHTML = quoteHTML;
  bgColorUpdater();
}

/***
 * click event listener for the print quote button
 * DO NOT CHANGE THE CODE BELOW!!
 * looks like code that changes the quote upon a click and calls the printQuote function
***/

document.getElementById('load-quote').addEventListener("click", printQuote, false);