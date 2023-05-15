import "./styles.css";

document.getElementById("app").innerHTML = `
<h1>Pagina de administrare produse</h1>

`;
function shop(name, price, type) {
  return (
    "Numele produsului este " +
    name +
    " pretul este de " +
    price +
    " euro iar tipul este " +
    type +
    "."
  );
}
var node = document.createElement("div");
var breakline = document.createElement("br");
var horizontalline = document.createElement("hr");
var horizontalline2 = document.createElement("hr");
const textnode = document.createTextNode(shop("Ciocolata", 19, "cu Alune"));
const textnode2 = document.createTextNode(shop("Marlboro", 5, "Classic"));
const textnode3 = document.createTextNode(
  shop("Ciocolata Rom", 12, "semi-dulce, 7 ani vechime")
);
node.appendChild(textnode);
node.appendChild(breakline);
node.appendChild(horizontalline);
node.appendChild(textnode2);
node.appendChild(breakline);
node.appendChild(horizontalline2);
node.appendChild(textnode3);

document.getElementById("shop").appendChild(node);

// document.getElementById("shop").innerHTML = "<br>";
