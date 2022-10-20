let contQuantidade = 0
let valueSum = 0
let sum = document.querySelector('#sum')

//redenriando cards no html 
let ul = document.querySelector('ul')
ul.innerHTML = ''
function createCards(arr, reference){
    sum.innerHTML = ''
    arr.forEach((element) => {
        let template = criarTemplate(element)
        reference.append(template)
    })
}

createCards(insertedValuesfiltered, ul)


function criarTemplate(element){
    let value = element.value
    let categoryID = element.categoryID

    let li  = document.createElement('li')
    let h2  = document.createElement('h2')
    let div = document.createElement('div')
    let p = document.createElement('p')
    let button = document.createElement('button')
    
    
    
    li.classList  = 'flex align-center space-between'
    h2.classList  = 'text'
    div.classList = 'flex gap'
    p.classList = 'paragraph-list'
    button.classList = 'trash'

    //removendo cards
    button.addEventListener('click', (event) => {
        valueSum-= value
        sum.innerText = valueSum
        let li = event.path[2]
        li.remove()
    })

    
    h2.innerText = value
    p.innerText = category(categoryID)
    //adicionando 
    valueSum += value
    sum.innerText = valueSum

    
    
    div.append(p, button)
    li.append(h2, div)
    
    return li
    

}

function category(id){
    if(id == 'Entradas'){
        return 'Entrada'
    }else {
        return 'saída'
    }
}

// seprando por categoria
let secaocategoria = document.querySelector('.secao_categoria').addEventListener('click' ,(event) => {
    event.preventDefault()
    sum.innerText = ''
    ul.innerHTML = ''
    let categoriaSelecionada = event.target.innerText
    categoriaSelecionada.classList = 'bt-click'
    if(categoriaSelecionada == 'Todos'){
        createCards(insertedValuesfiltered, ul)
    }else {
        filterCategory(categoriaSelecionada)
    }
})

function filterCategory(arrCategory){
    let cards = insertedValuesfiltered.filter((element)=>{
        console.log(element)
        if(arrCategory == element.categoryID){
            return element
        }
    })

    createCards(cards, ul)
}




//em falta 
//> bug da soma
//> add input 