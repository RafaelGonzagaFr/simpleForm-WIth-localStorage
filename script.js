submitBtn = document.querySelector('#enviar')

class Pessoa {
    constructor(pnome, snome, idade){
        this.pnome = pnome
        this.snome = snome
        this.idade = idade
    }

    amostrarNome() {
        alert(`${this.pnome} ${this.snome} ${this.idade}`)
    }
}

class Bd {
    constructor() {
        let id = localStorage.getItem('id')
    
        if(id === null) {
            localStorage.setItem('id', 0)
        }
    }
    
    getProximoId() {
        let proximoId = localStorage.getItem('id')
        return (parseInt(proximoId) + 1)
    }

    gravar(pessoa) {
        let id = this.getProximoId()

        localStorage.setItem(id, JSON.stringify(pessoa))

        localStorage.setItem('id', id)
    }
}

let bd = new Bd()

submitBtn.onclick = () => {
    let pnome = document.querySelector('#pnome')
    let snome = document.querySelector('#snome')
    let idade = document.querySelector('#idade')

    if(pnome.value != '' && snome.value != '' && idade.value != ''){
        let pessoa = new Pessoa(pnome.value, snome.value, idade.value)

        pessoa.amostrarNome()

        bd.gravar(pessoa)

        pnome.value = ''
        snome.value = ''
        idade.value = ''
    } else {
        alert('Preencha todos os dados')
    }
}




