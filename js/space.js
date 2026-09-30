const telaJogo = document.getElementById('telaJogo').getContext('2d')

const tiro = document.getElementById('somTiro')
const modal = document.getElementById('modal')
const mensagemModal = document.getElementById('mensagemModal')
const botaooContinuar = document.getElementById('botaoContinuar')
const botaoTerminar = document.getElementById('botaoTerminar')

class obj {

    constructor(posx, posy, largura, altura, cor){
        this.posx = posx
        this.posy = posy 
        this.largura = largura
        this.altura = altura
        this.cor = cor

    }
    desenhar(){

        telaJogo.fillStyle = this.cor

        telaJogo.fillRect(this.posx, this.posy, this.largura, this.altura)
    }
}