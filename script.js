// Wrap all code that interacts with the DOM in a call to jQuery to ensure that
// the code isn't run until the browser has finished rendering all the elements
// in the html.
// TODO: Add code to display the current date in the header of the page.
var today = dayjs();
var saveButton = document.getElementsByClassName(".btn saveBtn");
$('#currentTime').text(today.format('h:mm:ss A' ));
$('#currentDay').text(today.format('MMM D, YYYY'));
    
    // TODO: Add a listener for click events on the save button. This code should
    // use the id in the containing time-block as a key to save the user input in
    // local storage. HINT: What does `this` reference in the click listener
    // function? How can DOM traversal be used to get the "hour-x" id of the
    // time-block containing the button that was clicked? How might the id be
    // useful when saving the description in local storage?
    //
    function clickToSave(hour) {
        hour.preventDefault();
        var saveButton = document.getElementsByClassName('fas fa-save');
        var inputInTextArea = document.getElementsByClassName(".col-8 col-md-10 description").value;
        saveButton.addEventListener('save', clickToSave);

        window.localStorage.getItem('hour', 'inputInTextArea')
        window.localStorage.setItem('hour', 'clickToSave');
        // document.getElementById('hour-9').innerHTML = window.localStorage.clickToSave; 
    }
    
    // Declare work time (9am-5pm)
    // TODO: Add code to apply the past, present, or future class to each time
    // block by comparing the id to the current hour. HINTS: How can the id
    // attribute of each time-block be used to conditionally add or remove the
    // past, present, and future classes? How can Day.js be used to get the
    // current hour in 24-hour time?
    //
    for (let hour = 9; hour <= 17; hour++) {
    var workTime = dayjs().hour();
    var timeBlock = $('#hour-9, #hour-10, #hour-11, #hour-12, #hour-13, #hour-14, #hour-15, #hour-16, #hour-17');
    
    if (hour < workTime) {
        timeBlock.addClass('past');
    } else if (hour === workTime) {
        timeBlock.addClass('present');
    } else {
        timeBlock.addClass('future');
    }
}

// TODO: Add code to get any user input that was saved in localStorage and set
// the values of the corresponding textarea elements. HINT: How can the id
// attribute of each time-block be used to do this?
//
// function userInput() {
//     var input = 
// }

$(function () {


  });