

//Clear a screen

function clearScreen() {
    document.getElementById("repeatDisplay").value = "0";
}

/*Timer Functions
     countDown starts the timer
    clearCountDown stops the countdown function 
    addThirty adds 30 seconds to the count
    pause pauses the count
    restart restarts the count
    TODO clear function will prob also need to reset the pause var to false as well as change thge button 
*/

//Start Timer Function. Timer stops when countdown = 0

var timer;
function countDown () {
    let timeToCount = document.getElementById("timeBetweenSets").value;
    timeToCount *= 60;
    timer = setInterval(function (){
        const repeatDisplay = document.getElementById("repeatDisplay");
        if (timeToCount >= 0) {
            repeatDisplay.value = timeToCount;
            timeToCount --; 
        } 
        else {
            clearCountdown();
            clearScreen();
        }
    }, 1000)
  
}

//Pause (and restart) timer
var newTimer;
var pause = false;
function pauseTime () {
    if (pause === false) {
        let currentTime = document.getElementById("timeBetweenSets").value;
       
        clearCountdown();
        document.getElementById("timeBetweenSets").value = currentTime;
        pause = true;
    }
    else {
        let currentTime = document.getElementById("repeatDisplay").value;
        
        newTimer = setInterval(function (){
        const repeatDisplay = document.getElementById("repeatDisplay");
        pause = false;
        if (currentTime >= 0) {
            repeatDisplay.value = currentTime;
                currentTime --; 
            } 
        else {
                clearCountdown();
                clearScreen();
            }
        }, 1000)
    }

}

//Takes a specific amount of time and starts countdown
function specificTime(seconds){
    newTimer = setInterval(function (){
        const repeatDisplay = document.getElementById("repeatDisplay");
        pause = false;
        if (seconds >= 0) {
            repeatDisplay.value = seconds;
                seconds --; 
            } 
        else {
                clearCountdown();
                clearScreen();
            }
        }, 1000)
}


//Pause button functionality and color change
const pauseButton = document.getElementById("pauseButton");
var pauseToggle = false;
pauseButton.onclick = function () {
    pauseTime();
    
    if (pauseToggle === false) {
        pauseButton.style.backgroundColor = "green";
        pauseButton.innerHTML = 'Go!';
        pauseToggle = true;
        }
        
        else {
        pauseButton.style.backgroundColor = "red";
        pauseButton.innerHTML = "Pause";
        pauseToggle = false;
    
    }
    
}

//Add 30 seconds to timer
const addThirtySeconds = document.getElementById("addThirty");
addThirtySeconds.onclick = function () {
    
    if (pause === false ) {
        let currentTime = document.getElementById("repeatDisplay").value;
        clearCountdown();
        document.getElementById("repeatDisplay").value = parseFloat(currentTime) + 30;     
        pause = true;
        pauseTime();

    } else {
        let currentTime = document.getElementById("repeatDisplay").value;
        clearCountdown();
        document.getElementById("repeatDisplay").value = parseFloat(currentTime) + 30;
        
    }

}
 
    




//Clear functions

//Clear timer function
function clearCountdown (){
    clearInterval(timer);
    clearInterval(newTimer);
}


//Clear Reps to 0
const resetReps = document.getElementById("repResetButton");
resetReps.onclick = function () {
    clearCountdown();
    document.getElementById("repDisplay").value = "0";
}

//Clear timer to 0
const timerReset = document.getElementById("timerReset");
timerReset.onclick = function() {
    clearCountdown();
    clearScreen();
}

//Reset all
const resetAll = document.getElementById("restReset");
restReset.onclick = function () {
    clearCountdown ()
    clearScreen ()
    document.getElementById("timeBetweenSets").value ="3";
    document.getElementById("repDisplay").value ="0";
}


//Rep buttons

//Add reps and start timer IF not in pause mode
const addRepCount = document.getElementById("repAddButton");
addRepCount.onclick = function () {
    let reps = document.getElementById("repDisplay").value;
    reps ++;
    document.getElementById("repDisplay").value = reps;
    if (pause === false) {
        clearCountdown();
        countDown();
    } else {
        clearCountdown();
    }
    
}

//Remove reps and start timer
const removeRepCount = document.getElementById("removeRepButton");
removeRepCount.onclick = function () {
    let reps = document.getElementById("repDisplay").value
    if (reps > 0){
    reps --;
    document.getElementById("repDisplay").value = reps;
    } else {
        reps= 0;
    }

}


// Rest buttons
const addRest = document.getElementById("restIncrease");
addRest.onclick = function () {
    let rest = document.getElementById("timeBetweenSets").value;
    rest ++;
    document.getElementById("timeBetweenSets").value = rest;
}


const removeRest = document.getElementById("restDecrease");
removeRest.onclick = function () {
    let rest = document.getElementById("timeBetweenSets").value
    if (rest > 0){
    rest --;
    document.getElementById("timeBetweenSets").value = rest;
    } else {
        rest= 0;
    }

}