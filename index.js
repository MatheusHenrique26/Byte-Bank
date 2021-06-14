import {cliente} from "./Cliente.js"
import {contaCorrente} from "./ContaCorrente.js"

const cliente1 = new cliente("Matheus" , 11122233309);

const contaCorrenteMatheus = new contaCorrente(1001 , cliente1);

contaCorrenteMatheus.depositar(100);
contaCorrenteMatheus.depositar(100);

const valorSacado =  contaCorrenteMatheus.sacar(50);

const cliente2 = new cliente("Ana",55522233309);

const conta2 = new contaCorrente(9000 , cliente2);

contaCorrenteMatheus.transferir(25 , conta2);