const cpnjInput = document.querySelector('#cnpj')
const sendButton = document.querySelector('.search-button')

const createResult = () => {
   
}


async function searchCNPJ() {
   const cnpj = cpnjInput.value.replace(/[./-]/g, "")
   const response = await fetch(`https://brasilapi.com.br/api/cnpj/v1/${cnpj}`)
   const data = await response.json()

   console.log(data)
}

sendButton.addEventListener('click', (ev) => {
   ev.preventDefault()
   searchCNPJ()
})