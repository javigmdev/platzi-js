// notes: install plugin live server. click right index.hml + open with live server

const button = document.getElementById('button');

button.addEventListener('click', async function () {
  const module = await import('./module.js');
  console.log(module);
  module.hello();
});
