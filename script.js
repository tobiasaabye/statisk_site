console.log("Dokument loaded...");

const id = 1164;
const productUrl = "https://kea-alt-del.dk/t7/api/products/" + id;
const productcontainer = document.querySelector("produkt_container");

console.log("product: ", productUrl);

function getData() {
  fetch(productUrl).then((res) => res.json().then((data) => Show(data)));
}

function show(data){
    console.log ("shows data er", data);

    produkt_container.innerHTML = 
   //alt du vil have ind på hjemmesiden
}