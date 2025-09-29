console.log("hej");
const productcontainer = document.querySelector(".side_container");
getData("https://kea-alt-del.dk/t7/api/products/");
function getData(url) {
  fetch(url).then((res) => res.json().then((data) => showProducts(data)));
}
function showProducts(products) {
  console.log("products", products);
  products.forEach((product) => {
    console.log("productdisplayname", product.productdisplayname);

    productcontainer.innerHTML += `<article>
        <a href="product.html">
          <img src="https://kea-alt-del.dk/t7/images/webp/640/${product.id}.webp" alt="fodboldtrøje" />
          <h2>${product.productdisplayname}</h2>
          <h5>${product.brandname} | ${product.usagetype}</h5>
          <p>${product.price}</p>
          <p>Læs mere:</p>
        </a>
      </article>`;
  });
}
