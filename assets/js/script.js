// get our document ready for jQuery.
$(document).ready(function () {
    // use moment.js to declare the times/dates
    var todaysDate = moment().format('dddd MMM Do, YYYY');
    var timeNow = moment().format('hh:mm a');
    var timeCompare = moment().format("H");
    var times = [9, 10, 11, 12, 13,14,15,16,17];    


    // Store our necessary DOM elements to variables.
    var currentDayEl = $("#currentDay");
    var timeBlocks = $(".times");
    var saveBtn = $(".saveBtn");    
    var timeLiEl = $("li");  
    var inputArea = $(".inputArea");

        // declare our global variables.
        var timeEntered, textEntered;

    // Place our current date in the jumbotron in the UI.
    currentDayEl.text(todaysDate);

    colorCode();
    
    /*
        colorCode() function determines if a timeslot is past,
        future, or present and colors the block accordingly.
        Blue ("#92B4D4") will appear for the current time block.
        Green ("#55efc4") will appear for future time blocks.
        Previous time blocks stay the default grey.
    */
    function colorCode(){
    // Determine which colors to show for each times lot.
    for(var i = 0; i < timeLiEl.length; i++){
    // if the current time is equal to a timeblock time make it green.
        if(timeCompare == times[i]){
            inputArea[i].style.backgroundColor = "#92B4D4";
        }
    // if the current time is less than a timeblock time make it blue.
        else if(timeCompare < times[i]){
            inputArea[i].style.backgroundColor = "#55efc4";
        }
    };
    }

    // Cycle through local storage, if an entry exists show it in the 
    // correct timeslot.
    for(var i = 9; i <= 17; i++){
        $("."+i).val(localStorage[""+i]);
        console.log(localStorage[""+i]);
    }

    // Define what happens when our user clicks the "saveBtn"
    $("ul").on("click", ".saveBtn", function (event) {

       // Stop our submit button from deleting the textarea data.
        event.preventDefault();
        // Save the inputBox value.
        var inputBox = ($(this).prev().val());

        // Get the timeslot value which corresponds to the time.
        var timeSlot = parseInt(($(this).parent().attr("value")));
        // store our inputBox and timeSlot vars in global variables.
        textEntered = inputBox;
        timeEntered = timeSlot;
        // Log to the console which timeslot was just saved.
        console.log("User saved to " + timeEntered + " time slot");
        
        // Update localStorage to include our recently input values.
        localStorage.setItem(timeEntered, textEntered);
        var previousPost = localStorage.getItem(textEntered);
    });

});