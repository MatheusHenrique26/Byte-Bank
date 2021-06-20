import {cliente} from "./Cliente.js";
import {contaCorrente} from "./Contas/ContaCorrente.js";
import {contaPoupanca} from "./Contas/ContaPoupanca.js";
import {Diretor} from "./Funcionarios/Diretor.js";
import { Gerente } from "./Funcionarios/Gerente.js";
import {SistemaAutentificacao} from "./SistemaAutentificacao.js";


const cliente1 = new cliente("Matheus" , 11122233309);

const contaCorrenteMatheus = new contaCorrente(1001 , cliente1);

contaCorrenteMatheus.depositar(500);
contaCorrenteMatheus.sacar(100);

const contaPoupancaMatheus = new contaPoupanca(60 , cliente1 , 1001);
contaPoupancaMatheus.sacar(10);

const diretor = new Diretor("Estevão", 10000, 123456789);
const gerente = new Gerente("Ana", 5000, 1112223334);
const novoCliente = new cliente("Gean",1112224445, 1234)
diretor.cadastrarSenha(5566);
gerente.cadastrarSenha(1002);

const diretorEstaLogado = SistemaAutentificacao.login(diretor, 5566);
const gerenteEstaLogado = SistemaAutentificacao.login(gerente, 1002);
const clienteEstaLogado = SistemaAutentificacao.login(novoCliente, 1234);
