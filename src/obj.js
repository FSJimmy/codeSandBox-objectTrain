import "./styles.css";

let product = {
  changeProduct: function (name, price, type) {
    this.name = name;
    this.price = price;
    this.type = type;
    return (
      "Numele produsului vandut este " +
      name +
      " are pretul de " +
      price +
      " euro" +
      " si tipul este " +
      type +
      " ."
    );
  }
};
document.write(product.changeProduct("Tuica", 9, "5 grade"));
