const data_prod = [
  {
    id: 1,
    name: "Teclado",
    Tipo: "Mecanico",
    precio: 1200
  },
];

// Listar todo los productos
export const findAll = () => {
  return data_prod;
};

// Buscar por id
export const findOne = (id) => {
  return data_prod.find((u) => u.id === Number(id));
};

// crear
export const store = (producto) => {
  //MODIFICANDO
  let id2 = data_prod[data_prod.length - 1].id

  producto.id = id2 + 1;
  data_prod.push(producto);  
};

// update
export const update = (id, prod) => {
  const index = data_prod.findIndex((u) => u.id === Number(id));

  data_prod[index] = {
    ...data_prod[index],
    ...prod,
  };
};

export const remove = (id) => {
  const prods = data_prod.filter((u) => u.id !== Number(id));
  data_prod.length = 0;
  data_prod.push(...prods);
};
