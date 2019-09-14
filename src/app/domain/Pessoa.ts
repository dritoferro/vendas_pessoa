class Pessoa{
    nome : string;
    documento : string;
    email : string;
    isPj : boolean = false;

    constructor(nome, email, documento?, isPj?){
        this.nome = nome;
        this.documento = documento;
        this.email = email;
        this.isPj = isPj;
    }
}