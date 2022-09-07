let contaController = new ContaController();

contaController.listar();

const c1 = new Conta('1', 100);
const p1 = new Poupanca('2', 100);
const cb1 = new ContaBonificada('3', 0);

console.log('Conta: ' + c1.saldo);

p1.atualizarSaldoAniversario();
console.log('Poupanca: ' + p1.saldo);

cb1.creditar(100);
console.log('Conta Bonificada: ' + cb1.saldo);

const cl1 = new Cliente('1', "200", 2,);
const cl2 = new Cliente('2', "500", 1,)
const clientes = new Clientes();
clientes.inserir(cl1);
clientes.inserir(cl2);
clientes.listar();
clientes.pesquisarCpf('12345689');
clientes.remover('112568935');
