var correct1 = function()
{
  var p = document.createElement("p");
  p.innerText="Correct!";
  q1buttonF.after(p);
}

var incorrect1 = function()
{
  var p = document.createElement("p");
  p.innerText="Incorrect..."
  q1buttonF.after(p);
}
