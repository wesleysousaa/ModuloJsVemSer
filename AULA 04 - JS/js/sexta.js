const catalogo = [
  {
    id: 1,
    categoria: "Terror",
    titulo: "It",
  },
  {
    id: 2,
    categoria: "Terror",
    titulo: "O Exorcista",
  },
  {
    id: 3,
    categoria: "Terror",
    titulo: "Drácula",
  },
  {
    id: 4,
    categoria: "Romance",
    titulo: "O Morro dos Ventos Uivantes",
  },
  {
    id: 5,
    categoria: "Policial",
    titulo: "O Silêncio dos Inocentes",
  },
  {
    id: 6,
    categoria: "Suspense",
    titulo: "Boneco de Neve",
  },
  {
    id: 7,
    categoria: "Suspense",
    titulo: "Bird Box",
  },
  {
    id: 8,
    categoria: "Romance",
    titulo: "Orgulho e Preconceito",
  },
];

const outputCatalogo = document.createElement("p");
outputCatalogo.className = "message";
outputCatalogo.style.backgroundColor = "green";
outputCatalogo.style.color = "white";

outputCatalogo.innerHTML = `<strong>O Catálogo de livros da biblioteca é composto por:</strong> <br />
  ${catalogo.map((item) => item.titulo).join(", ")}.
`;

const outputCatalogoFiltrado = document.createElement("p");
outputCatalogoFiltrado.className = "message";
outputCatalogoFiltrado.style.backgroundColor = "green";
outputCatalogoFiltrado.style.color = "white";

outputCatalogoFiltrado.innerHTML = `<strong>O Catálogo de livros de Terror da biblioteca são:</strong> <br />
  ${catalogo
    .filter((item) => item.categoria === "Terror")
    .map((item) => item.titulo)
    .join(", ")}.
`;

const container6 = document.getElementById("container6");
container6.appendChild(outputCatalogo);
container6.appendChild(outputCatalogoFiltrado);
