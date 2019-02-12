var correct1 = function()
{
  var p = document.createElement("p");
  p.innerText="Correct!";
  header.after(p);
}

var incorrect1 = function()
{
  var p = document.createElement("p");
  p.innerText="Incorrect..."
  header.after(p);
}
