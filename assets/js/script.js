var TitleText = $(".jumbotron");
var timeStamp = $("<h5>");
var time = moment().format("MMMM Do YYYY");
$(timeStamp).text(time);
TitleText.append(timeStamp);

$(".saveBtn").on("click", function () {
  var storedText1 = $("#9Text").val();
  localStorage.setItem("storedText1", storedText1);
  var storedText2 = $("#10Text").val();
  localStorage.setItem("storedText2", storedText2);
  var storedText3 = $("#11Text").val();
  localStorage.setItem("storedText3", storedText3);
  var storedText4 = $("#12Text").val();
  localStorage.setItem("storedText4", storedText4);
  var storedText5 = $("#1Text").val();
  localStorage.setItem("storedText5", storedText5);
  var storedText6 = $("#2Text").val();
  localStorage.setItem("storedText6", storedText6);
  var storedText7 = $("#3Text").val();
  localStorage.setItem("storedText7", storedText7);
  var storedText8 = $("#4Text").val();
  localStorage.setItem("storedText8", storedText8);
  var storedText9 = $("#5Text").val();
  localStorage.setItem("storedText9", storedText9);
});

onload = function () {
  var getText1 = localStorage.getItem("storedText1");
  document.getElementById("9Text").value = getText1;
  var getText2 = localStorage.getItem("storedText2");
  document.getElementById("10Text").value = getText2;
  var getText3 = localStorage.getItem("storedText3");
  document.getElementById("11Text").value = getText3;
  var getText4 = localStorage.getItem("storedText4");
  document.getElementById("12Text").value = getText4;
  var getText5 = localStorage.getItem("storedText5");
  document.getElementById("1Text").value = getText5;
  var getText6 = localStorage.getItem("storedText6");
  document.getElementById("2Text").value = getText6;
  var getText7 = localStorage.getItem("storedText7");
  document.getElementById("3Text").value = getText7;
  var getText8 = localStorage.getItem("storedText8");
  document.getElementById("4Text").value = getText8;
  var getText9 = localStorage.getItem("storedText9");
  document.getElementById("5Text").value = getText9;
};

var localTime = moment().format("H");
