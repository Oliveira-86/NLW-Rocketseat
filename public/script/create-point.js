

function populateUFs(){
    const ufSelect = document.querySelector("select[name=uf]")
    fetch("https://servicodados.ibge.gov.br/api/v1/localidades/estados")       //Fetch É uma função que precisa de um argumento("parametro da função"), ao executar essa função ele retorna um objeto chamado de promese(promessa).
    .then((res) => {return res.json()} )                                       // Json tbm executa uma promessa
    .then( states => {
        
        for( const state of states){                                           // Vou pegar um estado e colocar na varavel que vai entra no bloco de código
            ufSelect.innerHTML += `<option value = ${state.id}>${state.nome}</option>`         // += "pegue vc mesmo e soma ao resultado"
        }
        
                      
    })
                                                                                       
}

populateUFs()  

function getCities(event){
    const citySelect = document.querySelector("select[name=city]")
    const stateInput = document.querySelector("[name=state]")

    const ufValue = event.target.value

    const indexOfSelectedState = event.target.selectedIndex
    stateInput.value = event.target.options[indexOfSelectedState].text
    
    const url = `https://servicodados.ibge.gov.br/api/v1/localidades/estados/${ufValue}/municipios `

    fetch(url)       
    .then((res) => {return res.json()} )                                       
    .then( cities => {
        
        for( const city of cities){                                         
            citySelect.innerHTML += `<option value = ${city.id}>${city.nome}</option>`         
        }
        
         citySelect.disabled = false              
    })

}




document
        .querySelector("select[name=uf]")
        .addEventListener("change", getCities)