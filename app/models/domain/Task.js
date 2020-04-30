class Task {

    constructor(nome, quantidade, status){
        this.nome = nome;
        this.quantidade = quantidade;
        this.status = status;
    }

}

module.exports = function() {
    return Task;
}