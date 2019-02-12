var correct1 = function()
{
  document.getElementById("feedback1").innerHTML = "Correct!";
  document.getElementById("feedback1").style.color = "#6b8e23";
  document.getElementById("q1buttonT").disabled = true;
  document.getElementById("q1buttonF").disabled = true;
  document.getElementById("q2buttonT").disabled = false;
  document.getElementById("q2buttonF").disabled = false;
  
}

var incorrect1 = function()
{
  document.getElementById("feedback1").innerHTML = "Incorrect...";
  document.getElementById("feedback1").style.color = "#ff0000";
  document.getElementById("q1buttonT").disabled = true;
  document.getElementById("q1buttonF").disabled = true;
  document.getElementById("q1buttonT").disabled = false;
  document.getElementById("q1buttonF").disabled = false;
}

var correct2 = function()
{
  document.getElementById("feedback2").innerHTML = "Correct!";
  document.getElementById("feedback2").style.color = "#006400";
  document.getElementById("q2buttonT").disabled = true;
  document.getElementById("q2buttonF").disabled = true;
}

var incorrect2 = function()
{
  document.getElementById("feedback2").innerHTML = "Incorrect...";
  document.getElementById("feedback2").style.color = "#ff0000";
  document.getElementById("q2buttonT").disabled = true;
  document.getElementById("q2buttonF").disabled = true;
}
var correct3 = function()
{
  document.getElementById("feedback3").innerHTML = "Correct!";
  document.getElementById("feedback3").stle.color = "#006400";
}

var incorrect3 = function()
{
  document.getElementById("feedback3").innerHTML = "Incorrect...";
  document.getElementById("feedback3").style.color = "#ff0000";
}
var correct4 = function()
{
  document.getElementById("feedback4").innerHTML = "Correct!";
  document.getElementById("feedback4").style.color = "#006400";
}

var incorrect4 = function()
{
  document.getElementById("feedback4").innerHTML = "Incorrect...";
  document.getElementById("feedback4").style.color = "#ff0000";
}
var correct5 = function()
{
  document.getElementById("feedback5").innerHTML = "Correct!";
  document.getElementById("feedback5").style.color = "#006400";
}

var incorrect5 = function()
{
  document.getElementById("feedback5").innerHTML = "Incorrect...";
  document.getElementById("feedback5").style.color = "#ff0000";
}
