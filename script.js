submitBtn = document.querySelector('#enviar')

class Pessoa {
    constructor(pnome, snome){
        this.pnome = pnome
        this.snome = snome
    }

    amostrarNome() {
        alert(`${this.pnome} ${this.snome}`)
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

    let pessoa = new Pessoa(pnome.value, snome.value)

    pessoa.amostrarNome()

    bd.gravar(pessoa)

    pnome.value = ''
    snome.value = ''
}


