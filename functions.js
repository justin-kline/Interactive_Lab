var correct1 = function()
{
  p = document.getElementById("feedback1");
  p.setAttribute(color="green")
  document.getElementById("feedback1").innerHTML = "Correct!";
}

var incorrect1 = function()
{
  p = document.getElementById("feedback1");
  p.setAttribute(color="red")
  document.getElementById("feedback1").innerHTML = "Incorrect...";
}
