class Clientes {
    constructor() {
        this.clientes = new Array();
        const c1 = new Cliente('pedro', "10", 12);
        const c2 = new Cliente('clovis', "20", 123);
        this.clientes.push(c1, c2);
    }
    inserir(cliente) {
        this.clientes.push(cliente);
    }
    remover(cpf) {
        const cpfARemover = this.pesquisarCpf(cpf);
        if (cpfARemover) {
            const indiceCpf = this.clientes.indexOf(cpfARemover);
            if (indiceCpf > -1) {
                this.clientes.splice(indiceCpf, 1);
            }
        }
    }
    pesquisarCpf(cpf) {
        return this.clientes.find(Cliente => Cliente.cpf === cpf);
    }
    listar() {
        return this.clientes;
    }
}
