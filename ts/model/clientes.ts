class Clientes {

    private clientes: Array<Cliente>;

    constructor() {
        this.clientes = new Array<Cliente>();
        const c1 = new Cliente('Rita', "19", 12);
        const c2 = new Cliente('Targino', "15", 123);
        this.clientes.push(c1, c2);
    }

    inserir(cliente: Cliente): void{
        this.clientes.push(cliente);
    }

    remover(cpf: string): void {
        const cpfARemover = this.pesquisarCpf(cpf);
        if(cpfARemover) {
            const indiceCpf = this.clientes.indexOf(cpfARemover);
            if(indiceCpf > -1) {
                this.clientes.splice(indiceCpf, 1);
            }
        }
    }

    pesquisarCpf(cpf: string) : Cliente{
        return this.clientes.find(
            Cliente => Cliente.cpf === cpf
        );
    }

    listar() : Array<Cliente> {
        return this.clientes;
    }

}