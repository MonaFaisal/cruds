var siteName = document.getElementById("siteName");
var siteUrl = document.getElementById("siteUrl");
var bookmarkList = [];

function addProduct() {
  if (validation()) {
    var product = {
      bookmark: siteName.value,
      url: siteUrl.value,
    };
    bookmarkList.push(product);
    displayProduct(bookmarkList);
    clearData();
  }
}

function displayProduct(list) {
  var box = ``;
  for (let i = 0; i < list.length; i++) {
    box += `
    <tr class="tr-two">
    <td class="index">${i + 1}</td>
    <td class="index">${list[i].bookmark}</td>
    <td><button class="btn btn-success pe-2"><i class="fa-solid fa-eye"></i> Visit</td>
    <td><button class="btn pe-2 btn-danger"> <i class="fa-solid fa-trash-can"></i> Delete</td>
  </tr>
        `;
  }
  document.getElementById("data").innerHTML = box;
}

function clearData() {
  siteName.value = "";
  siteUrl.value = "";
}
function validateForm() {
  var x = document.form["siteName"].value;
  if (x == "") {
    alert("Name must be filled out");
    return false;
  }
}

function validation() {
  var regex = /^[a-zA-Z]{3,}$/;
  if (regex.test(siteName.value)) {
    console.log("yes");
    return true;
  } else {
    console.log("no");
    return false;
  }
}
