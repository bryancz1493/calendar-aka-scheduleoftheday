// Wrap all code that interacts with the DOM in a call to jQuery to ensure that
// the code isn't run until the browser has finished rendering all the elements
// in the html.

$(function () {
    // TODO: Add code to display the current date in the header of the page.
    var today = dayjs();
    var saveButtons = document.getElementsByClassName("saveBtn");
    $('#currentTime').text(today.format('h:mm:ss A'));
    $('#currentDay').text(today.format('MMM D, YYYY'));

    // TODO: Add a listener for click events on the save button. This code should
    // use the id in the containing time-block as a key to save the user input in
    // local storage. HINT: What does `this` reference in the click listener
    // function? How can DOM traversal be used to get the "hour-x" id of the
    // time-block containing the button that was clicked? How might the id be
    // useful when saving the description in local storage?
    // Something is wrong with clickToSave function (color seems wrong)
    function clickToSave(event) {
        event.preventDefault();
        var context = $(this);
        console.log('context', context.prev().prev().text());
        var hour = context.prev().prev().text();

        var inputInTextArea = context.prev().val();
        localStorage.setItem(hour, inputInTextArea);
    }
    
    for (let index = 0; index < saveButtons.length; index++) {
        var saveButton = saveButtons[index];
        saveButton.addEventListener('click', clickToSave);
        // console.log(saveButton);
    }

    // Declare work time (9am-5pm)
    // TODO: Add code to apply the past, present, or future class to each time
    // block by comparing the id to the current hour. HINTS: How can the id
    // attribute of each time-block be used to conditionally add or remove the
    // past, present, and future classes? How can Day.js be used to get the
    // current hour in 24-hour time?
    // To show current time (eg: 9AM)
    var currentTime = dayjs().hour();
    var timeBlocks = document.getElementsByClassName('time-block')
    // TODO: Add code to get any user input that was saved in localStorage and set
    // the values of the corresponding textarea elements. HINT: How can the id
    // attribute of each time-block be used to do this?

    for (let index = 0; index < timeBlocks.length; index++) {
        var timeBlock = timeBlocks[index];
        var timeBlockValue = timeBlock.querySelector('div.col-2').innerHTML;
        var timeBlockId = dayjs(timeBlockValue, 'HA');
        var timeBlockHour = timeBlockId.hour();
        // console.log(timeBlockHour);
        var textArea = $(timeBlock).children()[1];
        var notes = localStorage.getItem(timeBlockValue);
        // console.log(textArea);
        textArea.innerText = notes;
        if (timeBlockHour < currentTime) {
            $(timeBlock).addClass('past');
        } else if (timeBlockHour === currentTime) {
            $(timeBlock).addClass('present');
        } else {
            $(timeBlock).addClass('future');
        }
    }
});