let y = [];
let z = "";
let x = "";
let show = document.getElementById("myInput");
let show1 = document.getElementById("myDropdown");
document.getElementById("aref12").addEventListener("click", aref1);
function aref1() {
  x = document.getElementById("inp").value;
  if (x == "" || x == undefined) {
    alert("enter city name inside the filed")
    return;
  }
  function arrow() {
    z = x.charAt(0).toUpperCase() + x.slice(1);
    console.log(z)

  }
  arrow();
  y.push(z);
  var a = document.createElement('a');
  a.id = 'lola';
  var linkText = document.createTextNode(z);
  a.appendChild(linkText);
  a.title = "my title text";
  a.addEventListener("click", openWindow);
  document.body.appendChild(a);
  console.log(y.length, y, a.innerHTML);
  x.value = "";
  let n = document.getElementById("myDropdown");
  n.appendChild(a);
  //to open new window containg the name of the city when clicking the entered city name//
  function openWindow() {
    var newtab = window.open("");
    var i = a.textContent;
    var p = document.createElement("p");
    p.setAttribute(
      "style",
      "font-size: 50px; font-style: italic; color:gold; display: flex; justify-content: center ; align-items: center;height: 500px;"
    );
    p.innerHTML = "these city name is " + i + "";
    newtab.document.body.appendChild(p);
  }
  z = "";
}
//search function of the city by name//
function filterFunction() {
  var input, filter, ul, li, a, i;
  input = document.getElementById("myInput");
  filter = input.value.toUpperCase();
  div = document.getElementById("myDropdown");
  a = div.getElementsByTagName("a");
  for (i = 0; i < a.length; i++) {
    txtValue = a[i].textContent || a[i].innerText;
    if (txtValue.toUpperCase().indexOf(filter) > -1) {
      a[i].style.display = "";
    } else {
      a[i].style.display = "none";
    }
  }
  if (show.value == "") {
    show1.style.display = "none"
  } else {
    show1.style.display = "block"
  }
}
let btn1 = document.getElementById("btn1")
btn1.onclick = function () {
  if (show1.style.display === "none") {
    show1.style.display = "block";
  } else {
    show1.style.display = "none";
  }
}