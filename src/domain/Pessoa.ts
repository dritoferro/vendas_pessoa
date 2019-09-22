export class Pessoa {
    _id: string;
    nome: string;
    email: string;
    isActive: boolean = true;
    documento: string;
    isPj: boolean = false;

    constructor(nome: string, email: string, id?: string, documento: string = '', isPj: boolean = false, isActive: boolean = true) {
        this.nome = nome;
        this.email = email;
        this._id = id;
        this.documento = documento;
        this.isPj = isPj;
        this.isActive = isActive;
    }
}
