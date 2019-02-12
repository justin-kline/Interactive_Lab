var correct1 = function()
{
  document.getElementById("feedback1").innerHTML = "Correct!";
  document.getElementById("feedback1").style.color = "green";
}

var incorrect1 = function()
{
  document.getElementById("feedback1").style.color = "red";
  document.getElementById("feedback1").innerHTML = "Incorrect...";
}
