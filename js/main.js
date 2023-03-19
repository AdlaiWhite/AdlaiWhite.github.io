const customName = document.getElementById('customname');
const randomize = document.querySelector('.randomize');
const story = document.querySelector('.story');

function randomValueFromArray(array){
  const random = Math.floor(Math.random()*array.length);
  return array[random];
}

const storyText = "It was 94 fahrenheit outside, so :insertx: decided to stay home and game. When they got to :inserty:, they enjoyed the vibe, then :insertz:. Bob saw the whole thing, but was too cool to care — :insertx: weighs 300 pounds, and it was a hot day.";

let insertX = ["Chief keef", "Barack Mo Bamba", "Hasan piker"];

let insertY = ["the trap house", "the ussr headquarters", "the studio"];

let insertZ = ["the vibe collapsed", "birds came out of nowhere and attacked", "a beautiful sunflower grew"];

randomize.addEventListener('click', result);

function result() {

  if(customName.value !== '') {
    const name = customName.value;

   newStory = newStory.replaceAll('Bob', name);


  }

  if(document.getElementById("uk").checked) {
    const weight = Math.round(300/14) + ' stone';
    const temperature =  Math.round((94-32)*(.5556)) + ' celsius';

    newStory = newStory.replaceAll('94 fahrenheit', temperature);
    newStory = newStory.replaceAll('300 pounds' , weight);


  }

  story.textContent = newStory;
  story.style.visibility = 'visible';
}

var newStory = storyText;

var xitem = randomValueFromArray(insertX);
var yitem = randomValueFromArray(insertY);
var zitem = randomValueFromArray(insertZ);


newStory = newStory.replaceAll(':insertx:', xitem);
newStory = newStory.replaceAll(':inserty:', yitem);
newStory = newStory.replaceAll(':insertz:', zitem);