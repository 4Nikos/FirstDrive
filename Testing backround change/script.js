function selectTheme(){
  var selection = document.getElementById('style').value;
  console.log(selection);
  document.getElementById("mySelection").innerHTML = selection;
  if (selection=="Light"){
    // console.log("light was chosen");
    // var setColor = document.getElementsByTagName("body")[0].getAttribute('bgcolor').innerHTML="#282824";
    document.getElementById("body").setAttribute("bgcolor", "#ebe8e7");
  }
  else if (selection=="Dark") {
    // console.log("Dark was chosen");
    document.getElementById("body").setAttribute("bgcolor", "#7e7e7e");
  }
  else if (selection=="Blue") {
    // console.log("Dark was chosen");
    document.getElementById("body").setAttribute("bgcolor", "#33DBFF");
  }
}
function goDark(){
var updatetoDARK = document.getElementsByTagName("body")[0].getAttribute('bgcolor').innerHTML="#282824";
console.log(updatetoDARK);
location.reload();
}
//let user set value dark or light or notsure via dropdown
//DOM to get selected value
//if value is Dark DOM and write link tag in the head to point to styleDark.css
//if value is Light DOM and write link tag in the head to point to styleLight.css
