class Pessoa{
    nome : string;
    documento : string;
    isPj : boolean = false;

    constructor(nome, documento?, isPj?){
        this.nome = nome;
        this.documento = documento;
        this.isPj = isPj;
    }
}