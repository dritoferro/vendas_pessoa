class Pessoa{
    id : string;
    nome : string;
    documento : string;
    isPj : boolean = false;

    constructor(nome : string, documento? : string, isPj? : boolean){
        this.nome = nome;
        this.documento = documento;
        this.isPj = isPj;
    }
}