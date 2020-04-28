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
    <div class="card text-center mb-4">
      <div class="card-body">
          <strong>Product</strong>: ${product.name} -
          <strong>Price</strong>: ${product.price} - 
          <strong>Year</strong>: ${product.year}
          <a href="#" class="btn btn-danger" name="delete">Delete</a>
      </div>
  </div>
    `;
    productList.appendChild(element);
  }

  reseteForm(){
    document.getElementById("product-form").reset();
  }

  deleteProduct(element) {
    if (element.name === 'delete') {
      element.parentElement.parentElement.parentElement.remove();
      this.showMessage("Product delete successfully", "success");
    }
  }

  showMessage(message, cssClass) {
    const div = document.createElement('div');
    div.className = `alert alert-${cssClass} mt-2`;
    div.appendChild(document.createTextNode(message));
    // Show in The DOM
    const container = document.querySelector('.container');
    const app = document.getElementById('App');
    // Insert Message in the UI
    container.insertBefore(div, app);

    setTimeout(function () {
      document.querySelector(".alert").remove();
    }, 2000);
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

      if(name === "" || price === "" || year === "") {
        return ui.showMessage("Please complete de fields", "danger");
      }
      
      ui.addProduct(product);
      ui.reseteForm();
      ui.showMessage("Product added successfully", "success");

  });

  document.getElementById("product-list").addEventListener("click", function(e){
    const ui = new UI();
    ui.deleteProduct(e.target);
  })