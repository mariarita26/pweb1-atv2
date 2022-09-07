class Cliente {
    constructor(_nome, _cpf, _conta) {
        this._nome = _nome;
        this._cpf = _cpf;
        this._conta = _conta;
    }
    get nome() {
        return this._nome;
    }
    set nome(novoNome) {
        this._nome = novoNome;
    }
    get cpf() {
        return this._cpf;
    }
    set cpf(cpf) {
        this._cpf = cpf;
    }
    get conta() {
        return this._conta;
    }
    set conta(conta) {
        this._conta = conta;
    }
    toString() {
        return `Cliente: ${this._nome} 
        - Conta: ${this._conta}`;
    }
}
