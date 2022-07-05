var daysList = ["Sunday", "Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"]


$(document).ready(function() {
    var day = moment().day();
    $("#currentDay").text(daysList[day] + ", " + moment().format("MMMM Do"))
})

