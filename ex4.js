const formElement = document.querySelector("form");

formElement.addEventListener("submit", e => {

  e.preventDefault();

  customerNameValue = e.target.customername.value;
  customerEmailValue = e.target.email.value;
  paymentTypeValue = e.target.paymentType.value;
  locationValue = e.target.location.value;
  promoSelectionValue = "";

  if (e.target.promotion.checked) {
    promoSelectionValue = "on";
  }
  else {
    promoSelectionValue = "off";
  }

  let fd = new FormData();
  fd.append("name", customerNameValue);
  fd.append("email", customerEmailValue);
  fd.append("payment", paymentTypeValue);
  fd.append("promotion", promoSelectionValue);
  fd.append("location", locationValue);

  fdArray = Array.from(fd);
  console.log(Array.from(fdArray));

  tableOutput = document.getElementById("output");
  tableOutput.innerHTML = "";

  const tableTitle = document.createElement("p");
  tableTitle.textContent = "Form Data Entered";
  tableTitle.style.fontWeight = "bold";
  tableOutput.appendChild(tableTitle);

  const customerTable = document.createElement("table");
  customerTable.id = "customerTable";
  tableOutput.appendChild(customerTable);

  const thElement = document.createElement("tr");
  thElement.id = "thElement"

  keyHeadElement = document.createElement("th");
  keyHeadElement.textContent = "Key";
  thElement.appendChild(keyHeadElement);

  valueHeadElement = document.createElement("th");
  valueHeadElement.textContent = "Value";
  thElement.appendChild(valueHeadElement);

  document.getElementById("customerTable").appendChild(thElement);

  fdArray.forEach(CustomerData => {
    trElement = document.createElement("tr");
    trElement.id = "trElementID";

    for (const myElement of CustomerData) {

      tdElement = document.createElement("td");
      tdElement.textContent = myElement;
      trElement.appendChild(tdElement);
    };

    document.getElementById("customerTable").appendChild(trElement);
  })

});

customerNameElement = document.getElementById("customername")
customerNameElement.addEventListener("focus", e => {
  document.getElementById("customernameHelp").textContent = "Enter your full name";
})

customerNameElement.addEventListener("blur", e => {
  document.getElementById("customernameHelp").textContent = "";
})

document.getElementById("email").addEventListener("blur", e => {

  const emailRegex = /.+@.+\..+/;

  let validatyMessage = "";
  if (!emailRegex.test(e.target.value)) {
    validatyMessage = "Invalid email address";
  }
  document.getElementById("emailHelp").textContent = validatyMessage;
})