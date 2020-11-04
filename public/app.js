document.querySelectorAll('.price').forEach(node => {
  node.textContent = new Intl.NumberFormat('uk-UA', {
    currency: 'uah',
    style: 'currency'
  }).format(node.textContent)
})