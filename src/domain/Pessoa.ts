export class Pessoa {
    id: string;
    nome: string;
    email: string;
    documento?: string;
    isPj: boolean = false;
    isActive: boolean = true;

    constructor(nome: string, email: string, documento?: string, isPj?: boolean) {
        this.nome = nome;
        this.email = email;
        this.documento = documento;
        this.isPj = isPj;
    }
}
