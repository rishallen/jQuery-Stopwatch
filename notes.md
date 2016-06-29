1) start with html

- <script jquery code
- <script index.js

2) functionality
in index.js
//constructor (object oriented javascript)
//new stopwatch
// could use prototype
function StopWatch(callback) {
  this._time = 0;
  this._interval = null;
  this._delay = 10;
  this._callback = callback; // would not need a closure and memory would be allocated

  this.start = function() { // starts the watch
    // binding: execute this our instance of time
    this.interval = setInterval(this.addTime.bind(this), this._delay);
  };
// similer to .click
// on click has a sibling off click. this allows you to later turn it off
// asychronous because we are not sure when someone will click the buttons
// if thie event does happen we want you to respond. fucntion(event)
buttons.on('click', function(event) {
  event.preventDefault();

  // what I care about: which button did I click?
  var button = $(this); // this is the raw element.
  if (button.hasClass('start')) { //start the stopwatch!
    console.log('start the watch!');
  } else { // stop the stopwatch
    }
    console.log('stop the watch');

  // and what should i do in reposnse?
  console.log('clicked');
  console.log(this); // the this is in an event, the object you interacted with in this case,
  // the start button
  console.log(event); // a parameter passed in event, this is keeping track all info about whats happening during event.
  // you can use this info to make things happen.
  // did the user click on the left half or the right half of button,
  // did user hold button down for a long time...useful info
});
});
