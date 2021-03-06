var sellData = [];
var buyData = [];

function requestData() {
  var ajax = new XMLHttpRequest();
  ajax.onreadystatechange = function() {
    if(this.readyState == 4 && this.status == 200) {
      loadData(this);
    }
  }
  ajax.open("GET", "/getData", true);
  ajax.send();
}


function getData() {
  try {
    requestData();
  }
  catch(e) {
    alert("Error getting data!");
    console.log(e.title + "\n" + e.messsage);
  }
}

function loadData(ajax) {
  sellData = JSON.parse(ajax.responseText);
  buyData = JSON.parse(ajax.responseText);

  var selltable = document.getElementById("sellTable");
  var buytable = document.getElementById("buyTable");
  var htmlStr = ""

  if(sellData.length > 0) {
    htmlStr += "<tr>\
    <th>Seller Name</th>\
    <th>Textbook Name</th>\
    <th>ISBN</th>\
    <th>Price</th>\
    <th>Email</th>\
    </tr>";
  }
  else {
    htmlStr += "<tr>\
    <td>No offers so far!</td>\
    </tr>";
  }

  for(var i = 0; i < sellData.length; i++) {
    var currentEntry = sellData[i];

    htmlStr += "<tr>\
    <td>" + currentEntry["name"] + "</td>\
    <td>" + currentEntry["bookName"] + "</td>\
    <td>" + currentEntry["isbn"] + "</td>\
    <td>" + currentEntry["price"] + "</td>\
    <td>" + currentEntry["email"] + "</td>\
    </tr>";
  }

  selltable.innerHTML = htmlStr;

  htmlStr = "";
  if(buyData.length > 0) {
    htmlStr += "<tr>\
    <th>Buyer Name</th>\
    <th>Textbook Name</th>\
    <th>ISBN</th>\
    <th>Price</th>\
    <th>Email</th>\
    </tr>";
  }
  else {
    htmlStr += "<tr>\
    <td>No offers so far!</td>\
    </tr>";
  }

  for(var i = 0; i < buyData.length; i++) {
    var currentEntry = buyData[i];

    htmlStr += "<tr>\
    <td>" + currentEntry["name"] + "</td>\
    <td>" + currentEntry["bookName"] + "</td>\
    <td>" + currentEntry["isbn"] + "</td>\
    <td>" + currentEntry["price"] + "</td>\
    <td>" + currentEntry["email"] + "</td>\
    </tr>";
  }
  buytable.innerHTML = htmlStr;

}
