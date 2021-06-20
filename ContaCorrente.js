import {conta} from "./Conta.js"

export class contaCorrente extends conta{
    static numeroDeContas = 0;
    
        constructor(agencia , cliente){
        super(0 , cliente , agencia);
                contaCorrente.numeroDeContas += 1 
        }    
        sacar(valor){
                let taxa = 1.1;
               return this._sacar(valor ,taxa);
                } 
}
