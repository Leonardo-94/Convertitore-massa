document.getElementById("output").style.visibility = "hidden";
document.getElementById("grammiInput").addEventListener("input", function(e) {
  document.getElementById("output").style.visibility = "visible";
  let grammi = e.target.value;  
  document.getElementById("kgOutput").innerHTML = grammi / 1000;
  document.getElementById("ozOutput").innerHTML = grammi / 28.3495231;
  document.getElementById("lbsOutput").innerHTML = grammi / 453.59;
});