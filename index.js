// add code here
//constructor (object oriented javascript)
function StopWatch(callback) {
  this._time = 0;
  this._interval = null;
  this._delay = 1000;
  this._callback = callback; // would not need a closure and memory would be allocated

  this.start = function() { // starts the watch
    if(this._interval);
    //binding(instance)
    this._interval = setInterval(this.addTime.bind(this), this._delay);
  };

  this.stop = function(){ //stops the watch
    // console.log(this._interval);
    clearInterval(this._interval);
  };

  this.update = function() {
    // clearInterval(this._interval);
    // this._interval = null;
    this._time = 0;
    this._callback("00:00:00");
  };

  this.reset = function() {
    this.update();
  };

  this.addTime = function() { //adds time to the counter
    this._time += this._delay; // where the work is done
    var hours = Math.floor(this._time*(60*60)%60);
    var minutes = Math.floor(this._time/(1000*60)%60);
    var seconds = (this._time/1000%60);
    var milliseconds = ((this._time%1000)/100);
    this._callback(hours + ":" + minutes + ":" + seconds);

    if (hours < 10) {
    hours = "0" + hours;
    }
    if (minutes < 10) {
      minutes = "0" + minutes;
    }
    if (seconds < 10) {
      seconds = "0" + seconds;
    }
  };
}

$(document).ready(function() {
  console.log("This is a test");

  var container = $('#stopWatch');
  // console.log(container);
  var display = container.children('.display');
  // var minute = container.children('.minute');
  // var hour = container.children('.hour');
  var buttons = container.children('button.stopWatch');
  // console.log(display, buttons);

  var stopWatch = new StopWatch(function(newTime) {
    // update the display
    display.text(newTime);
  });

  buttons.on('click', function(event) {
    event.preventDefault();
  // which button did I click?
    var button = $(this);
    if (button.hasClass('start')) { //start the stopwatch!
      // console.log('start the watch!');
      stopWatch.start();
    } else if (button.hasClass('reset')){ // stop the stopwatch
      stopWatch.reset();
    } else { // reset the watch
      stopWatch.stop();
    }
  });
});
