console.log("Hej fra product.js");

const id = new URLSearchParams(window.location.search).get("id");
const productcontainer = document.querySelector(".produkt_container");

getData(`https://kea-alt-del.dk/t7/api/products/${id}`);

function getData(url) {
  fetch(url)
    .then((res) => res.json())
    .then((data) => showProduct(data));
}
function showProduct(product) {
  console.log("showProduct: ", product);

  productcontainer.innerHTML += `<div class="billede">
          <img src="https://kea-alt-del.dk/t7/images/webp/640/${product.id}.webp" alt="${product.productdisplayname}" />
          </div>
          <div class="midt">
          <h2>${product.productdisplayname}</h2>
          <h5>${product.brandname} | ${product.usagetype}</h5>
    
          </div>
      <div class="køb_boks">
            <h3>Sahara Team India Fanwear Round Neck Jersey</h3>
            <p>Nike | Tshirts</p>x$
            <label for="size">Choose a size</label><br>
            <select>
                <option>S</option>
                <option>M</option>
                <option>L</option>
                <option>XL</option>
            </select><br>

             Now DKK <span>${product.price - (product.price * product.discount) / 100}</span>,-

            <button id="basket">Add to basket</button>
        </div>`;
}
