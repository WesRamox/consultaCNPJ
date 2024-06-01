const cpnjInput = document.querySelector('#cnpj')
const sendButton = document.querySelector('.search-button')

const createResult = (data) => {
   const listDetails = document.querySelector('.response')
   const companyName = document.createElement("h1")
   const companyCnpj = document.createElement("p")
   const companyCeo = document.createElement("p")
   // const companyCapital = document.createElement("h")

   companyName.textContent = `${data.razao_social}`
   companyName.classList.add('text-xl')
   companyCnpj.textContent = `CNPJ: ${data.cnpj}`
   companyCeo.textContent = `Sócio(a): ${data.qsa[0].nome_socio}`
   // companyCapital.textContent = 

   listDetails.append(companyName, companyCeo, companyCnpj)
}


async function searchCNPJ() {
   const cnpj = cpnjInput.value.replace(/[./-]/g, "")
   const response = await fetch(`https://brasilapi.com.br/api/cnpj/v1/${cnpj}`)
   const data = await response.json()

   await createResult(data)
}

sendButton.addEventListener('click', (ev) => {
   ev.preventDefault()
   searchCNPJ()
})