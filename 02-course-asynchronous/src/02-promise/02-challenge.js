// npm i node-fetch
// package.json: "type": "module"

import fetch from 'node-fetch';
const API = 'https://api.escuelajs.co/api/v1';

function fetchData(urlApi) {
  return fetch(urlApi);
}

fetchData(`${API}/products`)
  .then(response => response.json())
  .then(products => {
    console.log(`First product:`);
    console.log(products[0]);
    return fetchData(`${API}/products/${products[0].id}`);
  })
  .then(response => response.json())
  .then(product => {
    console.log(`Title first product: ${product.title}`);
    return fetchData(`${API}/categories/${product.category.id}`);
  })
  .then(response => response.json())
  .then(category => {
    console.log(`Name category: ${category.name}`);
  })
  .catch(error => console.log(error))
  .finally(() => console.log('Finally'));
