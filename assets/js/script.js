

function loadDate() {
    var currentDay = document.getElementById("currentDay")
    var daysList = ["Sunday", "Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"]
    var day = moment().day();
    currentDay.textContent = daysList[day] + ", " + moment().format("MMMM Do")
}

const myElement = document.getElementById('timeBlockContainer');
for (let i = 0; i < myElement.children.length; i++) {
  console.log(myElement.children[i].tagName);
}


function timeBlockCheck() {
    for (var i = 0; i < 9; i++) {
    var currentHour = moment().format("HH");
    var currentTimeBlock = document.getElementById("timeBlockContainer")
    var children = currentTimeBlock.children;
    for (var i = 0; i < children.length; i++) {
        var child = children[i]
        if (child.time < currentHour) {
            console.log("early")
        }
    }
    
    }
}

// function timeBlockReference() {
//     for (var i = 0; i < 9; i++) {
//         var currentHour = moment().format("HH");
//         var currentTimeblock = $("#timeBlockContainer > section");
//         // console.log(currentTimeblock)
//         var attrValue = currentTimeblock.dataset.value;
//         // console.log(attrValue)
//         // console.log(currentTimeblock)
//         if (currentTimeblock.attr("data-time") < currentHour) {
            
//             currentTimeblock.p.addClass("past");
//             currentTimeblock.p.removeClass("present");
//             currentTimeblock.p.removeClass("future");
//         }
//         console.log(currentHour);


//     }

// }

// timeBlockReference()

window.addEventListener("load", function() {
    loadDate()
    timeBlockCheck()
})

