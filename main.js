class Product {
  constructor(name, price, year) {
    this.name = name;
    this.price = price;
    this.year = year;
  }
}

class UI {
  addProduct(product) {
    const productList = document.getElementById("product-list");
    const element = document.createElement("div");
    element.innerHTML = `
      <div class="card text-center mt-3">
        <div class="card-body">
          <strong>Product Name</strong>: ${product.name}
          <strong>Product Price</strong>: ${product.price}
          <strong>Product Year</strong>: ${product.year}
          <a href="#" class="btn btn-danger name="delete">Delete</a>
        </div>
      </div>
    `;
    productList.appendChild(element);

    
  }

  reseteForm(){
    document.getElementById("product-form").reset();
  }

  deleteProduct() {

  }

  showMessage() {

  }
}

//Dom Events

document.getElementById("product-form")
    .addEventListener("submit", function(e){
      const name = document.getElementById("name").value
      const price = document.getElementById("price").value
      const year = document.getElementById("year").value

      const product = new Product(name, price, year);
      e.preventDefault();

      const ui = new UI();
      ui.addProduct(product);
      ui.reseteForm();

  });

  document.getElementById("product-list").addEventListener("click", function(e){
    console.log(e.target)
  })