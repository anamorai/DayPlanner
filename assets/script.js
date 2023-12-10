var rowEl = document.querySelectorAll('.task');
console.log(rowEl);
var timeBlockEl = document.querySelectorAll(".row");
console.log(timeBlockEl);

$(document).ready(function () {
    // First I need to add the current day and time to the top of the page  
    var dateTime = moment().format("MMM DD YYYY");
    $("#currentDay").text(dateTime);
    console.log(dateTime);

    //Attach a click event to the save button using .on method
    $(".saveBtn").on("click", function () {
        //pulls text area input text and the hour-# id from HTML 
        var task = $(this).siblings(".task").val();
        var time = $(this).parent().attr("id");

        //Set the value of the specified local storage item using setItem method
        localStorage.setItem(time, task);
    });

    //Set a variable for the current time
    var currentTime = moment().format("HH");
    console.log(currentTime);

    // Create a loop for the timeblock
    for (let i = 0; i < timeBlockEl.length; i++) {
        let hourNumber = timeBlockEl[i].id;
        console.log(hourNumber);
        localStorage.getItem(hourNumber);
        console.log(hourNumber);
        rowEl[i].value = localStorage.getItem(hourNumber);
        let idHour = hourNumber.split('-');
        let singleHour = Number(idHour[1]);
        console.log(singleHour);

        //Set the styling for past present and future (different colours as per requirements)
        if (singleHour < currentTime) {
            rowEl[i].classList.add('past');
        } else if (singleHour == currentTime) {
            rowEl[i].classList.add('present');
        } else if (singleHour > currentTime) {
            rowEl[i].classList.add('future');
        }
    }

});