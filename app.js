const cpnjInput = document.querySelector('.cnpj')

async function searchCNPJ() {
   const response = fetch(`https://brasilapi.com.br/api/cnpj/v1/${}`)
}