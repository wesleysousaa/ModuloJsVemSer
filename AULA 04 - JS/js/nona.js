const pedidos = [
  {
    id: 1,
    cliente: "Claudiano",
    pizza: "Pizza Calabresa",
    bebida: "Refrigerante",
  },
  {
    id: 2,
    cliente: "Maribela",
    pizza: "Pizza Mafiosa",
    bebida: "Refrigerante",
  },
  {
    id: 3,
    cliente: "Jacinto",
    pizza: "Pizza Calabresa",
    bebida: "Refrigerante",
  },
  {
    id: 4,
    cliente: "Olimpo",
    pizza: "Pizza Mussarela",
    bebida: "Refrigerante",
  },
  {
    id: 5,
    cliente: "Pafúncio",
    pizza: "Pizza Quatro Queijos",
    bebida: "Suco",
  },
  {
    id: 6,
    cliente: "Felisberta",
    pizza: "Pizza Mussarela",
    bebida: "Suco",
  },
  {
    id: 7,
    cliente: "Pafúncio",
    pizza: "Pizza Quatro Queijos",
    bebida: "Cerveja",
  },
  {
    id: 8,
    cliente: "Felisberta",
    pizza: "Pizza Quatro Queijos",
    bebida: "Cerveja",
  },
];

const container9 = document.getElementById("container9");

const pedidosMessage = document.createElement("p");
pedidosMessage.className = "message";
pedidosMessage.style.color = "white";
pedidosMessage.style.backgroundColor = "green";
pedidosMessage.innerHTML = `<strong>No dia de hoje os pedidos de pizza foram:</strong> <br />
${pedidos.map((pedido) => pedido.pizza).join(", ")}.`;

const clientesRefri = document.createElement("p");
clientesRefri.className = "message";
clientesRefri.style.color = "white";
clientesRefri.style.backgroundColor = "green";
clientesRefri.innerHTML = `<strong>Os clientes fizeram o pedido com refrigerante foram:</strong> <br />
  ${pedidos
    .filter((pedido) => pedido.bebida === "Refrigerante")
    .map((pedido) => pedido.cliente)
    .join(", ")}.
`;

const clientesSuco = document.createElement("p");
clientesSuco.className = "message";
clientesSuco.style.color = "white";
clientesSuco.style.backgroundColor = "green";
clientesSuco.innerHTML = `<strong>Os clientes fizeram o pedido com suco foram:</strong> <br />
  ${pedidos
    .filter((pedido) => pedido.bebida === "Suco")
    .map((pedido) => pedido.cliente)
    .join(", ")}.`;

const clientesCerveja = document.createElement("p");
clientesCerveja.className = "message";
clientesCerveja.style.color = "white";
clientesCerveja.style.backgroundColor = "green";
clientesCerveja.innerHTML = `<strong>Os clientes fizeram o pedido com cerveja foram:</strong> <br />
  ${pedidos
    .filter((pedido) => pedido.bebida === "Cerveja")
    .map((pedido) => pedido.cliente)
    .join(", ")}.
`;

container9.appendChild(pedidosMessage);
container9.appendChild(clientesRefri);
container9.appendChild(clientesSuco);
container9.appendChild(clientesCerveja);
